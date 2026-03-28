// ===================== RESULTS =====================
import { questions } from "./questions.js";
import { userName, userGeneration } from "./state.js";
import { showScreen } from "./main.js";
import { getGenerationGuidance } from "./paragraphs.js";

// ── Positive reinforcement for ratings 4–5, per question ────────────────────
const positiveReinforcement = [
  {
    4: "You're tracking spending — that awareness already puts you ahead of most people. Keep the habit consistent and consider noting *categories* too (food, fun, bills) to spot patterns.",
    5: "Tracking every week is a genuine financial superpower. You know exactly where you stand — now use that data to fine-tune where your money goes next.",
  },
  {
    4: "Checking before you buy shows real financial discipline. That pause is what keeps people out of debt — it only takes a second but makes a huge difference over time.",
    5: "Always checking before buying is the habit that keeps finances healthy long-term. You're never spending blind — that kind of control compounds into real financial security.",
  },
  {
    4: "Regular saving is one of the best habits you can have. If you haven't already, try automating it — even small automatic transfers grow faster than you'd expect.",
    5: "Consistent saving is the foundation of every financial success story. Consider whether your savings are in the right place — a high-yield account makes your discipline work even harder.",
  },
  {
    4: "Resisting the urge to spend now is harder than it sounds — and you're doing it. That skill is directly linked to long-term wealth building. Keep reinforcing it.",
    5: "Strong delayed gratification is rare and genuinely powerful. The gap between what you could spend and what you choose to spend is exactly where financial freedom is built.",
  },
  {
    4: "Understanding how bank accounts work gives you a solid foundation. Take it a step further — compare account types and make sure your money is in the one earning you the most.",
    5: "You've got bank accounts down. Now make them work harder: explore high-yield savings, understand sweep features, and ensure every account has a clear purpose.",
  },
  {
    4: "Knowing the debit vs. credit difference protects you from one of the most common financial traps. Make sure you're also aware of how credit utilisation affects your credit score.",
    5: "You clearly understand how credit works. If you use a credit card, make sure autopay is set to the full balance — that's the move that turns credit into a tool, not a trap.",
  },
  {
    4: "Understanding interest is genuinely one of the most valuable financial concepts there is. Make sure you're applying it — are your savings earning competitive interest right now?",
    5: "Strong interest knowledge is something most people never fully develop. Put it to work: compound interest on investments and eliminating high-interest debt are the two levers that matter most.",
  },
  {
    4: "Financial confidence comes from knowledge — and you've clearly built it. Stay curious, keep updating your knowledge, and trust the decisions you make with the information you have.",
    5: "High financial confidence backed by real knowledge is exactly the goal. Share what you know with people around you — financial literacy spreads best through conversation.",
  },
  {
    4: "Understanding diverse income sources opens real doors. Think about which of those paths makes sense for your situation — diversifying income is one of the most powerful financial moves available.",
    5: "You know that income isn't one-size-fits-all — that perspective alone opens up possibilities most people never consider. Keep exploring ways to build multiple streams over time.",
  },
  {
    4: "Talking money at home builds the kind of financial literacy that sticks. Those conversations also create accountability — keep them going and go deeper when you can.",
    5: "Open family conversations about money are rare and valuable. That openness builds generational financial literacy — the lessons shared at home are often the ones that last a lifetime.",
  },
  {
    4: "Comparing prices before buying is a habit that quietly saves hundreds every year. Make sure you're applying it to recurring costs too — subscriptions, insurance, and utilities are easy wins.",
    5: "You're a natural comparison shopper — and the savings really do add up. Apply that same energy to your bigger fixed costs and you'll find even more room to save.",
  },
  {
    4: "Recognising ad influence puts you in control of your spending decisions rather than being led by them. That awareness is increasingly rare and genuinely valuable in a world built to make you buy.",
    5: "You're highly aware of how advertising works — that critical eye protects your wallet in ways most people don't realise. Keep questioning the 'why' behind every purchase impulse.",
  },
  {
    4: "Thinking before you buy separates intentional spenders from reactive ones. Keep asking yourself whether a purchase adds genuine value — that question gets sharper with practice.",
    5: "Deliberate spending is one of the clearest markers of financial maturity. You're not just managing money — you're being intentional about what you let into your life. That's powerful.",
  },
  {
    4: "Digital payment confidence is essential today. Make sure your security habits are keeping pace — strong passwords, 2FA, and regular transaction reviews complete the picture.",
    5: "You're fully comfortable with digital payments — now make sure your security hygiene matches. Two-factor authentication on all financial accounts is the one step that protects everything else.",
  },
  {
    4: "Online safety awareness protects everything you work to earn. Keep your knowledge current — digital threats evolve fast, and staying informed is the best defence.",
    5: "Strong online security habits are genuinely rare and extremely valuable. Keep them sharp — review app permissions regularly and stay alert to new scam techniques as they emerge.",
  },
  {
    4: "Thinking about your financial future now is exactly the right move. Turn that thinking into written goals — even rough numbers give your saving and investing real direction.",
    5: "Future-focused financial thinking at your level is what separates people who build wealth from those who don't. Make sure your plans are documented and reviewed at least once a year.",
  },
  {
    4: "Wanting to learn more is the mindset that keeps financial knowledge growing. Act on it — one book, podcast, or reliable resource can shift your whole financial perspective.",
    5: "A genuine appetite for financial learning is one of the best traits you can have. Keep feeding it with quality sources and share what you learn — teaching reinforces understanding.",
  },
  {
    4: "Enjoying money conversations makes you a natural financial learner. Keep those discussions going — the more openly people talk about money, the better decisions everyone makes.",
    5: "You genuinely enjoy talking about money, and that openness is contagious in the best way. Those conversations build collective financial literacy that benefits everyone around you.",
  },
  {
    4: "Believing in financial literacy for young people puts you in a position to make a real difference — whether that's through your own children, mentoring, or simply modelling good habits.",
    5: "Your conviction that financial education matters is both right and important. Consider putting it into action beyond yourself — the impact of sharing financial knowledge ripples outward.",
  },
  {
    4: "Feeling in control of your finances is the goal, and you're there. Keep that control active — regular check-ins on your budget and goals maintain the clarity that makes it feel real.",
    5: "Complete financial control and confidence is what all of this is working toward — and you have it. Keep the habits that got you here and help others find the same footing.",
  },
];

