
  document.body.appendChild(socialLinks);

  // Footer
  const footer = document.createElement("footer");
  const year = new Date().getFullYear();
  footer.innerHTML = `<p>Technology of Align. All rights reserved © ${year}</p>`;
  document.body.appendChild(footer);

  // Form submission logic
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset();
  });

