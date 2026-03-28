// ===================== MAIN ORIGINAL — event listeners & helpers =====================
// Multiple-choice quiz with score tracking
import { questions } from "./questions-original.js";
import { setState, applyAgeMode } from "./state.js";
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
  const generationSelect = document.getElementById("generation-input");
  const selectedGeneration = generationSelect.value;
  const modeFromData = generationSelect.options[generationSelect.selectedIndex].getAttribute("data-mode");

  // Read userExp directly from the selected button
  const selectedBtn = document.querySelector(".radio-btn.selected");
  const userExp = selectedBtn ? selectedBtn.dataset.val : "";

  if (!name)    { alert("Hey — drop your name first!"); return; }
  if (!selectedGeneration) { alert("Pick your generation!"); return; }
  if (!userExp) { alert("Pick your experience level!"); return; }

  applyAgeMode(modeFromData);
  setState({ userName: name, userGeneration: selectedGeneration, ageMode: modeFromData, currentQ: 0, score: 0 });

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
