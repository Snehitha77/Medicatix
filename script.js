// Login form submit event handling
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("snehitha").value;
    const password = document.getElementById("snehitha").value;

    if (username === "snehitha" && password === "snehitha") {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Login failed. Please check your credentials.");
    }
});
document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // In a real application, you would send the signup data to a server for processing.
    // For this example, we'll just show an alert message.
    alert(`Sign Up successful!\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);
});
document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logout-button");

    logoutButton.addEventListener("click", function () {
        // Perform logout actions here, such as clearing the user's session or redirecting to a login page.
        // For the sake of this example, we'll simulate a logout by redirecting to a login page.

        // Replace 'login.html' with the actual URL of your login page.
        window.location.href = "login.html";
    });
});






