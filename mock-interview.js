const mockQuestions = {

    "Frontend Developer": [
        "Tell me about yourself.",
        "What is HTML and why is it used?",
        "What is the difference between HTML and CSS?",
        "What is CSS Flexbox?",
        "What is responsive web design?",
        "What is CSS Grid?",
        "What is the difference between class and id in HTML?",
        "What are semantic HTML elements?",
        "What is the CSS box model?",
        "What is the difference between margin and padding?",
        "What are CSS media queries?",
        "What is the difference between block and inline elements?",
        "What is JavaScript and why is it used in web development?",
        "What is the DOM?",
        "What is the difference between relative, absolute and fixed positioning?",
        "What is a CSS pseudo-class?",
        "What is the difference between display none and visibility hidden?",
        "What is a responsive navigation bar?",
        "What are forms in HTML?",
        "How can you improve the performance of a website?"
    ],

    "JavaScript Developer": [
        "Tell me about yourself.",
        "What is JavaScript?",
        "What is the difference between let, const and var?",
        "What is an array in JavaScript?",
        "What is a function?",
        "What is an object in JavaScript?",
        "What is the difference between == and ===?",
        "What is the DOM?",
        "What is an event listener?",
        "What is an arrow function?",
        "What is a callback function?",
        "What is a promise in JavaScript?",
        "What is async and await?",
        "What is the difference between null and undefined?",
        "What are template literals?",
        "What is scope in JavaScript?",
        "What is hoisting?",
        "What is the difference between map(), filter() and reduce()?",
        "What is localStorage?",
        "What is JSON and where is it used?"
    ],

    "Software Developer": [
        "Tell me about yourself.",
        "What is a programming language?",
        "What is Object-Oriented Programming?",
        "What is a data structure?",
        "What is the difference between frontend and backend?",
        "What is an algorithm?",
        "What is the difference between a compiler and an interpreter?",
        "What is a variable?",
        "What is a loop?",
        "What is conditional statement?",
        "What is a function in programming?",
        "What is inheritance in OOP?",
        "What is encapsulation?",
        "What is polymorphism?",
        "What is abstraction?",
        "What is a database?",
        "What is SQL?",
        "What is an API?",
        "What is version control?",
        "What is Git and why is it used?"
    ],

    "HR Interview": [
        "Tell me about yourself.",
        "Why should we hire you?",
        "What are your strengths?",
        "What is your weakness?",
        "Where do you see yourself in five years?",
        "Why do you want to work with our company?",
        "Why did you choose your field of study?",
        "Tell me about a challenge you faced and how you solved it.",
        "How do you handle pressure?",
        "How do you handle failure?",
        "Are you comfortable working in a team?",
        "Tell me about a time you worked in a team.",
        "How do you manage your time?",
        "What motivates you?",
        "Why should we select you over other candidates?",
        "Are you willing to learn new technologies?",
        "How do you handle criticism?",
        "What are your career goals?",
        "What are your salary expectations?",
        "Do you have any questions for us?"
    ]

};


/* =====================================================
   INTERVIEW VARIABLES
   ===================================================== */

let mockCurrentQuestion = 0;

let mockRole = "Frontend Developer";

let mockTotalScore = 0;

let questionScores = [];

let evaluationScores = [];

let sessionQuestionIndexes = [];

let sessionQuestions = [];


/* =====================================================
   DOM ELEMENTS
   ===================================================== */

const roleSelect = document.getElementById("role");

const mockQuestion =
    document.getElementById("mock-question");

const mockQuestionNumber =
    document.getElementById("mock-question-number");

const answerBox =
    document.getElementById("answer");

const submitAnswer =
    document.getElementById("submit-answer");

const nextQuestion =
    document.getElementById("next-question");

const feedbackBox =
    document.getElementById("feedback-box");

const feedback =
    document.getElementById("feedback");


const aiScore =
    document.getElementById("ai-score");

const relevanceScore =
    document.getElementById("relevance-score");

