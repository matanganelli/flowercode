document.addEventListener("DOMContentLoaded", () => {
  const languageBtn = document.getElementById("languageBtn");
  const runCode = document.getElementById("runCode");
  const nextLesson = document.getElementById("nextLesson");

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

  if (nextLesson) {
    nextLesson.addEventListener("click", () => {
      window.location.href = "js-lessons.html";
    });
  }
});
