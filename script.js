
// ======================================================
// AI INTERVIEW PREPARATION PORTAL
// PRACTICE QUESTIONS JAVASCRIPT
// ======================================================


// ======================================================
// QUESTION DATABASE
// ======================================================

const questionData = {

    Frontend: [

        {
            question: "What is HTML?",
            options: [
                "A programming language",
                "A markup language used to structure web pages",
                "A database",
                "An operating system"
            ],
            answer: 1
        },

        {
            question: "What does CSS stand for?",
            options: [
                "Computer Style Sheets",
                "Creative Style System",
                "Cascading Style Sheets",
                "Colorful Style Sheets"
            ],
            answer: 2
        },

        {
            question: "Which HTML tag is used to create a hyperlink?",
            options: [
                "<link>",
                "<a>",
                "<href>",
                "<url>"
            ],
            answer: 1
        },

        {
            question: "Which CSS property is used to change text color?",
            options: [
                "font-color",
                "text-color",
                "color",
                "foreground"
            ],
            answer: 2
        },

        {
            question: "Which CSS property is used to change the background color?",
            options: [
                "bgcolor",
                "background-color",
                "background-style",
                "color-background"
            ],
            answer: 1
        },

        {
            question: "Which HTML tag is used to create the largest heading?",
            options: [
                "<h6>",
                "<heading>",
                "<h1>",
                "<head>"
            ],
            answer: 2
        },

        {
            question: "Which CSS layout system is useful for arranging items in rows and columns?",
            options: [
                "Float",
                "Grid",
                "Position",
                "Inline"
            ],
            answer: 1
        },

        {
            question: "Which CSS property is used to make an element flexible?",
            options: [
                "display: flex",
                "position: flex",
                "flexbox: true",
                "layout: flex"
            ],
            answer: 0
        },

        {
            question: "Which HTML element is used to insert an image?",
            options: [
                "<picture>",
                "<image>",
                "<img>",
                "<src>"
            ],
            answer: 2
        },

        {
            question: "Which attribute specifies the image path in an img tag?",
            options: [
                "href",
                "src",
                "link",
                "path"
            ],
            answer: 1
        },

        {
            question: "Which CSS property controls the space inside an element?",
            options: [
                "margin",
                "padding",
                "spacing",
                "border"
            ],
            answer: 1
        },

        {
            question: "Which CSS property controls the space outside an element?",
            options: [
                "padding",
                "margin",
                "spacing",
                "gap"
            ],
            answer: 1
        },

        {
            question: "Which HTML tag is used to create a paragraph?",
            options: [
                "<paragraph>",
                "<text>",
                "<p>",
                "<para>"
            ],
            answer: 2
        },

        {
            question: "Which CSS property is used to make text bold?",
            options: [
                "font-weight",
                "font-bold",
                "text-weight",
                "bold"
            ],
            answer: 0
        },

        {
            question: "Which HTML tag is used to create an unordered list?",
            options: [
                "<ol>",
                "<ul>",
                "<list>",
                "<li>"
            ],
            answer: 1
        },

        {
            question: "Which HTML tag represents a list item?",
            options: [
                "<item>",
                "<list>",
                "<li>",
                "<ul>"
            ],
            answer: 2
        },

        {
            question: "Which CSS property is used to align text?",
            options: [
                "text-align",
                "align-text",
                "font-align",
                "text-position"
            ],
            answer: 0
        },

        {
            question: "What is the purpose of the viewport meta tag?",
            options: [
                "To change colors",
                "To make websites responsive on different devices",
                "To add JavaScript",
                "To connect a database"
            ],
            answer: 1
        },

        {
            question: "Which CSS property is used to control the size of text?",
            options: [
                "text-size",
                "font-size",
                "size",
                "font-height"
            ],
            answer: 1
        },

        {
            question: "Which HTML tag is commonly used to create a navigation section?",
            options: [
                "<navigation>",
                "<nav>",
                "<menu-bar>",
                "<navigate>"
            ],
            answer: 1
        }
    ],


    // ==================================================
    // JAVASCRIPT
    // ==================================================

    JavaScript: [

        {
            question: "What is JavaScript?",
            options: [
                "A database",
                "A programming language used to add interactivity to web pages",
                "A CSS framework",
                "An operating system"
            ],
            answer: 1
        },

        {
            question: "Which keyword is used to declare a variable?",
            options: [
                "var",
                "variable",
                "declare",
                "letvar"
            ],
            answer: 0
        },

        {
            question: "Which keyword can be used to declare a constant?",
            options: [
                "constant",
                "const",
                "fixed",
                "static"
            ],
            answer: 1
        },

        {
            question: "Which symbol is used for strict equality?",
            options: [
                "==",
                "=",
                "===",
                "!="
            ],
            answer: 2
        },

        {
            question: "Which method is used to display a message in the browser console?",
            options: [
                "console.log()",
                "print()",
                "display()",
                "message()"
            ],
            answer: 0
        },

        {
            question: "Which method converts JSON text into a JavaScript object?",
            options: [
                "JSON.parse()",
                "JSON.convert()",
                "JSON.object()",
                "JSON.read()"
            ],
            answer: 0
        },

        {
            question: "Which method converts a JavaScript object into JSON text?",
            options: [
                "JSON.convert()",
                "JSON.stringify()",
                "JSON.parse()",
                "JSON.text()"
            ],
            answer: 1
        },

        {
            question: "Which keyword is used to define a function?",
            options: [
                "function",
                "method",
                "define",
                "func"
            ],
            answer: 0
        },

        {
            question: "Which event occurs when a button is clicked?",
            options: [
                "onhover",
                "onclick",
                "onpress",
                "clickbutton"
            ],
            answer: 1
        },

        {
            question: "Which method selects an HTML element by its ID?",
            options: [
                "getElementById()",
                "selectById()",
                "getId()",
                "findId()"
            ],
            answer: 0
        },

        {
            question: "Which symbol is used for a single-line comment?",
            options: [
                "<!-- -->",
                "//",
                "/* */",
                "#"
            ],
            answer: 1
        },

        {
            question: "Which data type stores true or false?",
            options: [
                "String",
                "Number",
                "Boolean",
                "Object"
            ],
            answer: 2
        },

        {
            question: "Which method adds an item to the end of an array?",
            options: [
                "push()",
                "add()",
                "append()",
                "insert()"
            ],
            answer: 0
        },

        {
            question: "Which method removes the last item from an array?",
            options: [
                "remove()",
                "delete()",
                "pop()",
                "last()"
            ],
            answer: 2
        },

        {
            question: "What does DOM stand for?",
            options: [
                "Document Object Model",
                "Data Object Management",
                "Document Oriented Model",
                "Digital Object Method"
            ],
            answer: 0
        },

        {
            question: "Which operator is used for logical AND?",
            options: [
                "||",
                "&&",
                "!",
                "&"
            ],
            answer: 1
        },

        {
            question: "Which operator is used for logical OR?",
            options: [
                "&&",
                "||",
                "!",
                "|"
            ],
            answer: 1
        },

        {
            question: "Which loop is commonly used to iterate through an array?",
            options: [
                "for",
                "repeat",
                "loop",
                "iterate"
            ],
            answer: 0
        },

        {
            question: "What is NaN?",
            options: [
                "Not a Number",
                "New Array Number",
                "Null and Number",
                "No Assigned Name"
            ],
            answer: 0
        },

        {
            question: "Which function converts a string to an integer?",
            options: [
                "parseInt()",
                "toInteger()",
                "convertInt()",
                "integer()"
            ],
            answer: 0
        }
    ],


    // ==================================================
    // PROGRAMMING
    // ==================================================

    Programming: [

        {
            question: "What is an algorithm?",
            options: [
                "A programming language",
                "A step-by-step procedure for solving a problem",
                "A database",
                "A compiler"
            ],
            answer: 1
        },

        {
            question: "What is a variable?",
            options: [
                "A container used to store data",
                "A loop",
                "A function",
                "A compiler"
            ],
            answer: 0
        },

        {
            question: "What is a loop?",
            options: [
                "A way to repeat a block of code",
                "A variable",
                "A database",
                "A class"
            ],
            answer: 0
        },

        {
            question: "Which data structure follows LIFO?",
            options: [
                "Queue",
                "Stack",
                "Array",
                "Tree"
            ],
            answer: 1
        },

        {
            question: "Which data structure follows FIFO?",
            options: [
                "Stack",
                "Queue",
                "Tree",
                "Graph"
            ],
            answer: 1
        },

        {
            question: "What is recursion?",
            options: [
                "A function calling itself",
                "A variable changing",
                "A loop ending",
                "A class declaration"
            ],
            answer: 0
        },

        {
            question: "What is debugging?",
            options: [
                "Creating a database",
                "Finding and fixing errors in code",
                "Writing documentation",
                "Installing software"
            ],
            answer: 1
        },

        {
            question: "What is a compiler?",
            options: [
                "A program that translates source code",
                "A database",
                "An operating system",
                "A web browser"
            ],
            answer: 0
        },

        {
            question: "What is object-oriented programming?",
            options: [
                "Programming using objects and classes",
                "Programming only with functions",
                "Database programming",
                "HTML programming"
            ],
            answer: 0
        },

        {
            question: "Which concept hides internal implementation details?",
            options: [
                "Inheritance",
                "Encapsulation",
                "Polymorphism",
                "Compilation"
            ],
            answer: 1
        },

        {
            question: "Which OOP concept allows a class to inherit properties from another class?",
            options: [
                "Encapsulation",
                "Inheritance",
                "Abstraction",
                "Compilation"
            ],
            answer: 1
        },

        {
            question: "Which OOP concept allows the same interface to have different implementations?",
            options: [
                "Inheritance",
                "Polymorphism",
                "Encapsulation",
                "Iteration"
            ],
            answer: 1
        },

        {
            question: "What is a function?",
            options: [
                "A reusable block of code",
                "A database",
                "A variable",
                "A compiler"
            ],
            answer: 0
        },

        {
            question: "What is syntax?",
            options: [
                "Rules for writing code",
                "A database",
                "A variable",
                "An operating system"
            ],
            answer: 0
        },

        {
            question: "What is an array?",
            options: [
                "A collection of values",
                "A function",
                "A class",
                "A compiler"
            ],
            answer: 0
        },

        {
            question: "What is a string?",
            options: [
                "A collection of characters",
                "A number",
                "A Boolean",
                "A loop"
            ],
            answer: 0
        },

        {
            question: "What is an integer?",
            options: [
                "A whole number",
                "A character",
                "A string",
                "A Boolean"
            ],
            answer: 0
        },

        {
            question: "What is source code?",
            options: [
                "Code written by a programmer",
                "Machine hardware",
                "A database",
                "A compiled application only"
            ],
            answer: 0
        },

        {
            question: "What is an IDE?",
            options: [
                "Integrated Development Environment",
                "Internet Data Engine",
                "Internal Design Editor",
                "Integrated Database Environment"
            ],
            answer: 0
        },

        {
            question: "What is software testing?",
            options: [
                "Checking software for errors and expected behavior",
                "Creating hardware",
                "Deleting code",
                "Designing a database only"
            ],
            answer: 0
        }
    ],


    // ==================================================
    // DATABASE
    // ==================================================

    Database: [

        {
            question: "What is a database?",
            options: [
                "A collection of organized data",
                "A programming language",
                "A web browser",
                "An operating system"
            ],
            answer: 0
        },

        {
            question: "What does SQL stand for?",
            options: [
                "Structured Query Language",
                "Simple Query Language",
                "System Query Language",
                "Structured Question Language"
            ],
            answer: 0
        },

        {
            question: "Which command is used to retrieve data from a database?",
            options: [
                "GET",
                "SELECT",
                "FETCH",
                "READ"
            ],
            answer: 1
        },

        {
            question: "Which command is used to add new data?",
            options: [
                "ADD",
                "INSERT",
                "CREATE",
                "PUT"
            ],
            answer: 1
        },

        {
            question: "Which command is used to modify existing data?",
            options: [
                "UPDATE",
                "CHANGE",
                "MODIFY",
                "ALTER"
            ],
            answer: 0
        },

        {
            question: "Which command is used to delete data?",
            options: [
                "REMOVE",
                "DELETE",
                "DROP",
                "CLEAR"
            ],
            answer: 1
        },

        {
            question: "What is a primary key?",
            options: [
                "A unique identifier for a record",
                "A password",
                "A database name",
                "A table name"
            ],
            answer: 0
        },

        {
            question: "What is a foreign key?",
            options: [
                "A key that links tables",
                "A password",
                "A primary database",
                "A username"
            ],
            answer: 0
        },

        {
            question: "What is a table?",
            options: [
                "A structure that stores data in rows and columns",
                "A programming language",
                "A server",
                "A password"
            ],
            answer: 0
        },

        {
            question: "What is a row in a database?",
            options: [
                "A record",
                "A database",
                "A column name",
                "A query"
            ],
            answer: 0
        },

        {
            question: "What is a column?",
            options: [
                "A field representing a particular attribute",
                "A complete database",
                "A table",
                "A query"
            ],
            answer: 0
        },

        {
            question: "What is normalization?",
            options: [
                "Organizing data to reduce redundancy",
                "Deleting a database",
                "Encrypting a password",
                "Creating a server"
            ],
            answer: 0
        },

        {
            question: "What does DBMS stand for?",
            options: [
                "Database Management System",
                "Data Backup Management Software",
                "Database Machine System",
                "Data Management Service"
            ],
            answer: 0
        },

        {
            question: "Which SQL clause filters records?",
            options: [
                "WHERE",
                "FILTER",
                "SEARCH",
                "SELECT"
            ],
            answer: 0
        },

        {
            question: "Which SQL clause sorts results?",
            options: [
                "SORT BY",
                "ORDER BY",
                "GROUP BY",
                "ARRANGE BY"
            ],
            answer: 1
        },

        {
            question: "Which SQL clause groups rows?",
            options: [
                "GROUP BY",
                "ORDER BY",
                "COLLECT BY",
                "JOIN BY"
            ],
            answer: 0
        },

        {
            question: "What is a query?",
            options: [
                "A request for data or an operation on a database",
                "A database password",
                "A table",
                "A column"
            ],
            answer: 0
        },

        {
            question: "What is a database transaction?",
            options: [
                "A logical unit of database operations",
                "A database table",
                "A password",
                "A column"
            ],
            answer: 0
        },

        {
            question: "Which SQL command creates a table?",
            options: [
                "MAKE TABLE",
                "CREATE TABLE",
                "NEW TABLE",
                "ADD TABLE"
            ],
            answer: 1
        },

        {
            question: "Which SQL command removes a table?",
            options: [
                "REMOVE TABLE",
                "DELETE TABLE",
                "DROP TABLE",
                "CLEAR TABLE"
            ],
            answer: 2
        }
    ],


    // ==================================================
    // HR
    // ==================================================

    HR: [

        {
            question: "Tell me about yourself.",
            options: [
                "Give a short professional introduction",
                "Talk only about hobbies",
                "Give your complete family history",
                "Say nothing"
            ],
            answer: 0
        },

        {
            question: "What are your strengths?",
            options: [
                "Mention relevant positive qualities with examples",
                "Say you have no strengths",
                "Only mention marks",
                "Avoid answering"
            ],
            answer: 0
        },

        {
            question: "What is one weakness you are working on?",
            options: [
                "Give an honest professional weakness and improvement plan",
                "Say you have no weaknesses",
                "Blame someone else",
                "Refuse to answer"
            ],
            answer: 0
        },

        {
            question: "Why should we hire you?",
            options: [
                "Explain your relevant skills and willingness to contribute",
                "Say you are better than everyone",
                "Discuss salary only",
                "Say you need money"
            ],
            answer: 0
        },

        {
            question: "Where do you see yourself in five years?",
            options: [
                "Describe realistic professional growth",
                "Say you have no goals",
                "Talk only about holidays",
                "Avoid answering"
            ],
            answer: 0
        },

        {
            question: "Why do you want this job?",
            options: [
                "Connect the role with your skills and career goals",
                "Say because everyone else applied",
                "Say because of free food",
                "Avoid answering"
            ],
            answer: 0
        },

        {
            question: "How do you handle pressure?",
            options: [
                "Explain how you prioritize and manage tasks",
                "Say you cannot handle pressure",
                "Blame teammates",
                "Ignore deadlines"
            ],
            answer: 0
        },

        {
            question: "How do you handle failure?",
            options: [
                "Learn from mistakes and improve",
                "Give up",
                "Blame others",
                "Ignore the problem"
            ],
            answer: 0
        },

        {
            question: "How do you work in a team?",
            options: [
                "Communicate, cooperate and contribute",
                "Avoid communication",
                "Always work alone",
                "Ignore team members"
            ],
            answer: 0
        },

        {
            question: "How do you resolve conflicts?",
            options: [
                "Discuss the issue calmly and find a solution",
                "Argue",
                "Ignore everyone",
                "Quit immediately"
            ],
            answer: 0
        },

        {
            question: "What motivates you?",
            options: [
                "Mention meaningful professional motivators",
                "Say nothing motivates you",
                "Only money",
                "Avoid answering"
            ],
            answer: 0
        },

        {
            question: "Are you willing to learn new technologies?",
            options: [
                "Yes, and explain your approach to learning",
                "No",
                "Only if forced",
                "Never"
            ],
            answer: 0
        },

        {
            question: "How do you prioritize tasks?",
            options: [
                "Based on urgency, importance and deadlines",
                "Randomly",
                "Only the easiest tasks",
                "Ignore deadlines"
            ],
            answer: 0
        },

        {
            question: "What are your career goals?",
            options: [
                "Explain realistic goals and development plans",
                "Say you have none",
                "Avoid answering",
                "Only discuss vacations"
            ],
            answer: 0
        },

        {
            question: "How do you handle criticism?",
            options: [
                "Listen, evaluate and use constructive feedback",
                "Get angry",
                "Ignore it",
                "Blame others"
            ],
            answer: 0
        },

        {
            question: "What makes you a good team member?",
            options: [
                "Communication, reliability and cooperation",
                "Working against the team",
                "Avoiding responsibility",
                "Ignoring others"
            ],
            answer: 0
        },

        {
            question: "How do you manage deadlines?",
            options: [
                "Plan tasks and track progress",
                "Wait until the last moment",
                "Ignore them",
                "Ask others to do everything"
            ],
            answer: 0
        },

        {
            question: "How do you learn new skills?",
            options: [
                "Practice, study resources and projects",
                "Avoid learning",
                "Only watch videos",
                "Wait for someone else"
            ],
            answer: 0
        },

        {
            question: "What is your biggest achievement?",
            options: [
                "Describe a meaningful achievement and what you learned",
                "Say nothing",
                "Only discuss entertainment",
                "Avoid answering"
            ],
            answer: 0
        },

        {
            question: "Do you have any questions for us?",
            options: [
                "Ask relevant questions about the role or organization",
                "Say no without thinking",
                "Ask only about holidays",
                "Ask for personal favors"
            ],
            answer: 0
        }
    ],


    // ==================================================
    // APTITUDE
    // ==================================================

    Aptitude: [

        {
            question: "What is 20% of 100?",
            options: [
                "10",
                "20",
                "30",
                "40"
            ],
            answer: 1
        },

        {
            question: "What is the average of 10 and 20?",
            options: [
                "10",
                "15",
                "20",
                "30"
            ],
            answer: 1
        },

        {
            question: "If a number is doubled from 10, what is the result?",
            options: [
                "15",
                "20",
                "25",
                "30"
            ],
            answer: 1
        },

        {
            question: "What is 15 + 25?",
            options: [
                "30",
                "35",
                "40",
                "45"
            ],
            answer: 2
        },

        {
            question: "What is 100 - 45?",
            options: [
                "45",
                "50",
                "55",
                "65"
            ],
            answer: 2
        },

        {
            question: "What is 8 × 7?",
            options: [
                "54",
                "56",
                "64",
                "48"
            ],
            answer: 1
        },

        {
            question: "What is 81 ÷ 9?",
            options: [
                "7",
                "8",
                "9",
                "10"
            ],
            answer: 2
        },

        {
            question: "If a car travels 60 km in 1 hour, how far will it travel in 3 hours?",
            options: [
                "120 km",
                "150 km",
                "180 km",
                "200 km"
            ],
            answer: 2
        },

        {
            question: "What is the square of 12?",
            options: [
                "124",
                "144",
                "154",
                "164"
            ],
            answer: 1
        },

        {
            question: "What is the square root of 64?",
            options: [
                "6",
                "7",
                "8",
                "9"
            ],
            answer: 2
        },

        {
            question: "What is 25% of 200?",
            options: [
                "25",
                "40",
                "50",
                "75"
            ],
            answer: 2
        },

        {
            question: "If 5 pens cost ₹50, what is the cost of one pen?",
            options: [
                "₹5",
                "₹10",
                "₹15",
                "₹20"
            ],
            answer: 1
        },

        {
            question: "What is the next number: 2, 4, 6, 8, ?",
            options: [
                "9",
                "10",
                "11",
                "12"
            ],
            answer: 1
        },

        {
            question: "What is the next number: 5, 10, 15, 20, ?",
            options: [
                "22",
                "24",
                "25",
                "30"
            ],
            answer: 2
        },

        {
            question: "If a = 5 and b = 3, what is a + b?",
            options: [
                "6",
                "7",
                "8",
                "9"
            ],
            answer: 2
        },

        {
            question: "What is the ratio of 2 to 4 in simplest form?",
            options: [
                "1:2",
                "2:1",
                "1:4",
                "2:4"
            ],
            answer: 0
        },

        {
            question: "How many degrees are in a right angle?",
            options: [
                "45",
                "90",
                "180",
                "360"
            ],
            answer: 1
        },

        {
            question: "How many sides does a triangle have?",
            options: [
                "2",
                "3",
                "4",
                "5"
            ],
            answer: 1
        },

        {
            question: "What is 10% of 500?",
            options: [
                "25",
                "40",
                "50",
                "60"
            ],
            answer: 2
        },

        {
            question: "If 3 workers complete a task in 6 days, the task requires how many worker-days?",
            options: [
                "9",
                "12",
                "18",
                "24"
            ],
            answer: 2
        }
    ]

};