// ── Generation helpers (unchanged from previous version) ────────────────────

function getGenerationEmoji(generation) {
  const map = {
    "Silent Generation": "🎖️", "Baby Boomers": "☮️", "Generation X": "📼",
    "Millennials": "💻", "Generation Z": "📱", "Generation Alpha": "🤖", "Generation Beta": "⭐",
  };
  return map[generation] || "👤";
}

function getExcellentHeadline(generation) {
  const map = {
    "Silent Generation": "A lifetime of wisdom, confirmed. You're as sharp as ever with money.",
    "Baby Boomers":      "You've built excellent financial habits — your future self thanks you.",
    "Generation X":      "Balancing everything and still crushing it financially. Respect.",
    "Millennials":       "Despite every challenge thrown at your generation — you're winning with money.",
    "Generation Z":      "Starting strong — you're way ahead of where most people are at your age.",
    "Generation Alpha":  "You already know more about money than you realise. Keep going!",
    "Generation Beta":   "Amazing — you're a future money superstar in the making!",
  };
  return map[generation] || "You're doing great with your finances!";
}

function getExcellentSubtext(generation) {
  const map = {
    "Silent Generation": "Your financial discipline spans a lifetime of smart decisions. Consider sharing that wisdom — it's genuinely priceless.",
    "Baby Boomers":      "Your retirement readiness and financial awareness put you in great shape. Keep reviewing and protecting what you've built.",
    "Generation X":      "Managing competing financial demands — family, retirement, daily life — takes real skill. You're clearly handling it well.",
    "Millennials":       "You've navigated student debt, a tough housing market, and economic uncertainty — and still come out financially confident. That's earned.",
    "Generation Z":      "Starting your financial journey with this level of awareness puts you in an elite group. Compound interest is your best friend from here.",
    "Generation Alpha":  "Learning about money this early puts you years ahead. Keep asking questions — every answer is an investment in your future.",
    "Generation Beta":   "Look at you — already thinking about money and doing brilliantly! Keep learning and you'll have a superpower most grown-ups wish they had.",
  };
  return map[generation] || "You seem confident across all areas of financial literacy. Keep building on this momentum — your future self will thank you! 💪";
}

