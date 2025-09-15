document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  const message = document.getElementById("signup-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        message.textContent = `✅ ${data.message}`;
        message.style.color = "green";
        form.reset();
      } else {
        message.textContent = `❌ ${data.message}`;
        message.style.color = "red";
      }
    })
    .catch(err => {
      console.error("Error:", err);
      message.textContent = "❌ Server error. Please try again.";
      message.style.color = "red";
    });
  });
});
