// script.js
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    if (!loginForm) return;

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "admin" && password === "1234") {

            // ✅ STORE LOGIN STATUS
            sessionStorage.setItem("loggedIn", "true");

            // Redirect to dashboard
            window.location.href = "dashboard.html";

        } else {
            loginForm.classList.remove("shake");
            void loginForm.offsetWidth;
            loginForm.classList.add("shake");

            alert("Invalid Login Details");
        }
    });
});