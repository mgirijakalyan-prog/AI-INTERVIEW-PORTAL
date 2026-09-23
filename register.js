/* =================================
   REGISTER PAGE
================================= */

const registerForm = document.getElementById("register-form");
const registerMessage = document.getElementById("register-message");


/* =================================
   PASSWORD SHOW / HIDE
================================= */

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

const togglePassword = document.getElementById("toggle-password");
const toggleConfirmPassword = document.getElementById("toggle-confirm-password");


togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        togglePassword.textContent = "🙈";

    } else {

        passwordInput.type = "password";
        togglePassword.textContent = "👁";

    }

});


toggleConfirmPassword.addEventListener("click", function () {

    if (confirmPasswordInput.type === "password") {

        confirmPasswordInput.type = "text";
        toggleConfirmPassword.textContent = "🙈";

    } else {

        confirmPasswordInput.type = "password";
        toggleConfirmPassword.textContent = "👁";

    }

});


/* =================================
   REGISTER FORM
================================= */

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim().toLowerCase();

    const password =
        passwordInput.value.trim();

    const confirmPassword =
        confirmPasswordInput.value.trim();


    /* =================================
       VALIDATION
    ================================= */

    if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        registerMessage.textContent =
            "Please fill in all fields.";

        registerMessage.style.color = "red";

        return;
    }


    /* Password length */

    if (password.length < 6) {

        registerMessage.textContent =
            "Password must be at least 6 characters.";

        registerMessage.style.color = "red";

        return;
    }


    /* Password match */

    if (password !== confirmPassword) {

        registerMessage.textContent =
            "Passwords do not match.";

        registerMessage.style.color = "red";

        return;
    }


    /* =================================
       GET ALL USERS
    ================================= */

    const users =
        JSON.parse(localStorage.getItem("registeredUsers")) || [];


    /* =================================
       CHECK EXISTING EMAIL
    ================================= */

    const existingUser =
        users.find(function (user) {

            return user.email === email;

        });


    if (existingUser) {

        registerMessage.textContent =
            "An account with this email already exists.";

        registerMessage.style.color = "red";

        return;
    }


    /* =================================
       CREATE NEW USER
    ================================= */

    const user = {

        id: Date.now(),

        name: name,

        email: email,

        password: password,

        practiceCount: 0,

        interviewCount: 0,

        bestScore: 0,

        latestScore: 0,

        lastActivity: "No activity yet"

    };


    /* =================================
       SAVE USER
    ================================= */

    users.push(user);


    localStorage.setItem(
        "registeredUsers",
        JSON.stringify(users)
    );


    /* =================================
       SUCCESS MESSAGE
    ================================= */

    registerMessage.textContent =
        "Account created successfully! Redirecting to login...";

    registerMessage.style.color = "green";


    /* Clear form */

    registerForm.reset();


    /* Redirect to Login */

    setTimeout(function () {

        window.location.href =
            "login.html";

    }, 1500);

});