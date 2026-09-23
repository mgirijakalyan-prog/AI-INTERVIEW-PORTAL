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


    /* Empty fields */

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

        loginMessage.textContent =
            "Login successful!";

        loginMessage.style.color = "green";

        setTimeout(function () {
            window.location.href = "dashboard.html";
        }, 800);

        return;
    }


    /* =================================
       REGISTERED ACCOUNT
    ================================= */

    const savedUser =
        localStorage.getItem("registeredUser");


    if (!savedUser) {

        loginMessage.textContent =
            "No registered account found. Please create an account first.";

        loginMessage.style.color = "red";

        return;
    }


    let user;

    try {

        user = JSON.parse(savedUser);

    } catch (error) {

        loginMessage.textContent =
            "Account data is corrupted. Please register again.";

        loginMessage.style.color = "red";

        return;
    }


    /* Compare account */

    if (
        user.email === email &&
        user.password === password
    ) {

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userEmail", user.email);
        localStorage.setItem("userName", user.name);

        loginMessage.textContent =
            "Login successful!";

        loginMessage.style.color = "green";

        setTimeout(function () {

            window.location.href =
                "dashboard.html";

        }, 800);

    } else {

        loginMessage.textContent =
            "Invalid email or password.";

        loginMessage.style.color = "red";

    }

});