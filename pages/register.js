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
       CHECK EXISTING USER
    ================================= */

    const existingUser =
        JSON.parse(localStorage.getItem("registeredUser"));


    if (
        existingUser &&
        existingUser.email === email
    ) {

        registerMessage.textContent =
            "An account with this email already exists.";

        registerMessage.style.color = "red";

        return;
    }


    /* =================================
       SAVE USER
    ================================= */

    const user = {

        name: name,

        email: email,

        password: password

    };


    localStorage.setItem(
        "registeredUser",
        JSON.stringify(user)
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