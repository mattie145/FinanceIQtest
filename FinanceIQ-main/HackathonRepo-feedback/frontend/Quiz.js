// ===================== QUIZ =====================
// Self-assessment with 1-5 Likert scale ratings
import { questions } from "./questions.js";
import { currentQ, setState } from "./state.js";

export function renderQuestion() {
  const q = questions[currentQ];

  document.getElementById("q-num-label").textContent = `Question ${currentQ + 1} of ${questions.length}`;
  document.getElementById("question-text").textContent = q;
  document.getElementById("progress-fill").style.width = `${(currentQ / questions.length) * 100}%`;

  document.getElementById("q-cat-label").style.display = "none";

  const optsContainer = document.getElementById("options-container");
  optsContainer.innerHTML = "";

  const select = document.createElement("select");
  select.id = `q${currentQ}`;
  select.className = "rating-select";
  select.required = true;

  const defaultOpt = document.createElement("option");
  defaultOpt.value = "";
  defaultOpt.textContent = "Select a rating...";
  select.appendChild(defaultOpt);

  const ratingLabels = [
    "1 - Strongly Disagree",
    "2 - Disagree",
    "3 - Neutral",
    "4 - Agree",
    "5 - Strongly Agree"
  ];

  ratingLabels.forEach((label, i) => {
    const opt = document.createElement("option");
    opt.value = String(i + 1);
    opt.textContent = label;
    select.appendChild(opt);
  });

  select.addEventListener("change", () => {
    selectRating(select.value);
  });

  optsContainer.appendChild(select);

  // Hide feedback and next button initially
  const fb = document.getElementById("feedback-box");
  fb.style.display = "none";
  fb.innerHTML = "";
  document.getElementById("next-btn").style.display = "none";
}

export function selectRating(value) {
  if (value === "") return;

  const qIndex = parseInt(document.getElementById("q-num-label").textContent.split(" ")[1]) - 1;
  const rating = parseInt(value);

  if (!window.ratings) window.ratings = {};
  window.ratings[qIndex] = rating;

  document.getElementById("next-btn").style.display = "inline-block";
}
