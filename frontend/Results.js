// ===================== RESULTS =====================
// Show learning areas for questions rated below 3
import { questions } from "./questions.js";
import { userName, userGeneration } from "./state.js";
import { showScreen } from "./main.js";

export function showResults() {
  showScreen("results-screen");
  document.getElementById("progress-fill").style.width = "100%";

  const ratings = window.ratings || {};
  const learningAreas = [];

  // Find all ratings below 3
  questions.forEach((q, i) => {
    if (ratings[i] && Number(ratings[i]) < 3) {
      learningAreas.push({ index: i, question: q, rating: ratings[i] });
    }
  });

  const content = document.getElementById("results-content");

  if (learningAreas.length === 0) {
    content.innerHTML = buildExcellentResults(userName, userGeneration);
  } else {
    content.innerHTML = buildLearningAreasResults(userName, userGeneration, learningAreas);
  }
}

export function buildExcellentResults(userName, generation) {
  return `
    <div class="result-header">
      <div class="verdict" style="font-size:2rem">🎉 Excellent Work! 🎉</div>
      <div class="verdict-sub" style="font-size:1.1rem">
        ${userName} (${generation}), you're crushing it financially!
      </div>
      <div class="verdict-sub" style="margin-top:1rem; color:#666;">
        You seem confident across all areas of financial literacy. Keep building on this momentum—your future self will thank you! 💪
      </div>
    </div>
    <div style="text-align:center; margin-top:2rem;">
      <button class="btn" onclick="document.location='home.html'">← Back Home</button>
    </div>`;
}

export function buildLearningAreasResults(userName, generation, areas) {
  // Build the learning areas HTML
  const areasHTML = areas.map(({ index, question, rating }) => `
    <div class="learning-area" style="margin:1.5rem 0; padding:1rem; border-left:4px solid #ff6b6b; background:#fff5f5;">
      <h4 style="margin:0 0 0.5rem 0; color:#d63031;">
        ${index + 1}. ${question}
      </h4>
      <p style="margin:0.5rem 0; font-size:0.95rem; color:#555;">
        💡 ${getGuidance(index)}
      </p>
    </div>
  `).join("");

  return `
    <div class="result-header">
      <div class="verdict" style="font-size:1.8rem">📚 Recommended Learning Areas</div>
      <div class="verdict-sub" style="font-size:1rem; margin:1rem 0;">
        ${userName} (${generation}), here are some areas to dive deeper into:
      </div>
    </div>
    <div style="background:#f9f9f9; padding:1.5rem; border-radius:8px; margin-top:1.5rem;">
      ${areasHTML}
    </div>
    <div style="margin-top:2rem; padding:1rem; background:#e8f5e9; border-radius:6px; text-align:center;">
      <p style="margin:0; color:#2d6a4f; font-weight:bold;">
        Remember: Financial literacy is a journey, not a destination. Start with one area and build from there! 🚀
      </p>
    </div>
    <div style="text-align:center; margin-top:2rem;">
      <button class="btn" onclick="document.location='home.html'">← Back Home</button>
    </div>`;
}

export function getGuidance(index) {
  const guidance = [
    "Start tracking your weekly spending using an app or notebook. Awareness is the first step to control.",
    "Before any purchase, pause and ask: 'Do I have this money?' This simple habit prevents debt spiral.",
    "Set a small regular savings goal—even $5/week builds the discipline. Use a separate account to keep it safe.",
    "Try the '24-hour rule'—wait a day before non-essential purchases. Most impulses fade!",
    "Learn how banks work: deposits, withdrawals, interest. Watch Khan Academy or your bank's tutorial videos.",
    "Debit = your money now. Credit = borrowing money (pay interest if not cleared monthly). Know the difference!",
    "Interest is the 'rental fee' for borrowed money. Understand it when borrowing OR saving.",
    "Read reputable finance books or follow trusted finance creators. Knowledge builds confidence.",
    "Research different earning paths (jobs, freelancing, investments) to understand life's financial options.",
    "Start conversations about money at home. Open dialogue reduces shame and builds literacy.",
    "Before major purchases, check multiple sources. Small savings multiply into big wins annually.",
    "Ads are designed to manipulate. Recognize them and think critically about what you actually need.",
    "Use a decision framework: Need it? Use it? Love it? Buy only if 2+ are yes.",
    "Practice secure digital payments in safe environments. Ask your bank for security tips.",
    "Never share passwords, use strong PINs, shop on HTTPS sites. Protect your financial identity.",
    "Write down 3 financial goals (short, medium, long-term). Review and update quarterly.",
    "Join free financial literacy programs, podcasts, or communities. Finance evolves—keep learning!",
    "Normalize money talk with peers. Shared learning makes it less intimidating.",
    "Young people who understand money make better decisions earlier. You're investing in your future!",
    "Small steps (budgeting in an app, tracking spending) build a sense of control. Start small, build big."
  ];
  return guidance[index] || "Continue learning about this financial topic.";
}