// ======================================================
// SETTINGS
// ======================================================

const QUESTIONS_PER_SESSION = 5;

const ATTEMPTED_KEY_PREFIX =
    "attemptedPracticeQuestions_";


// ======================================================
// VARIABLES
// ======================================================

let currentQuestion = 0;

let score = 0;

let selectedAnswer = false;

let currentCategory = "Frontend";

let questions = [];


// ======================================================
// GET HTML ELEMENTS
// ======================================================

const questionNumber =
    document.getElementById("question-number");

const scoreText =
    document.getElementById("score");

const questionText =
    document.getElementById("question");

const optionsContainer =
    document.getElementById("options");

const nextButton =
    document.getElementById("next-btn");

const resultBox =
    document.getElementById("result");

const finalScore =
    document.getElementById("final-score");

const correctAnswers =
    document.getElementById("correct-answers");

const wrongAnswers =
    document.getElementById("wrong-answers");

const resultMessage =
    document.getElementById("result-message");


// ======================================================
// CATEGORY BUTTONS
// ======================================================

const categoryButtons =
    document.querySelectorAll(".category-btn");


categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        categoryButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        currentCategory =
            button.dataset.category;


        startNewPracticeSession();

    });

});


// ======================================================
// GET ATTEMPTED QUESTIONS
// ======================================================

