// ==============================
// QUESTION DATABASE
// ==============================

const questionData = {

    Frontend: [

        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyperlink Text Management Language",
                "Home Tool Markup Language"
            ],
            answer: "Hyper Text Markup Language"
        },

        {
            question: "Which language is used to style a web page?",
            options: [
                "HTML",
                "CSS",
                "Python",
                "SQL"
            ],
            answer: "CSS"
        },

        {
            question: "Which HTML tag is used to create a hyperlink?",
            options: [
                "<link>",
                "<a>",
                "<href>",
                "<url>"
            ],
            answer: "<a>"
        },

        {
            question: "Which CSS property changes text color?",
            options: [
                "font-style",
                "background",
                "color",
                "text-size"
            ],
            answer: "color"
        },

        {
            question: "Which HTML tag is used to display an image?",
            options: [
                "<picture>",
                "<image>",
                "<img>",
                "<src>"
            ],
            answer: "<img>"
        }

    ],


    JavaScript: [

        {
            question: "Which keyword declares a variable in JavaScript?",
            options: [
                "var",
                "int",
                "string",
                "define"
            ],
            answer: "var"
        },

        {
            question: "Which symbol is used for strict equality?",
            options: [
                "=",
                "==",
                "===",
                "!="
            ],
            answer: "==="
        },

        {
            question: "Which method adds an element to the end of an array?",
            options: [
                "push()",
                "add()",
                "append()",
                "insert()"
            ],
            answer: "push()"
        },

        {
            question: "Which keyword is used to define a function?",
            options: [
                "function",
                "func",
                "define",
                "method"
            ],
            answer: "function"
        },

        {
            question: "Which method converts JSON text into a JavaScript object?",
            options: [
                "JSON.parse()",
                "JSON.convert()",
                "JSON.object()",
                "JSON.read()"
            ],
            answer: "JSON.parse()"
        }

    ],


    Programming: [

        {
            question: "Which data structure follows FIFO?",
            options: [
                "Stack",
                "Queue",
                "Tree",
                "Graph"
            ],
            answer: "Queue"
        },

        {
            question: "Which data structure follows LIFO?",
            options: [
                "Queue",
                "Array",
                "Stack",
                "Tree"
            ],
            answer: "Stack"
        },

        {
            question: "What is a loop used for?",
            options: [
                "Repeating instructions",
                "Deleting a program",
                "Creating hardware",
                "Installing software"
            ],
            answer: "Repeating instructions"
        },

        {
            question: "Which is a programming language?",
            options: [
                "Python",
                "HTML",
                "CSS",
                "HTTP"
            ],
            answer: "Python"
        },

        {
            question: "What does OOP stand for?",
            options: [
                "Object Oriented Programming",
                "Open Operating Program",
                "Object Operating Process",
                "Online Object Programming"
            ],
            answer: "Object Oriented Programming"
        }

    ],


    Database: [

        {
            question: "What does SQL stand for?",
            options: [
                "Structured Query Language",
                "Simple Question Language",
                "System Query Logic",
                "Structured Question Logic"
            ],
            answer: "Structured Query Language"
        },

        {
            question: "Which command is used to retrieve data?",
            options: [
                "GET",
                "SELECT",
                "FETCH",
                "READ"
            ],
            answer: "SELECT"
        },

        {
            question: "Which command is used to add new data?",
            options: [
                "ADD",
                "INSERT",
                "CREATE",
                "PUT"
            ],
            answer: "INSERT"
        },

        {
            question: "Which key uniquely identifies a record?",
            options: [
                "Foreign Key",
                "Primary Key",
                "Secondary Key",
                "Normal Key"
            ],
            answer: "Primary Key"
        },

        {
            question: "Which command removes a table?",
            options: [
                "REMOVE",
                "DELETE",
                "DROP",
                "CLEAR"
            ],
            answer: "DROP"
        }

    ],


    HR: [

        {
            question: "What should you do when an interviewer asks 'Tell me about yourself'?",
            options: [
                "Give a short professional introduction",
                "Tell your entire life story",
                "Stay silent",
                "Talk only about hobbies"
            ],
            answer: "Give a short professional introduction"
        },

        {
            question: "What is an appropriate interview dress code?",
            options: [
                "Professional attire",
                "Sleepwear",
                "Sportswear",
                "Party clothes"
            ],
            answer: "Professional attire"
        },

        {
            question: "What should you do when you don't know an answer?",
            options: [
                "Be honest and explain what you know",
                "Make up an answer",
                "Leave the interview",
                "Argue with the interviewer"
            ],
            answer: "Be honest and explain what you know"
        },

        {
            question: "Why should you research a company before an interview?",
            options: [
                "To understand the company and role",
                "To avoid answering questions",
                "To memorize random facts",
                "It is unnecessary"
            ],
            answer: "To understand the company and role"
        },

        {
            question: "What is an important interview skill?",
            options: [
                "Clear communication",
                "Interrupting",
                "Avoiding eye contact",
                "Speaking as fast as possible"
            ],
            answer: "Clear communication"
        }

    ],


    Aptitude: [

        {
            question: "What is 10 + 20?",
            options: [
                "20",
                "30",
                "40",
                "50"
            ],
            answer: "30"
        },

        {
            question: "What is 15 × 2?",
            options: [
                "20",
                "25",
                "30",
                "35"
            ],
            answer: "30"
        },

        {
            question: "What is 100 ÷ 10?",
            options: [
                "5",
                "10",
                "15",
                "20"
            ],
            answer: "10"
        },

        {
            question: "If a car travels 60 km in 1 hour, how far does it travel in 3 hours?",
            options: [
                "120 km",
                "150 km",
                "180 km",
                "240 km"
            ],
            answer: "180 km"
        },

        {
            question: "What is 25% of 100?",
            options: [
                "10",
                "20",
                "25",
                "50"
            ],
            answer: "25"
        }

    ]

};