const technicalScore =
    document.getElementById("technical-score");

const communicationScore =
    document.getElementById("communication-score");

const structureScore =
    document.getElementById("structure-score");

const completenessScore =
    document.getElementById("completeness-score");


const strengthsList =
    document.getElementById("strengths-list");

const weaknessesList =
    document.getElementById("weaknesses-list");

const suggestionsList =
    document.getElementById("suggestions-list");


const restartInterview =
    document.getElementById("restart-interview");

const questionPerformanceList =
    document.getElementById("question-performance-list");


/* =====================================================
   GET ATTEMPTED QUESTIONS
   ===================================================== */

function getAttemptedQuestions(role) {

    const key =
        "attemptedMockQuestions_" + role;

    const saved =
        localStorage.getItem(key);

    if (!saved) {
        return [];
    }

    try {

        const parsed =
            JSON.parse(saved);

        if (Array.isArray(parsed)) {
            return parsed;
        }

    } catch (error) {

        console.error(
            "Error reading attempted questions:",
            error
        );

    }

    return [];
}


/* =====================================================
   SAVE ATTEMPTED QUESTION
   ===================================================== */

function saveAttemptedQuestion(role, questionIndex) {

    const key =
        "attemptedMockQuestions_" + role;

    let attempted =
        getAttemptedQuestions(role);


    if (!attempted.includes(questionIndex)) {

        attempted.push(questionIndex);

        localStorage.setItem(
            key,
            JSON.stringify(attempted)
        );

    }

}


/* =====================================================
   RESET QUESTION HISTORY
   ===================================================== */

function resetQuestionHistory(role) {

    const key =
        "attemptedMockQuestions_" + role;

    localStorage.removeItem(key);

}


/* =====================================================
   SHUFFLE ARRAY
   ===================================================== */

function shuffleArray(array) {

    const shuffled =
        [...array];

    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            shuffled[i],
            shuffled[j]
        ] =
        [
            shuffled[j],
            shuffled[i]
        ];

    }

    return shuffled;

}


/* =====================================================
   CREATE NEW INTERVIEW SESSION
   ===================================================== */

function createInterviewSession() {

    const allQuestions =
        mockQuestions[mockRole];

    let attempted =
        getAttemptedQuestions(mockRole);


    /*
       If all 20 questions have already
       been answered, start a new cycle.
    */

    if (
        attempted.length >=
        allQuestions.length
    ) {

        resetQuestionHistory(mockRole);

        attempted = [];

    }


    /*
       Get questions that have not
       been answered before.
    */

    let availableIndexes = [];

    for (
        let i = 0;
        i < allQuestions.length;
        i++
    ) {

        if (!attempted.includes(i)) {

            availableIndexes.push(i);

        }

    }


    /*
       Randomize available questions.
    */

    availableIndexes =
        shuffleArray(
            availableIndexes
        );


    /*
       Select maximum 5 questions.
    */

    sessionQuestionIndexes =
        availableIndexes.slice(0, 5);


    sessionQuestions =
        sessionQuestionIndexes.map(
            function(index) {

                return allQuestions[index];

            }
        );


    /*
       Reset interview progress.
    */

    mockCurrentQuestion = 0;

    mockTotalScore = 0;

    questionScores = [];

    evaluationScores = [];

}


/* =====================================================
   LOAD CURRENT QUESTION
   ===================================================== */

function loadMockQuestion() {

    if (
        sessionQuestions.length === 0
    ) {

        createInterviewSession();

    }


    const question =
        sessionQuestions[
            mockCurrentQuestion
        ];


    mockQuestion.textContent =
        question;


    mockQuestionNumber.textContent =
        `Question ${mockCurrentQuestion + 1} of ${sessionQuestions.length}`;


    answerBox.value = "";


    feedbackBox.style.display =
        "none";


    submitAnswer.style.display =
        "inline-block";


    nextQuestion.style.display =
        "none";

}


/* =====================================================
   ROLE CHANGE
   ===================================================== */

