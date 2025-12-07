// MOBILE MENU
const burger = document.getElementById("burgerBtn");
const nav = document.getElementById("navLinks");

burger.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// DARK MODE
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// QUIZ
function checkQuiz() {
    const val = parseInt(document.getElementById("quizInput").value);
    const result = document.getElementById("quizResult");

    if (val === 36) {
        result.textContent = "✔️ Jawaban benar!";
        result.style.color = "#198754";
    } else {
        result.textContent = "❌ Masih salah!";
        result.style.color = "#dc3545";
    }
}