function getAttemptedQuestions(category) {

    const key =
        ATTEMPTED_KEY_PREFIX + category;


    return JSON.parse(
        localStorage.getItem(key)
    ) || [];

}


// ======================================================
// SAVE ATTEMPTED QUESTIONS
// ======================================================

function saveAttemptedQuestions(
    category,
    indexes
) {

    const key =
        ATTEMPTED_KEY_PREFIX + category;


    localStorage.setItem(
        key,
        JSON.stringify(indexes)
    );

}


// ======================================================
// GET RANDOM QUESTIONS
// ======================================================

function getRandomQuestions(category) {

    const allQuestions =
        questionData[category];


    let attempted =
        getAttemptedQuestions(category);


    // Create indexes of available questions
    let availableIndexes =
        allQuestions
            .map(function (_, index) {

                return index;

            })
            .filter(function (index) {

                return !attempted.includes(index);

            });


    // If all questions have been attempted,
    // start a new cycle
    if (
        availableIndexes.length <
        QUESTIONS_PER_SESSION
    ) {

        attempted = [];

        saveAttemptedQuestions(
            category,
            []
        );


        availableIndexes =
            allQuestions.map(
                function (_, index) {

                    return index;

                }
            );

    }


    // Shuffle available indexes
    availableIndexes.sort(
        function () {

            return Math.random() - 0.5;

        }
    );


    // Select questions for this session
    const selectedIndexes =
        availableIndexes.slice(
            0,
            QUESTIONS_PER_SESSION
        );


    // Save selected questions as attempted
    const updatedAttempted =
        attempted.concat(
            selectedIndexes
        );


    saveAttemptedQuestions(
        category,
        updatedAttempted
    );


    return selectedIndexes.map(
        function (index) {

            return allQuestions[index];

        }
    );

}


