// ===================== QUIZ ORIGINAL =====================
// Multiple-choice quiz with scoring
import { questions } from "./questions-original.js";
import { ageMode, currentQ, score, answered, setState } from "./state.js";

export function renderQuestion() {
  const q = questions[currentQ];

  document.getElementById("q-num-label").textContent = `Question ${currentQ + 1} of ${questions.length}`;
  document.getElementById("q-cat-label").textContent = q.cat;
  document.getElementById("question-text").textContent = q.q;
  document.getElementById("progress-fill").style.width = `${(currentQ / questions.length) * 100}%`;

  const optsContainer = document.getElementById("options-container");
  optsContainer.innerHTML = "";
  q.opts.forEach((optText, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = optText;
    btn.addEventListener("click", () => selectAnswer(i));
    optsContainer.appendChild(btn);
  });

  const fb = document.getElementById("feedback-box");
  fb.className = "feedback-box";
  fb.style.display = "none";

  document.getElementById("next-btn").style.display = "none";
  setState({ answered: false });
}

export function selectAnswer(idx) {
  if (answered) return;
  setState({ answered: true });

  const q = questions[currentQ];
  const opts = document.querySelectorAll(".option");
  const correct = idx === q.ans;

  if (correct) setState({ score: score + 1 });

  opts.forEach((o) => o.classList.add("disabled"));
  opts[idx].classList.add(correct ? "correct" : "wrong");
  if (!correct) opts[q.ans].classList.add("correct");

  const fb = document.getElementById("feedback-box");
  fb.className = "feedback-box visible" + (correct ? "" : " wrong-fb");
  fb.innerHTML = getFeedback(correct, q.explain);
  fb.style.display = "block";

  document.getElementById("next-btn").style.display = "inline-block";
}

export function getFeedback(correct, explain) {
  if (ageMode === "genz") {
    const correctLines = [
      "No cap, that's right! 🔥",
      "W answer fr fr 💅",
      "You ate that bestie 😮‍💨",
      "Main character energy ✨",
    ];
    const wrongLines = [
      "Bro said what 💀",
      "That's kinda sus ngl 😭",
      "Not you fumbling this one",
      "OK so we need to talk 💀",
    ];
    const pool = correct ? correctLines : wrongLines;
    const prefix = pool[Math.floor(Math.random() * pool.length)];
    return `<strong>${prefix}</strong><br><br>${explain}`;
  }

  if (ageMode === "elder") {
    const prefix = correct ? "✅ Excellent!" : "❌ Not quite.";
    return `<strong style="font-size:1.05rem">${prefix}</strong><br><br><strong>${explain}</strong>`;
  }

  // Millennial default
  const prefix = correct ? "✅ Nice work!" : "❌ Missed it.";
  return `${prefix} ${explain}`;
}
