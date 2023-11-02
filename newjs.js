document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
      alert("Login successful!");
      // Redirect to the main page or perform other actions here
    } else {
      alert("Login failed. Please check your credentials.");
    }
  });
});