// ======================================================
// START NEW PRACTICE SESSION
// ======================================================

function startNewPracticeSession() {

    currentQuestion = 0;

    score = 0;

    selectedAnswer = false;


    questions =
        getRandomQuestions(
            currentCategory
        );


    if (resultBox) {

        resultBox.style.display =
            "none";

    }


    if (questionNumber) {

        questionNumber.style.display =
            "block";

    }


    if (scoreText) {

        scoreText.style.display =
            "block";

    }


    if (questionText) {

        questionText.style.display =
            "block";

    }


    if (optionsContainer) {

        optionsContainer.style.display =
            "block";

    }


    if (nextButton) {

        nextButton.style.display =
            "block";

    }


    loadQuestion();

}


// ======================================================
// LOAD QUESTION
// ======================================================

function loadQuestion() {

    selectedAnswer = false;


    const current =
        questions[currentQuestion];


    if (!current) {

        return;

    }


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    scoreText.textContent =
        `Score: ${score}`;


    questionText.textContent =
        current.question;


    optionsContainer.innerHTML =
        "";


    current.options.forEach(
        function (option, index) {

            const button =
                document.createElement("button");


            button.className =
                "option-btn";


            button.textContent =
                option;


            button.addEventListener(
                "click",
                function () {

                    checkAnswer(
                        index,
                        button
                    );

                }
            );


            optionsContainer.appendChild(
                button
            );

        }
    );


    nextButton.disabled = true;


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextButton.textContent =
            "Finish";

    }

    else {

        nextButton.textContent =
            "Next";

    }

}


