// script.js
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    if (!loginForm) return;

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "admin" && password === "1234") {
            // Correct login → redirect to dashboard
            window.location.href = "dashboard.html";
        } else {
            // Wrong login → shake animation
            loginForm.classList.remove("shake"); // reset if already shaking
            void loginForm.offsetWidth;          // force reflow
            loginForm.classList.add("shake");

            alert("Invalid Login Details");
        }
    });
});