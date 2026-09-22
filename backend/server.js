const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());


// ==============================
// GEMINI
// ==============================

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});


// ==============================
// GEMINI AI FUNCTION
// ==============================

async function generateAIResponse(prompt) {

    const maxRetries = 5;

    for (let attempt = 0; attempt < maxRetries; attempt++) {

        try {

            const response = await ai.models.generateContent({

                model: "gemini-3.6-flash",

                contents: prompt,

                config: {

                    responseMimeType: "application/json",

                    responseSchema: {

                        type: "object",

                        properties: {

                            score: {
                                type: "integer"
                            },

                            relevance: {
                                type: "integer"
                            },

                            technicalAccuracy: {
                                type: "integer"
                            },

                            communication: {
                                type: "integer"
                            },

                            structure: {
                                type: "integer"
                            },

                            completeness: {
                                type: "integer"
                            },

                            strengths: {
                                type: "array",
                                items: {
                                    type: "string"
                                }
                            },

                            weaknesses: {
                                type: "array",
                                items: {
                                    type: "string"
                                }
                            },

                            suggestions: {
                                type: "array",
                                items: {
                                    type: "string"
                                }
                            },

                            feedback: {
                                type: "string"
                            }

                        },

                        required: [
                            "score",
                            "relevance",
                            "technicalAccuracy",
                            "communication",
                            "structure",
                            "completeness",
                            "strengths",
                            "weaknesses",
                            "suggestions",
                            "feedback"
                        ]

                    }

                }

            });

            console.log("Gemini evaluation completed.");

            return response;

        }

        catch (error) {

            console.error(
                `Gemini attempt ${attempt + 1} failed.`
            );


            // Retry only for temporary Gemini overload

            if (
                error.status === 503 &&
                attempt < maxRetries - 1
            ) {

                const delay =
                    2000 * Math.pow(2, attempt);

                console.log(
                    `Gemini busy. Retrying in ${delay / 1000} seconds...`
                );

                await new Promise(function(resolve) {

                    setTimeout(resolve, delay);

                });

            }

            else {

                throw error;

            }

        }

    }

}


// ==============================
// HOME
// ==============================

app.get("/", function(req, res) {

    res.json({

        message:
            "AI Interview Backend is running!"

    });

});


// ==============================
// AI EVALUATION
// ==============================

app.post(
    "/api/evaluate",
    async function(req, res) {

        const {
            role,
            question,
            answer
        } = req.body;


        // ==============================
        // CHECK INPUT
        // ==============================

        if (
            !role ||
            !question ||
            !answer
        ) {

            return res.status(400).json({

                error:
                    "Role, question and answer are required."

            });

        }


        try {

            // ==============================
            // FAST AI PROMPT
            // ==============================

            const prompt = `

You are an expert interview evaluator.

Role: ${role}

Question:
${question}

Candidate Answer:
${answer}

Evaluate the answer fairly.

Check:
- Relevance
- Technical accuracy
- Communication
- Structure
- Completeness

Important:
- Judge only the actual answer.
- Do not reward unnecessary length.
- For technical questions, check factual correctness.
- Give concise and useful feedback.
- Keep strengths, weaknesses and suggestions short.

Return JSON with:
score: 0-100
relevance: 0-100
technicalAccuracy: 0-100
communication: 0-100
structure: 0-100
completeness: 0-100
strengths: maximum 2 short points
weaknesses: maximum 2 short points
suggestions: maximum 2 short points
feedback: short paragraph

`;


            // ==============================
            // CALL GEMINI
            // ==============================

            const response =
                await generateAIResponse(prompt);


            // ==============================
            // PARSE RESPONSE
            // ==============================

            const evaluation =
                JSON.parse(response.text);


            // ==============================
            // SEND RESULT
            // ==============================

            res.json({

                success: true,

                ...evaluation

            });

        }


        catch (error) {

            console.error(
                "GEMINI EVALUATION ERROR:",
                error
            );


            res.status(500).json({

                success: false,

                error:
                    "AI evaluation failed. Please try again."

            });

        }

    }
);


// ==============================
// SERVER
// ==============================

const PORT =
    process.env.PORT || 5000;


app.listen(
    PORT,
    function() {

        console.log(
            `Server running on http://localhost:${PORT}`
        );

    }
);