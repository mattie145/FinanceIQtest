// ===================== RESULTS ORIGINAL =====================
// Show quiz score and feedback
import { questions } from "./questions-original.js";
import { userName, userGeneration, score, ageMode } from "./state.js";
import { showScreen } from "./main-original.js";

export function showResults() {
  showScreen("results-screen");
  document.getElementById("progress-fill").style.width = "100%";

  const pct = Math.round((score / questions.length) * 100);
  const content = document.getElementById("results-content");

  if (ageMode === "genz") {
    content.innerHTML = buildGenZResults(pct, userGeneration);
  } else if (ageMode === "elder") {
    content.innerHTML = buildElderResults(pct, userGeneration);
  } else {
    content.innerHTML = buildMillennialResults(pct, userGeneration);
  }
}

export function scoreRingHTML(pct) {
  const r = 50, cx = 60, cy = 60;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return `
    <div class="score-ring">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#2a2a3a" stroke-width="10"/>
        <circle class="ring-circle" cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="currentColor" stroke-width="10"
          stroke-linecap="round"
          style="color: var(--accent); stroke-dasharray:${circ}; stroke-dashoffset:${offset}; transition: stroke-dashoffset 1s ease;"/>
      </svg>
      <div class="ring-text">${pct}%</div>
    </div>`;
}

export function buildGenZResults(pct, generation) {
  let badge, verdict, sub, emoji;

  if (pct >= 80) {
    badge = '<span class="genz-badge badge-aura">✨ MAIN CHARACTER AURA ✨</span>';
    verdict = `${userName} (${generation}), you have AURA 💜`;
    sub = "No cap, you actually understood all of this. The finance girlies are shaking.";
    emoji = "🔥💅🏆";
  } else if (pct >= 50) {
    badge = '<span class="genz-badge badge-mid">😐 MID ERA</span>';
    verdict = `${userName} (${generation}), you're giving... mid 😐`;
    sub = "Some of the moves were there, but so were the fumbles. We move.";
    emoji = "🫠📉😅";
  } else {
    badge = '<span class="genz-badge badge-sus">💀 KINDA SUS NGL</span>';
    verdict = `${userName} (${generation}), this is SUS behavior 💀`;
    sub = "Bro said they know finance and then did this. Not the arc we needed.";
    emoji = "💀🤡😭";
  }

  return `
    <div class="result-header">
      ${badge}
      ${scoreRingHTML(pct)}
      <div class="confetti-line">${emoji}</div>
      <div class="verdict" style="font-size:clamp(1.3rem,4vw,1.8rem)">${verdict}</div>
      <div class="verdict-sub">${sub}</div>
      <div class="verdict-sub" style="font-size:.8rem;margin-top:4px">${score} / ${questions.length} correct</div>
    </div>
    <div class="card tips-section">
      <h3>Level Up Your Finance Game 📚</h3>
      ${getTipsHTML(pct)}
    </div>
    <div style="text-align:center; margin-top:2rem;">
      <button class="btn" onclick="document.location='home.html'">← Back Home</button>
    </div>`;
}

export function buildElderResults(pct, generation) {
  let verdict, sub;

  if (pct >= 80) {
    verdict = `Outstanding, ${userName}!`;
    sub = `As a ${generation}, your financial knowledge is commendable. Keep it up and share this wisdom with others.`;
  } else if (pct >= 50) {
    verdict = `Well done, ${userName}.`;
    sub = "You have a solid foundation. A little more learning will serve you very well.";
  } else {
    verdict = `No worries, ${userName}.`;
    sub = "Financial literacy is a journey, not a destination. It's never too late to learn.";
  }

  return `
    <div class="result-header">
      ${scoreRingHTML(pct)}
      <div class="verdict" style="font-size:clamp(1.6rem,5vw,2.2rem)">${verdict}</div>
      <div class="verdict-sub" style="font-size:1rem">${sub}</div>
      <div class="verdict-sub" style="font-size:.9rem;margin-top:4px">${score} of ${questions.length} correct</div>
    </div>
    <div class="card tips-section">
      <h3>Key Takeaways</h3>
      ${getTipsHTML(pct)}
    </div>
    <div style="text-align:center; margin-top:2rem;">
      <button class="btn" onclick="document.location='home.html'">← Back Home</button>
    </div>`;
}

export function buildMillennialResults(pct, generation) {
  let verdict, sub, emoji;

  if (pct >= 80) {
    verdict = `${userName} (${generation}), you're actually crushing it 💪`;
    sub = "Your financial IQ is legit. Now go make those moves.";
    emoji = "🚀";
  } else if (pct >= 50) {
    verdict = `${userName} — solid start, room to grow`;
    sub = "You've got the basics. Some gaps to fill but you're on the right track.";
    emoji = "📈";
  } else {
    verdict = `${userName}, we need to talk about money`;
    sub = "Real talk: the knowledge gaps here could cost you. Let's fix that.";
    emoji = "💬";
  }

  return `
    <div class="result-header">
      ${scoreRingHTML(pct)}
      <div class="confetti-line">${emoji}</div>
      <div class="verdict" style="font-size:clamp(1.2rem,3.5vw,1.7rem)">${verdict}</div>
      <div class="verdict-sub">${sub}</div>
      <div class="verdict-sub" style="font-size:.8rem;margin-top:4px">${score} / ${questions.length} correct</div>
    </div>
    <div class="card tips-section">
      <h3>Your Action Plan</h3>
      ${getTipsHTML(pct)}
    </div>
    <div style="text-align:center; margin-top:2rem;">
      <button class="btn" onclick="document.location='home.html'">← Back Home</button>
    </div>`;
}

export function getTipsHTML(pct) {
  const allTips = [
    { e: "💰", t: "Start your emergency fund today — even $500 is a meaningful start." },
    { e: "📊", t: "Try the 50/30/20 rule for one month and see how your spending shifts." },
    { e: "🏦", t: "If your employer offers a 401(k) match, contribute enough to get the full match — it's free money." },
    { e: "💳", t: "Pay your credit card in full every month to avoid interest charges completely." },
    { e: "📈", t: "Open a Roth IRA or brokerage account and start investing, even small amounts." },
    { e: "🧾", t: "Track your expenses for 30 days — you'll be surprised where the money actually goes." },
  ];

  const tips = pct < 50 ? allTips : allTips.slice(0, 3);
  return tips
    .map(
      (t) => `
    <div class="tip-item">
      <div class="tip-emoji">${t.e}</div>
      <div class="tip-text">${t.t}</div>
    </div>`
    )
    .join("");
}
