document.addEventListener("DOMContentLoaded", () => {
  const languageBtn = document.getElementById("languageBtn");
  const runCode = document.getElementById("runCode");

  if (languageBtn) {
    languageBtn.addEventListener("click", () => {
      window.location.href = "language.html";
    });
  }

  if (runCode) {
    runCode.addEventListener("click", () => {
      window.location.href = "js-lessons.html";
    });
  }
});
