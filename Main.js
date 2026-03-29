// ===================== MAIN — event listeners & helpers =====================
// Self-assessment questionnaire with 1-5 rating scale
import { questions } from "./questions.js";
import { setState, applyAgeMode } from "./state.js";
import { renderQuestion } from "./quiz.js";
import { showResults } from "./results.js";

// ===================== HELPERS =====================
export function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  const el = document.getElementById(id);
  el.classList.add("active");
  // Re-trigger animation
  el.style.animation = "none";
  el.offsetHeight; // force reflow
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

  // Read userExp directly from the selected button
  const selectedBtn = document.querySelector(".radio-btn.selected");
  const userExp = selectedBtn ? selectedBtn.dataset.val : "";

  // Check for self-rating if it exists on the page
  const selfRatingElement = document.getElementById("self-rating");
  const selfRating = selfRatingElement ? selfRatingElement.value : "";

  if (!name)               { alert("Hey — drop your name first!"); return; }
  if (!selectedGeneration) { alert("Pick your generation!"); return; }
  if (!userExp)            { alert("Pick your experience level!"); return; }
  if (selfRatingElement && !selfRating) { alert("Please rate your finance knowledge!"); return; }

  applyAgeMode(modeFromData);
  setState({ userName: name, userGeneration: selectedGeneration, ageMode: modeFromData, currentQ: 0 });

  // Initialize ratings storage
  if (!window.ratings) window.ratings = {};

  showScreen("quiz-screen");
  renderQuestion();
});

// ===================== QUIZ NAV =====================
document.getElementById("next-btn").addEventListener("click", () => {
  // Import currentQ lazily to get fresh value after setState
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

  // Clear intro form fields
  document.getElementById("name-input").value = "";
  document.getElementById("generation-input").selectedIndex = 0;
  document.querySelectorAll(".radio-btn").forEach((b) => b.classList.remove("selected"));
  document.body.classList.remove("mode-genz", "mode-millennial", "mode-elder");

  // Reset self-rating if it exists
  const selfRatingElement = document.getElementById("self-rating");
  if (selfRatingElement) selfRatingElement.selectedIndex = 0;

  showScreen("intro-screen");
});

// ===================== NEXT ASSESSMENT =====================
document.getElementById("next-assessment-btn").addEventListener("click", () => {
  // Detect current page and route to the other assessment
  const currentPage = window.location.pathname.split("/").pop();

  const nextMap = {
    "quiz-assessment.html":      "quiz-original.html",   // self-assessment → knowledge quiz
    "self-rating-dropdown.html": "quiz-original.html",   // same flow
    "quiz-original.html":        "quiz-assessment.html", // knowledge quiz → self-assessment
  };

  const destination = nextMap[currentPage] || "index.html";

  // Reset state before navigating
  window.ratings = {};
  setState({ currentQ: 0, score: 0, answered: false });

  window.location.href = destination;
});
