/* =================================
   PASSWORD SHOW / HIDE
================================= */

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        togglePassword.textContent = "🙈";

    } else {

        passwordInput.type = "password";
        togglePassword.textContent = "👁";

    }

});


/* =================================
   LOGIN FORM
================================= */

const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");


loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const email = document
        .getElementById("email")
        .value
        .trim()
        .toLowerCase();


    const password = document
        .getElementById("password")
        .value
        .trim();


    /* =================================
       EMPTY FIELDS
    ================================= */

    if (email === "" || password === "") {

        loginMessage.textContent =
            "Please fill in all fields.";

        loginMessage.style.color = "red";

        return;
    }


    /* =================================
       DEMO ACCOUNT
    ================================= */

    if (
        email === "student@gmail.com" &&
        password === "123456"
    ) {

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userName", "Student");

        /* Demo account progress */

        localStorage.setItem("currentUserId", "demo");

        loginMessage.textContent =
            "Login successful!";

        loginMessage.style.color = "green";


        setTimeout(function () {

            window.location.href =
                "dashboard.html";

        }, 800);

        return;
    }


    /* =================================
       GET REGISTERED USERS
    ================================= */

    const users =
        JSON.parse(
            localStorage.getItem("registeredUsers")
        ) || [];


    /* =================================
       FIND USER
    ================================= */

    const user =
        users.find(function (user) {

            return (
                user.email === email &&
                user.password === password
            );

        });


    /* =================================
       USER NOT FOUND
    ================================= */

    if (!user) {

        loginMessage.textContent =
            "Invalid email or password.";

        loginMessage.style.color = "red";

        return;
    }


    /* =================================
       LOGIN SUCCESS
    ================================= */

    localStorage.setItem(
        "loggedIn",
        "true"
    );

    localStorage.setItem(
        "userEmail",
        user.email
    );

    localStorage.setItem(
        "userName",
        user.name
    );

    localStorage.setItem(
        "currentUserId",
        user.id
    );


    loginMessage.textContent =
        "Login successful!";

    loginMessage.style.color = "green";


    setTimeout(function () {

        window.location.href =
            "dashboard.html";

    }, 800);

});