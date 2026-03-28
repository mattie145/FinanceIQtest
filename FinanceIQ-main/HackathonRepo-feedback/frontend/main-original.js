// ===================== MAIN ORIGINAL — event listeners & helpers =====================
// Multiple-choice quiz with score tracking
import { questions } from "./questions-original.js";
import { setState, applyAgeMode } from "./state.js";
import { getAgeMode, getGenerationName } from "./generations.js";
import { renderQuestion } from "./quiz-original.js";
import { showResults } from "./results-original.js";

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
  const age = parseInt(document.getElementById("age-input").value);

  // Read userExp directly from the selected button
  const selectedBtn = document.querySelector(".radio-btn.selected");
  const userExp = selectedBtn ? selectedBtn.dataset.val : "";

  if (!name)    { alert("Hey — drop your name first!"); return; }
  if (!age || age < 10 || age > 110) { alert("Please enter a valid age."); return; }
  if (!userExp) { alert("Pick your experience level!"); return; }

  const mode = getAgeMode(age);
  const generation = getGenerationName(age);
  applyAgeMode(mode);
  setState({ userName: name, userAge: age, userGeneration: generation, ageMode: mode, currentQ: 0, score: 0 });

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
  document.body.classList.remove("mode-genz", "mode-millennial", "mode-elder");
  document.getElementById("name-input").value = "";
  document.getElementById("age-input").value = "";
  document.querySelectorAll(".radio-btn").forEach((b) => b.classList.remove("selected"));
  setState({ userExp: "", ageMode: "default" });
  showScreen("intro-screen");
});
