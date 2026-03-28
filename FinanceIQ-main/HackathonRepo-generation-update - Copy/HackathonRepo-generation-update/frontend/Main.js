// ===================== MAIN — event listeners & helpers =====================
import { questions } from "./questions.js";
import { setState, getAgeMode, applyAgeMode, getCurrentQ } from "./state.js";
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
const gen = document.getElementById("gen-select").value;

if (!gen) { alert("Pick your generation!"); return; }

const genToMode = {
  silent: "elder",
  boomer: "elder",
  genx: "elder",
  millennial: "millennial",
  genz: "genz",
  alpha: "genz",
  beta: "genz"
};

const mode = genToMode[gen];

applyAgeMode(mode);

setState({
  userName: name,
  userGen: gen,
  ageMode: mode,
  currentQ: 0,
  score: 0
});


  showScreen("quiz-screen");
  renderQuestion();
});

// ===================== QUIZ NAV =====================
document.getElementById("next-btn").addEventListener("click", () => {
  const currentQ = getCurrentQ();
  const next = currentQ + 1;
  setState({ currentQ: next });
  if (next >= questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
});

// ===================== RESTART =====================
document.getElementById("restart-btn").addEventListener("click", () => {
  document.body.classList.remove("mode-genz", "mode-millennial", "mode-elder");
  document.getElementById("name-input").value = "";
  document.getElementById("gen-select").value = "";
  document.querySelectorAll(".radio-btn").forEach((b) => b.classList.remove("selected"));
  setState({ userExp: "", ageMode: "default" });
  showScreen("intro-screen");
});