// ==============================
// VARIABLES
// ==============================

let currentQuestion = 0;
let score = 0;
let selectedAnswer = false;
let currentCategory = "Frontend";

let questions =
    questionData[currentCategory];


// ==============================
// GET HTML ELEMENTS
// ==============================

const questionNumber =
    document.getElementById("question-number");

const questionText =
    document.getElementById("question");

const optionsContainer =
    document.querySelector(".options");

const scoreText =
    document.getElementById("score");

const nextButton =
    document.getElementById("next-btn");

const resultBox =
    document.getElementById("result-box");

const finalScore =
    document.getElementById("final-score");

const resultMessage =
    document.getElementById("result-message");

const correctAnswers =
    document.getElementById("correct-answers");

const wrongAnswers =
    document.getElementById("wrong-answers");

const restartButton =
    document.getElementById("restart-btn");


// ==============================
// CATEGORY BUTTONS
// ==============================

const categoryButtons =
    document.querySelectorAll(".practice-category");


categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        currentCategory =
            button.textContent.trim();

        questions =
            questionData[currentCategory];

        currentQuestion = 0;

        score = 0;

        selectedAnswer = false;


        categoryButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        resultBox.style.display = "none";

        questionNumber.style.display = "inline";

        scoreText.style.display = "inline";

        questionText.style.display = "block";

        optionsContainer.style.display = "flex";

        nextButton.style.display = "inline-block";


        loadQuestion();

    });

});


// ==============================
// LOAD QUESTION
// ==============================

function loadQuestion() {

    selectedAnswer = false;


    const current =
        questions[currentQuestion];


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    questionText.textContent =
        current.question;


    scoreText.textContent =
        `Score: ${score}`;


    optionsContainer.innerHTML = "";


    current.options.forEach(function (option) {

        const button =
            document.createElement("button");


        button.classList.add("option");


        button.textContent =
            option;


        button.addEventListener("click", function () {

            checkAnswer(button, option);

        });


        optionsContainer.appendChild(button);

    });

}


// ==============================
// CHECK ANSWER
// ==============================

function checkAnswer(button, selectedOption) {

    if (selectedAnswer) {
        return;
    }


    selectedAnswer = true;


    const correctAnswer =
        questions[currentQuestion].answer;


    if (selectedOption === correctAnswer) {

        button.style.backgroundColor =
            "#dcfce7";

        button.style.borderColor =
            "#16a34a";

        score++;

    }
    else {

        button.style.backgroundColor =
            "#fee2e2";

        button.style.borderColor =
            "#dc2626";


        const allOptions =
            document.querySelectorAll(".option");


        allOptions.forEach(function (option) {

            if (option.textContent === correctAnswer) {

                option.style.backgroundColor =
                    "#dcfce7";

                option.style.borderColor =
                    "#16a34a";

            }

        });

    }


    scoreText.textContent =
        `Score: ${score}`;

}


// ==============================
// NEXT QUESTION
// ==============================

nextButton.addEventListener("click", function () {

    if (!selectedAnswer) {

        alert("Please select an answer first.");

        return;

    }


    currentQuestion++;


    if (currentQuestion < questions.length) {

        loadQuestion();

    }
    else {

        showResult();

    }

});


// ==============================
// SHOW RESULT
// ==============================

function showResult() {

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    // ==============================
    // SAVE PRACTICE COMPLETION
    // ==============================

    let practiceCount =
        Number(localStorage.getItem("practiceCount")) || 0;

    practiceCount++;

    localStorage.setItem(
        "practiceCount",
        practiceCount
    );


    // ==============================
    // SAVE LATEST PRACTICE PERFORMANCE
    // ==============================

    localStorage.setItem(
        "latestScore",
        percentage
    );

    localStorage.setItem(
        "lastActivity",
        "Practice - " + currentCategory
    );


    const wrong =
        questions.length - score;


    finalScore.textContent =
        `${percentage}%`;


    correctAnswers.textContent =
        score;


    wrongAnswers.textContent =
        wrong;


    if (percentage === 100) {

        resultMessage.textContent =
            "Excellent! You answered everything correctly.";

    }
    else if (percentage >= 70) {

        resultMessage.textContent =
            "Great job! Keep practicing to improve further.";

    }
    else if (percentage >= 50) {

        resultMessage.textContent =
            "Good effort. A little more practice will help.";

    }
    else {

        resultMessage.textContent =
            "Keep practicing. You can improve with more preparation.";

    }


    questionNumber.style.display =
        "none";

    scoreText.style.display =
        "none";

    questionText.style.display =
        "none";

    optionsContainer.style.display =
        "none";

    nextButton.style.display =
        "none";


    resultBox.style.display =
        "block";

}


// ==============================
// RESTART QUIZ
// ==============================

restartButton.addEventListener("click", function () {

    currentQuestion = 0;

    score = 0;

    selectedAnswer = false;


    questionNumber.style.display =
        "inline";

    scoreText.style.display =
        "inline";

    questionText.style.display =
        "block";

    optionsContainer.style.display =
        "flex";

    nextButton.style.display =
        "inline-block";

    resultBox.style.display =
        "none";


    loadQuestion();

});


// ==============================
// START QUIZ
// ==============================

loadQuestion();