function getLearningIntro(generation) {
  const map = {
    "Silent Generation": "Even the most experienced financial minds keep learning. Here are a few areas worth revisiting at your stage:",
    "Baby Boomers":      "As you approach or navigate retirement, sharpening these areas now can make a significant difference to your financial security:",
    "Generation X":      "You're juggling a lot right now. Strengthening these areas will help you protect what you've built and set up the next chapter:",
    "Millennials":       "Your generation faces unique financial pressures. Getting sharper in these areas will help you build the future you're working toward:",
    "Generation Z":      "You're at the perfect age to build these foundations. Small improvements now have enormous long-term impact — here's where to focus:",
    "Generation Alpha":  "Great news — there's so much cool stuff to learn about money! Here are some areas to explore next:",
    "Generation Beta":   "You're just getting started with your money journey, and that's exciting! Here are some fun things to learn about:",
  };
  return map[generation] || "Here are some areas to dive deeper into:";
}

function getMotivationFooter(generation) {
  const map = {
    "Silent Generation": "Every bit of financial knowledge you continue to build protects and honours everything you've worked for over a lifetime. You've got this.",
    "Baby Boomers":      "It's never too late to sharpen your financial skills — and at your stage, even small improvements to your approach can compound into meaningful results.",
    "Generation X":      "You're at the most financially complex stage of life, but also the one with the most to gain from getting these areas right. You've handled harder things than this.",
    "Millennials":       "Financial literacy is your generation's most powerful response to the economic challenges you've faced. Every step forward matters — and you're already taking them.",
    "Generation Z":      "Time is your biggest financial asset. Building these skills now means the benefits compound for decades. Your future self will look back on this moment with gratitude. 🚀",
    "Generation Alpha":  "Learning about money is one of the coolest things you can do right now. Keep going — the more you learn, the more choices you'll have when you grow up!",
    "Generation Beta":   "You're amazing for thinking about money this early! Keep learning, keep asking questions, and remember — every little thing you learn today helps your future self.",
  };
  return map[generation] || "Remember: Financial literacy is a journey, not a destination. Start with one area and build from there! 🚀";
}

// ── Main export ──────────────────────────────────────────────────────────────

export function showResults() {
  showScreen("results-screen");
  document.getElementById("progress-fill").style.width = "100%";

  const ratings = window.ratings || {};
  const allAnswered = [];

  questions.forEach((q, i) => {
    if (ratings[i] !== undefined) {
      allAnswered.push({ index: i, question: q, rating: Number(ratings[i]) });
    }
  });

  const lowRatings  = allAnswered.filter(a => a.rating <= 3);
  const highRatings = allAnswered.filter(a => a.rating >= 4);

  const content = document.getElementById("results-content");

  if (lowRatings.length === 0) {
    content.innerHTML = buildExcellentResults(userName, userGeneration, highRatings);
  } else {
    content.innerHTML = buildMixedResults(userName, userGeneration, lowRatings, highRatings);
  }
}

// ── All-excellent path ───────────────────────────────────────────────────────

export function buildExcellentResults(userName, generation, highRatings) {
  const emoji = getGenerationEmoji(generation);

  const reinforcementHTML = highRatings.map(({ index, question, rating }) => {
    const msg = positiveReinforcement[index]?.[rating] || positiveReinforcement[index]?.[4] || "Keep it up!";
    return `
      <div style="margin:1rem 0; padding:1rem 1.25rem; border-left:4px solid var(--accent); background:rgba(0,255,136,0.05); border-radius:0 6px 6px 0;">
        <div style="font-size:0.78rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--accent); margin-bottom:0.35rem;">
          Q${index + 1} · ${rating === 5 ? "⭐⭐ Excellent" : "⭐ Strong"}
        </div>
        <div style="font-size:0.85rem; color:#888; margin-bottom:0.3rem;">${question}</div>
        <div style="font-size:0.93rem; line-height:1.6; color:var(--text);">${msg}</div>
      </div>`;
  }).join("");

  return `
    <div class="result-header">
      <div class="verdict" style="font-size:2rem">🎉 Excellent Work! 🎉</div>
      <div class="verdict-sub" style="font-size:1.1rem; margin-top:0.5rem;">
        ${emoji} ${userName} <span style="color:#888; font-weight:400;">(${generation})</span>
      </div>
      <div class="verdict-sub" style="margin-top:0.75rem; font-size:1rem; font-weight:600; color:#2d6a4f;">
        ${getExcellentHeadline(generation)}
      </div>
      <div class="verdict-sub" style="margin-top:0.75rem; color:#666; font-size:0.95rem; line-height:1.6;">
        ${getExcellentSubtext(generation)}
      </div>
    </div>
    ${reinforcementHTML.length ? `
      <h3 style="margin:2rem 0 0.5rem; font-size:1rem; color:var(--accent); text-transform:uppercase; letter-spacing:0.08em;">
        ✅ Your Strengths
      </h3>
      <div>${reinforcementHTML}</div>` : ""}
    <div style="text-align:center; margin-top:2rem;">
      <button class="btn" onclick="document.location='home.html'">← Back Home</button>
    </div>`;
}