roleSelect.addEventListener(
    "change",
    function() {

        mockRole =
            roleSelect.value;


        createInterviewSession();

        loadMockQuestion();

    }
);


/* =====================================================
   DEMO AI EVALUATION
   ===================================================== */

function getDemoEvaluation(
    question,
    answer
) {

    const answerLength =
        answer.length;


    let score = 55;


    if (
        answerLength >= 50
    ) {

        score += 10;

    }


    if (
        answerLength >= 100
    ) {

        score += 10;

    }


    if (
        answerLength >= 180
    ) {

        score += 5;

    }


    if (

        answer.toLowerCase().includes("html") ||

        answer.toLowerCase().includes("css") ||

        answer.toLowerCase().includes("javascript") ||

        answer.toLowerCase().includes("web") ||

        answer.toLowerCase().includes("programming")

    ) {

        score += 5;

    }


    score =
        Math.min(score, 90);


    return {

        score: score,

        relevance:
            Math.min(
                score + 3,
                100
            ),

        technicalAccuracy:
            Math.max(
                score - 2,
                0
            ),

        communication:
            Math.min(
                score + 2,
                100
            ),

        structure:
            Math.max(
                score - 1,
                0
            ),

        completeness:
            Math.min(
                score + 1,
                100
            ),

        strengths: [

            "Answer is relevant to the interview question.",

            "The response communicates the main idea clearly."

        ],

        weaknesses: [

            "The answer could include more specific examples.",

            "Some points could be explained in greater detail."

        ],

        suggestions: [

            "Use a clear beginning, middle and conclusion.",

            "Add practical examples where possible."

        ],

        feedback:
            "This is a demo evaluation because the Gemini API quota is currently unavailable. Your answer is relevant, but adding specific examples and more structured explanations would make it stronger."

    };

}


/* =====================================================
   DISPLAY AI EVALUATION
   ===================================================== */

function displayEvaluation(result) {

    mockTotalScore +=
        result.score;


    const currentQuestionIndex =
        sessionQuestionIndexes[
            mockCurrentQuestion
        ];


    const currentQuestion =
        sessionQuestions[
            mockCurrentQuestion
        ];


    /*
       Save this question as completed.
    */

    saveAttemptedQuestion(
        mockRole,
        currentQuestionIndex
    );


    questionScores.push({

        questionNumber:
            mockCurrentQuestion + 1,

        question:
            currentQuestion,

        score:
            result.score

    });


    evaluationScores.push({

        relevance:
            result.relevance,

        technicalAccuracy:
            result.technicalAccuracy,

        communication:
            result.communication,

        structure:
            result.structure,

        completeness:
            result.completeness

    });


    aiScore.textContent =
        result.score;


    relevanceScore.textContent =
        result.relevance;


    technicalScore.textContent =
        result.technicalAccuracy;


    communicationScore.textContent =
        result.communication;


    structureScore.textContent =
        result.structure;


    completenessScore.textContent =
        result.completeness;


    feedback.textContent =
        result.feedback;


    strengthsList.innerHTML =
        "";


    result.strengths.forEach(
        function(item) {

            const li =
                document.createElement("li");

            li.textContent =
                item;

            strengthsList.appendChild(
                li
            );

        }
    );


    weaknessesList.innerHTML =
        "";


    result.weaknesses.forEach(
        function(item) {

            const li =
                document.createElement("li");

            li.textContent =
                item;

            weaknessesList.appendChild(
                li
            );

        }
    );


    suggestionsList.innerHTML =
        "";


    result.suggestions.forEach(
        function(item) {

            const li =
                document.createElement("li");

            li.textContent =
                item;

            suggestionsList.appendChild(
                li
            );

        }
    );


    nextQuestion.style.display =
        "inline-block";

}


/* =====================================================
   SUBMIT ANSWER
   ===================================================== */

