document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  // Basic validation is already done via HTML5
  document.getElementById("formStatus").innerText = "Thank you! Message sent.";
});