// ── Mixed results path ───────────────────────────────────────────────────────

export function buildMixedResults(userName, generation, lowRatings, highRatings) {
  const emoji = getGenerationEmoji(generation);

  const lowHTML = lowRatings.map(({ index, question, rating }) => {
    const guidance = getGenerationGuidance(index, generation);
    const indicator = rating === 1 ? "🔴 Needs focus" : rating === 2 ? "🟠 Room to grow" : "🟡 Getting there";
    return `
      <div style="margin:1.25rem 0; padding:1rem 1.25rem; border-left:4px solid #ff6b6b; background:#fff5f5; border-radius:0 6px 6px 0;">
        <div style="font-size:0.78rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:#d63031; margin-bottom:0.35rem;">
          Q${index + 1} · ${indicator}
        </div>
        <div style="font-size:0.85rem; color:#888; margin-bottom:0.4rem;">${question}</div>
        <div style="font-size:0.93rem; line-height:1.6; color:#333;">💡 ${guidance}</div>
      </div>`;
  }).join("");

  const highHTML = highRatings.map(({ index, question, rating }) => {
    const msg = positiveReinforcement[index]?.[rating] || positiveReinforcement[index]?.[4] || "Keep it up!";
    return `
      <div style="margin:1rem 0; padding:1rem 1.25rem; border-left:4px solid var(--accent); background:rgba(0,255,136,0.05); border-radius:0 6px 6px 0;">
        <div style="font-size:0.78rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:var(--accent); margin-bottom:0.35rem;">
          Q${index + 1} · ${rating === 5 ? "⭐⭐ Excellent" : "⭐ Strong"}
        </div>
        <div style="font-size:0.85rem; color:#888; margin-bottom:0.3rem;">${question}</div>
        <div style="font-size:0.93rem; line-height:1.6; color:var(--text);">${msg}</div>
      </div>`;
  }).join("");

  return `
    <div class="result-header">
      <div class="verdict" style="font-size:1.8rem">📊 Your Financial Review</div>
      <div class="verdict-sub" style="font-size:1rem; margin:0.75rem 0 0.25rem;">
        ${emoji} ${userName} <span style="color:#888; font-weight:400;">(${generation})</span>
      </div>
      <div class="verdict-sub" style="font-size:0.95rem; color:#555; margin-top:0.5rem;">
        ${getLearningIntro(generation)}
      </div>
    </div>

    <h3 style="margin:2rem 0 0.5rem; font-size:1rem; color:#d63031; text-transform:uppercase; letter-spacing:0.08em;">
      📚 Areas to Build On
    </h3>
    <div>${lowHTML}</div>

    ${highHTML.length ? `
      <h3 style="margin:2rem 0 0.5rem; font-size:1rem; color:var(--accent); text-transform:uppercase; letter-spacing:0.08em;">
        ✅ Your Strengths
      </h3>
      <div>${highHTML}</div>` : ""}

    <div style="margin-top:2rem; padding:1.25rem; background:#e8f5e9; border-radius:6px; text-align:center;">
      <p style="margin:0; color:#2d6a4f; font-weight:bold; font-size:0.95rem; line-height:1.6;">
        ${getMotivationFooter(generation)}
      </p>
    </div>
    <div style="text-align:center; margin-top:2rem;">
      <button class="btn" onclick="document.location='home.html'">← Back Home</button>
    </div>`;
}

// Legacy export for backwards compatibility
export function getGuidance(index) {
  return getGenerationGuidance(index, "default");
}
