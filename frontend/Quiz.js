// ===================== QUIZ =====================
// Self-assessment with 1-5 Likert scale ratings
import { questions } from "./questions.js";
import { currentQ, setState } from "./state.js";

export function renderQuestion() {
  const q = questions[currentQ];
  console.log("Rendering question:", currentQ + 1, q);

  document.getElementById("q-num-label").textContent = `Question ${currentQ + 1} of ${questions.length}`;
  document.getElementById("question-text").textContent = q;
  document.getElementById("progress-fill").style.width = `${(currentQ / questions.length) * 100}%`;

  // Hide category label for self-assessment (not applicable)
  if (document.getElementById("q-cat-label")) {
    document.getElementById("q-cat-label").style.display = "none";
  }

  const optsContainer = document.getElementById("options-container");
  optsContainer.innerHTML = "";
  console.log("Options container cleared");

  // Create sliding scale for rating
  const sliderContainer = document.createElement("div");
  sliderContainer.className = "slider-rating-container";
  sliderContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
    margin-bottom: 20px;
  `;

  // Slider labels
  const labelsContainer = document.createElement("div");
  labelsContainer.style.cssText = `
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    color: #999;
    margin-bottom: 8px;
  `;
  labelsContainer.innerHTML = `
    <span>Strongly Disagree</span>
    <span>Strongly Agree</span>
  `;
  sliderContainer.appendChild(labelsContainer);

  // Slider input
  const slider = document.createElement("input");
  slider.type = "range";
  slider.id = `q${currentQ}`;
  slider.className = "question-slider";
  slider.min = "1";
  slider.max = "5";
  slider.step = "1";
  slider.value = window.ratings && window.ratings[currentQ] ? window.ratings[currentQ] : "";
  slider.style.cssText = `
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background: linear-gradient(to right, var(--border), var(--accent));
    outline: none;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
  `;

  // Add webkit styles for slider thumb
  const style = document.createElement("style");
  style.textContent = `
    input.question-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--accent);
      cursor: pointer;
      border: 2px solid #1c1c28;
      box-shadow: 0 0 8px rgba(0, 255, 136, 0.4);
      transition: all .2s;
    }
    
    input.question-slider::-webkit-slider-thumb:hover {
      transform: scale(1.2);
      box-shadow: 0 0 12px rgba(0, 255, 136, 0.6);
    }
    
    input.question-slider::-moz-range-thumb {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--accent);
      cursor: pointer;
      border: 2px solid #1c1c28;
      box-shadow: 0 0 8px rgba(0, 255, 136, 0.4);
      transition: all .2s;
    }
    
    input.question-slider::-moz-range-thumb:hover {
      transform: scale(1.2);
      box-shadow: 0 0 12px rgba(0, 255, 136, 0.6);
    }
  `;
  document.head.appendChild(style);

  sliderContainer.appendChild(slider);

  // Value display
  const valueDisplay = document.createElement("div");
  valueDisplay.className = "slider-value-display";
  valueDisplay.style.cssText = `
    text-align: center;
    font-family: 'Space Mono', monospace;
    font-size: 1rem;
    color: var(--accent);
    font-weight: 700;
    min-height: 24px;
  `;
  const displayValue = window.ratings && window.ratings[currentQ] ? window.ratings[currentQ] : "—";
  valueDisplay.textContent = displayValue;
  sliderContainer.appendChild(valueDisplay);

  slider.addEventListener("input", () => {
    valueDisplay.textContent = slider.value;
    selectRating(slider.value);
  });

  optsContainer.appendChild(sliderContainer);
  console.log("Slider element created and appended", slider);

  // Hide feedback and next button initially
  const fb = document.getElementById("feedback-box");
  if (fb) {
    fb.style.display = "none";
  }
  
  // Show next button if rating already selected
  if (window.ratings && window.ratings[currentQ]) {
    document.getElementById("next-btn").style.display = "inline-block";
  } else {
    document.getElementById("next-btn").style.display = "none";
  }
}

export function selectRating(value) {
  if (value === "") return;

  // Store the rating
  const currentQ = parseInt(document.getElementById("q-num-label").textContent.split(" ")[1]) - 1;
  if (!window.ratings) window.ratings = {};
  window.ratings[currentQ] = parseInt(value);

  // Log storage for debugging
  console.log(`✅ Question ${currentQ + 1} rating stored: ${value} (1=Strongly Disagree, 5=Strongly Agree)`);
  console.log("Current ratings:", window.ratings);

  // Show next button when rating is selected
  document.getElementById("next-btn").style.display = "inline-block";
}