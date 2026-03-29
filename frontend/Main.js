// ===================== MAIN — event listeners & helpers =====================
import { questions } from "./questions.js";
import { setState, applyAgeMode } from "./state.js";
import { renderQuestion } from "./quiz.js";
import { showResults } from "./results.js";

// ===================== HELPERS =====================
export function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  const el = document.getElementById(id);
  el.classList.add("active");
  el.style.animation = "none";
  el.offsetHeight;
  el.style.animation = "";
}

// ===================== INTRO =====================
document.querySelectorAll(".radio-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".radio-btn").forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    setState({ userExp: btn.dataset.val });
  });
});

document.getElementById("start-btn").addEventListener("click", () => {
  const name = document.getElementById("name-input").value.trim();
  const generationSelect = document.getElementById("generation-input");
  const selectedGeneration = generationSelect.value;
  const modeFromData = generationSelect.options[generationSelect.selectedIndex].getAttribute("data-mode");

  const selectedBtn = document.querySelector(".radio-btn.selected");
  const userExp = selectedBtn ? selectedBtn.dataset.val : "";

  const selfRatingElement = document.getElementById("self-rating");
  const selfRating = selfRatingElement ? selfRatingElement.value : "";

  if (!name)              { alert("Hey — drop your name first!"); return; }
  if (!selectedGeneration){ alert("Pick your generation!"); return; }
  if (!userExp)           { alert("Pick your experience level!"); return; }
  if (selfRatingElement && !selfRating) { alert("Please rate your finance knowledge!"); return; }

  applyAgeMode(modeFromData);
  setState({ userName: name, userGeneration: selectedGeneration, ageMode: modeFromData, currentQ: 0 });

  if (!window.ratings) window.ratings = {};

  showScreen("quiz-screen");
  renderQuestion();
});

// ===================== QUIZ NAV =====================
document.getElementById("next-btn").addEventListener("click", () => {
  import("./state.js").then(({ currentQ }) => {
    const next = currentQ + 1;
    setState({ currentQ: next });
    if (next >= questions.length) {
      showResults();
    } else {
      renderQuestion();
    }
  });
});

// ===================== RESTART =====================
document.getElementById("restart-btn").addEventListener("click", () => {
  window.ratings = {};
  setState({ currentQ: 0, score: 0, answered: false, userName: "", userGeneration: "", ageMode: "", userExp: "" });

  // Clear form
  document.getElementById("name-input").value = "";
  document.getElementById("generation-input").selectedIndex = 0;
  document.querySelectorAll(".radio-btn").forEach((b) => b.classList.remove("selected"));

  const selfRating = document.getElementById("self-rating");
  if (selfRating) selfRating.value = selfRating.min || 1;

  showScreen("intro-screen");
});

// ===================== NEXT ASSESSMENT =====================
document.getElementById("next-assessment-btn").addEventListener("click", () => {
  // Detect which page we're on and s
  