submitAnswer.addEventListener(
    "click",
    async function() {

        const answer =
            answerBox.value.trim();


        if (answer === "") {

            alert(
                "Please write your answer first."
            );

            return;

        }


        const question =
            sessionQuestions[
                mockCurrentQuestion
            ];


        feedbackBox.style.display =
            "block";


        feedback.textContent =
            "Evaluating your answer...";


        submitAnswer.style.display =
            "none";


        try {

            const response =
                await fetch(

                    "https://ai-interview-backend-2rht.onrender.com/api/evaluate",

                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body:
                            JSON.stringify({

                                role:
                                    mockRole,

                                question:
                                    question,

                                answer:
                                    answer

                            })

                    }

                );


            const result =
                await response.json();


            if (!response.ok) {

                if (

                    response.status === 429 ||

                    result.code ===
                        "QUOTA_EXCEEDED"

                ) {

                    console.log(
                        "Gemini quota exhausted. Using Demo Mode."
                    );


                    const demoResult =
                        getDemoEvaluation(
                            question,
                            answer
                        );


                    displayEvaluation(
                        demoResult
                    );


                    return;

                }


                throw new Error(

                    result.error ||
                    "Backend error"

                );

            }


            displayEvaluation(
                result
            );

        }


        catch (error) {

            console.error(
                "Evaluation Error:",
                error
            );


            const demoResult =
                getDemoEvaluation(
                    question,
                    answer
                );


            displayEvaluation(
                demoResult
            );

        }

    }
);


/* =====================================================
   NEXT QUESTION
   ===================================================== */

nextQuestion.addEventListener(
    "click",
    function() {

        mockCurrentQuestion++;


        if (

            mockCurrentQuestion <
            sessionQuestions.length

        ) {

            loadMockQuestion();

        }

        else {

            showMockResult();

        }

    }
);


/* =====================================================
   SHOW FINAL RESULT
   ===================================================== */

