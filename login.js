
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


    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value.trim();


    /* Check empty fields */

    if (email === "" || password === "") {

        loginMessage.textContent =
            "Please fill in all fields.";

        return;
    }


    /* =================================
       DEMO LOGIN
       ================================= */

    if (
        email === "student@gmail.com" &&
        password === "123456"
    ) {

        /* Save login status */

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        localStorage.setItem(
            "userEmail",
            email
        );


        loginMessage.textContent =
            "Login successful!";


        /* Go to Dashboard */

        setTimeout(function () {

            window.location.href =
                "dashboard.html";

        }, 1000);


    } else {

        loginMessage.textContent =
            "Invalid email or password.";

    }

});