// ======================================================
// CHECK ANSWER
// ======================================================

function checkAnswer(
    selectedIndex,
    selectedButton
) {

    if (selectedAnswer) {

        return;

    }


    selectedAnswer = true;


    const current =
        questions[currentQuestion];


    const optionButtons =
        optionsContainer.querySelectorAll(
            ".option-btn"
        );


    optionButtons.forEach(
        function (button, index) {

            button.disabled = true;


            if (
                index === current.answer
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    if (
        selectedIndex ===
        current.answer
    ) {

        score++;


        selectedButton.classList.add(
            "correct"
        );

    }

    else {

        selectedButton.classList.add(
            "incorrect"
        );

    }


    scoreText.textContent =
        `Score: ${score}`;


    nextButton.disabled = false;

}


// ======================================================
// NEXT BUTTON
// ======================================================

if (nextButton) {

    nextButton.addEventListener(
        "click",
        function () {

            if (!selectedAnswer) {

                return;

            }


            currentQuestion++;


            if (
                currentQuestion >=
                questions.length
            ) {

                showResult();

            }

            else {

                loadQuestion();

            }

        }
    );

}


// ======================================================
// SHOW RESULT
// ======================================================

function showResult() {

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    // ==================================================
    // GET CURRENT LOGGED-IN USER
    // ==================================================

    const currentUserId =
        localStorage.getItem(
            "currentUserId"
        );


    // ==================================================
    // GET REGISTERED USERS
    // ==================================================

    let users =
        JSON.parse(
            localStorage.getItem(
                "registeredUsers"
            )
        ) || [];


    // ==================================================
    // FIND CURRENT USER
    // ==================================================

    const currentUser =
        users.find(
            function (user) {

                return String(user.id) ===
                    String(currentUserId);

            }
        );


    // ==================================================
    // SAVE PRACTICE DATA TO CURRENT USER
    // ==================================================

    if (currentUser) {

        // Increase practice completion count
        currentUser.practiceCount =
            (Number(
                currentUser.practiceCount
            ) || 0) + 1;


        // Save latest score
        currentUser.latestScore =
            percentage;


        // Update best score
        currentUser.bestScore =
            Math.max(
                Number(
                    currentUser.bestScore
                ) || 0,
                percentage
            );


        // Save last activity
        currentUser.lastActivity =
            "Practice - " +
            currentCategory;


        // Save updated users
        localStorage.setItem(
            "registeredUsers",
            JSON.stringify(users)
        );

    }

    else {

        console.warn(
            "Current user not found. Practice statistics were not saved."
        );

        console.log(
            "currentUserId:",
            currentUserId
        );

        console.log(
            "registeredUsers:",
            users
        );

    }


    // ==================================================
    // RESULT DETAILS
    // ==================================================

    const wrong =
        questions.length - score;


    finalScore.textContent =
        `${percentage}%`;


    correctAnswers.textContent =
        score;


    wrongAnswers.textContent =
        wrong;


    // ==================================================
    // RESULT MESSAGE
    // ==================================================

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


    // ==================================================
    // HIDE QUESTION AREA
    // ==================================================

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


    // ==================================================
    // SHOW RESULT
    // ==================================================

    resultBox.style.display =
        "block";

}


// ======================================================
// RESTART PRACTICE
// ======================================================

const restartButton =
    document.getElementById(
        "restart-btn"
    );


if (restartButton) {

    restartButton.addEventListener(
        "click",
        function () {

            startNewPracticeSession();

        }
    );

}


// ======================================================
// INITIAL START
// ======================================================

if (
    document.getElementById("practice-container") ||
    questionText
) {

    startNewPracticeSession();

}
