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
      const output = document.getElementById("output");
      output.innerText = "Olá, mundo! 🌸 Bem-vinda ao JavaScript com FlowerCode!";
      output.style.marginTop = "1rem";
      output.style.color = "#E8AEB7";
    });
  }
});