function showMockResult() {

    const questions =
        sessionQuestions;


    const average =
        Math.round(

            mockTotalScore /
            questionScores.length

        );


    /* ================================================
       SAVE DASHBOARD PROGRESS
       ================================================ */

    let interviewCount =
        Number(
            localStorage.getItem(
                "interviewCount"
            )
        ) || 0;


    let bestScore =
        Number(
            localStorage.getItem(
                "bestScore"
            )
        ) || 0;


    interviewCount++;


    if (
        average > bestScore
    ) {

        bestScore =
            average;

    }


    localStorage.setItem(
        "interviewCount",
        interviewCount
    );


    localStorage.setItem(
        "bestScore",
        bestScore
    );


    localStorage.setItem(
        "lastScore",
        average
    );


    localStorage.setItem(
        "latestScore",
        average
    );


    localStorage.setItem(
        "lastActivity",
        "Mock Interview - " +
        mockRole
    );


    /* ================================================
       CALCULATE CATEGORY AVERAGES
       ================================================ */

    let totalRelevance = 0;

    let totalTechnical = 0;

    let totalCommunication = 0;

    let totalStructure = 0;

    let totalCompleteness = 0;


    evaluationScores.forEach(
        function(item) {

            totalRelevance +=
                item.relevance;

            totalTechnical +=
                item.technicalAccuracy;

            totalCommunication +=
                item.communication;

            totalStructure +=
                item.structure;

            totalCompleteness +=
                item.completeness;

        }
    );


    const count =
        evaluationScores.length;


    const averageRelevance =
        Math.round(
            totalRelevance / count
        );


    const averageTechnical =
        Math.round(
            totalTechnical / count
        );


    const averageCommunication =
        Math.round(
            totalCommunication / count
        );


    const averageStructure =
        Math.round(
            totalStructure / count
        );


    const averageCompleteness =
        Math.round(
            totalCompleteness / count
        );


    /* ================================================
       UPDATE RESULT SCORES
       ================================================ */

    document.getElementById(
        "final-relevance"
    ).textContent =
        averageRelevance;


    document.getElementById(
        "relevance-bar"
    ).style.width =
        averageRelevance + "%";


    document.getElementById(
        "final-technical"
    ).textContent =
        averageTechnical;


    document.getElementById(
        "technical-bar"
    ).style.width =
        averageTechnical + "%";


    document.getElementById(
        "final-communication"
    ).textContent =
        averageCommunication;


    document.getElementById(
        "communication-bar"
    ).style.width =
        averageCommunication + "%";


    document.getElementById(
        "final-structure"
    ).textContent =
        averageStructure;


    document.getElementById(
        "structure-bar"
    ).style.width =
        averageStructure + "%";


    document.getElementById(
        "final-completeness"
    ).textContent =
        averageCompleteness;


    document.getElementById(
        "completeness-bar"
    ).style.width =
        averageCompleteness + "%";


    /* ================================================
       RESULT INFORMATION
       ================================================ */

    document.getElementById(
        "result-role"
    ).textContent =
        mockRole;


    document.getElementById(
        "average-score"
    ).textContent =
        average;


    document.getElementById(
        "total-questions"
    ).textContent =
        questions.length;


    document.getElementById(
        "answered-questions"
    ).textContent =
        questionScores.length;


    /* ================================================
       RESULT SUMMARY
       ================================================ */

    let summary;


    if (average >= 80) {

        summary =
            "Excellent performance! Your answers show strong interview readiness.";

    }

    else if (average >= 60) {

        summary =
            "Good performance! You have a solid foundation. Continue practicing to improve your answers.";

    }

    else if (average >= 40) {

        summary =
            "Fair performance. Focus on improving your knowledge, structure and communication.";

    }

    else {

        summary =
            "Keep practicing! Work on giving clear, detailed and structured answers.";

    }


    document.getElementById(
        "result-summary"
    ).textContent =
        summary;


    /* ================================================
       QUESTION PERFORMANCE
       ================================================ */

    questionPerformanceList.innerHTML =
        "";


    questionScores.forEach(
        function(item) {

            const card =
                document.createElement("div");


            card.className =
                "question-performance-card";


            const title =
                document.createElement("h4");


            title.textContent =
                `Question ${item.questionNumber}`;


            const text =
                document.createElement("p");


            text.textContent =
                item.question;


            const score =
                document.createElement("strong");


            score.textContent =
                `${item.score}/100`;


            card.appendChild(
                title
            );


            card.appendChild(
                text
            );


            card.appendChild(
                score
            );


            questionPerformanceList.appendChild(
                card
            );

        }
    );


    /* ================================================
       HIDE INTERVIEW AREA
       ================================================ */

    mockQuestion.style.display =
        "none";


    mockQuestionNumber.style.display =
        "none";


    answerBox.style.display =
        "none";


    submitAnswer.style.display =
        "none";


    nextQuestion.style.display =
        "none";


    feedbackBox.style.display =
        "none";


    /* ================================================
       SHOW RESULT
       ================================================ */

    document.getElementById(
        "mock-result"
    ).style.display =
        "block";


    document.getElementById(
        "mock-result"
    ).scrollIntoView({

        behavior:
            "smooth"

    });

}


/* =====================================================
   RESTART INTERVIEW
   ===================================================== */

restartInterview.addEventListener(
    "click",
    function() {

        /*
           IMPORTANT:
           We DO NOT clear attempted questions.

           This means Restart will create
           another random set without repeating
           already answered questions.
        */

        createInterviewSession();


        mockQuestion.style.display =
            "block";


        mockQuestionNumber.style.display =
            "block";


        answerBox.style.display =
            "block";


        feedbackBox.style.display =
            "none";


        submitAnswer.style.display =
            "inline-block";


        nextQuestion.style.display =
            "none";


        document.getElementById(
            "mock-result"
        ).style.display =
            "none";


        questionPerformanceList.innerHTML =
            "";


        loadMockQuestion();

    }
);


/* =====================================================
   START FIRST INTERVIEW
   ===================================================== */

createInterviewSession();

loadMockQuestion();