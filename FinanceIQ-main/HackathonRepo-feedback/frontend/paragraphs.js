// ===================== GUIDANCE PARAGRAPHS =====================
// Generation-aware guidance for areas scored below 3 (Disagree/Strongly Disagree)
// Generations: "Silent Generation" | "Baby Boomers" | "Generation X" | "Millennials" | "Generation Z" | "Generation Alpha" | "Generation Beta"

const guidanceByGeneration = {
  // ── Q1: I keep track of how much money I spend each week ─────────────────
  0: {
    "Silent Generation":  "At your stage, tracking spending is about protecting the wealth you've built. Consider a simple paper ledger or asking a trusted family member to help set up a basic spreadsheet.",
    "Baby Boomers":       "Retirement is on the horizon — knowing where every dollar goes now protects your nest egg. Try your bank's built-in spending tracker or a simple monthly review of your statements.",
    "Generation X":       "You're juggling kids, mortgages, and maybe aging parents. A budgeting app like YNAB or Mint can show exactly where the money is leaking before it becomes a crisis.",
    "Millennials":        "Student loans + rent + lifestyle costs = budget chaos. Try the 50/30/20 rule and a free app like Copilot or Monarch Money to finally see the full picture.",
    "Generation Z":       "You grew up on apps — use them! Fintech tools like Step, Greenlight, or even a simple Google Sheet can turn spending tracking into a daily habit that'll set you apart.",
    "Generation Alpha":   "Tracking money is like leveling up in a game — you need to see your stats! Ask a parent to help you log what you spend your allowance on each week.",
    "Generation Beta":    "Start a money journal or use a simple chart to write down what you spend. Even tracking just your snacks and games teaches you a superpower for life!",
    "default":            "Start tracking your weekly spending using an app or notebook. Awareness is the first step to control.",
  },

  // ── Q2: Before I buy something, I check whether I have enough money ───────
  1: {
    "Silent Generation":  "You've lived through tough times — you know the pain of overextending. Reinforce this habit by keeping a small running balance in your wallet or a notecard in your pocket.",
    "Baby Boomers":       "Credit card debt in retirement is a serious trap. Before any purchase, cross-check with your fixed monthly income to ensure you're spending from surplus, not savings.",
    "Generation X":       "With so many subscription renewals and irregular expenses, set up low-balance alerts on your accounts. A $0.50 notification can prevent a $35 overdraft fee.",
    "Millennials":        "Between digital wallets and tap-to-pay, it's easy to lose track. Enable real-time spend notifications on your bank app so you always know your balance before you tap.",
    "Generation Z":       "Before you buy anything — even in-app — pause and check your balance. Set your phone to show your bank balance on your lock screen as a constant reality check.",
    "Generation Alpha":   "Before spending your allowance, count what you have first! A little piggy bank or envelope system makes it easy to see exactly what you can afford.",
    "Generation Beta":    "Always check your money jar before buying anything. Ask yourself: 'Do I have enough for this?' It's the best habit you can build early!",
    "default":            "Before any purchase, pause and ask: 'Do I have this money?' This simple habit prevents a debt spiral.",
  },

  // ── Q3: I set aside money regularly so I can buy something I want later ──
  2: {
    "Silent Generation":  "Even setting aside $20/month into a separate savings pot for desired purchases prevents dipping into your core savings. Your generation's patience is the perfect foundation for this habit.",
    "Baby Boomers":       "Sinking funds work brilliantly at your stage — open a separate savings account for planned large expenses (holidays, grandkids' gifts) so they never surprise your budget.",
    "Generation X":       "Automate it. Set up a standing order the day after your paycheck lands. Even $50/month to a 'big purchase' fund means you never derail your retirement contributions for a want.",
    "Millennials":        "Try the 'pay yourself first' method — set up an auto-transfer to a high-yield savings account (like Marcus or Ally) for your next goal the moment you're paid.",
    "Generation Z":       "Use sub-accounts or 'Spaces' features in apps like Monzo or Revolut to create named savings pots for each goal — sneakers, a trip, a laptop. Watching it grow is genuinely satisfying.",
    "Generation Alpha":   "Use a savings jar for something you really want — maybe a toy or a game. Every time you get money, put a bit in. You'll be amazed how fast it grows!",
    "Generation Beta":    "Pick something you really want and make a savings goal chart. Colour in a box every time you save toward it — it's like a real-life progress bar!",
    "default":            "Set a small regular savings goal — even $5/week builds the discipline. Use a separate account to keep it safe.",
  },

  // ── Q4: I find it easy to resist spending now to save for the future ──────
  3: {
    "Silent Generation":  "Delayed gratification built your generation's wealth. If the habit is slipping, try writing your future goal down and putting it next to your wallet as a physical reminder.",
    "Baby Boomers":       "Near retirement, impulse spending can undo decades of saving. Introduce a personal 'cooling off' rule — for any non-essential purchase over $50, wait 48 hours before acting.",
    "Generation X":       "Lifestyle inflation is the silent budget killer for Gen X. Try the '10-day rule': if you still want it in 10 days, it might be worth it. Most impulses don't survive the wait.",
    "Millennials":        "FOMO and social media make this genuinely hard — algorithms are designed to make you spend. Unsubscribe from retail emails and use browser extensions like Honey to pause before checkout.",
    "Generation Z":       "Try a 'no-buy weekend' challenge once a month. Document it — saving is becoming a genuine Gen Z flex. Your future self will be glad you did.",
    "Generation Alpha":   "Next time you really want something, try waiting a whole week before asking for it. A lot of the time, you forget about it — and that means you saved money!",
    "Generation Beta":    "When you want something right now, take a deep breath and wait a whole day. If you still want it tomorrow, maybe it's worth saving up for!",
    "default":            "Try the '24-hour rule' — wait a day before non-essential purchases. Most impulses fade!",
  },

  // ── Q5: I feel confident I understand what a bank account is ─────────────
  4: {
    "Silent Generation":  "If online banking still feels uncertain, your local branch is always there. Ask them to walk you through their mobile app — many offer free in-branch tutorials for older customers.",
    "Baby Boomers":       "Understanding modern banking features like high-yield savings and sweep accounts can meaningfully boost your retirement income. Your bank's financial advisor can walk you through these for free.",
    "Generation X":       "Knowing your account types well can save hundreds annually in fees. Compare checking account options and look into whether a credit union might serve you better than a big bank.",
    "Millennials":        "Consider upgrading to a high-yield savings account (HYSA). Online banks like Ally or Marcus offer 4–5% APY — your money working for you while you sleep.",
    "Generation Z":       "Watch short explainers from creators like Graham Stephan or Andrei Jikh. Understanding checking, savings, and HYSA accounts is foundational — it takes 20 minutes to learn for life.",
    "Generation Alpha":   "A bank account is like a safe place where your money is looked after for you. Ask a parent to show you how their bank account works — it's really interesting!",
    "Generation Beta":    "A bank is like a special safe that holds your money and even pays you a little extra for keeping it there! Ask a grown-up to show you how it works.",
    "default":            "Learn how banks work: deposits, withdrawals, interest. Khan Academy has great free tutorials to get you started.",
  },

  // ── Q6: I understand the difference between debit and credit ─────────────
  5: {
    "Silent Generation":  "Credit card debt compounds quickly. If in doubt, stick to debit for daily spending and keep credit only for emergencies or purchases with consumer protections like travel insurance.",
    "Baby Boomers":       "Credit cards used wisely offer real retirement benefits — cashback, travel points, fraud protection. The key is paying the full balance monthly. Set up autopay to make it automatic.",
    "Generation X":       "Make sure your teenagers understand this distinction too. Gen X parents who teach the debit vs. credit difference early can spare their kids from costly credit card debt in young adulthood.",
    "Millennials":        "If you don't fully grasp how credit card interest works, you may be losing hundreds annually. Paying just the minimum on a $1,000 balance can turn it into $1,400 or more over time.",
    "Generation Z":       "Quick rule: debit card = your actual money, credit card = a loan you must repay. If you get a credit card, treat it exactly like a debit card — only spend what you already have.",
    "Generation Alpha":   "A debit card uses money you already have — like spending from your piggy bank. A credit card is borrowing money you must pay back later. Knowing this difference is really important!",
    "Generation Beta":    "Imagine debit as your own toy coins, and credit as borrowing coins from a friend you have to give back, plus a tiny bit extra. Understanding this now is super smart!",
    "default":            "Debit = your money now. Credit = borrowed money (with interest if not cleared monthly). Know the difference!",
  },

  // ── Q7: I know what interest means when borrowing or saving ──────────────
  6: {
    "Silent Generation":  "Interest on savings is your quiet reward for patience. Make sure your savings are in accounts earning competitive rates — many savers leave money in accounts earning near-zero interest.",
    "Baby Boomers":       "With interest rates higher than they've been in decades, your savings should be working hard. Compare rates on CDs and high-yield accounts — small differences compound into thousands over years.",
    "Generation X":       "If you're carrying variable-rate debt, rising interest rates are actively costing you more. Prioritise paying down high-interest debt using the avalanche method before it compounds further.",
    "Millennials":        "Interest is both your biggest enemy (on debt) and your best friend (on investments). Mastering compound interest is possibly the most valuable financial concept available to you right now.",
    "Generation Z":       "Search 'compound interest calculator' and plug in $100/month from age 22 vs age 32. That 10-year head start is worth hundreds of thousands at retirement. This number will motivate you.",
    "Generation Alpha":   "Interest is like a reward for saving — if you put money in the bank, they pay you a little extra over time! It's like your money making tiny baby money while it waits.",
    "Generation Beta":    "When you save money at a bank, they pay you a tiny bonus called interest — your money grows while you sleep! It's like magic math that rewards patient savers.",
    "default":            "Interest is the 'rental fee' for borrowed money. Understand how it works when borrowing OR saving.",
  },

  // ── Q8: I feel I know enough to make good financial decisions ─────────────
  7: {
    "Silent Generation":  "Your lived experience is invaluable — but financial scams increasingly target older adults. Stay sharp by reviewing the AARP Fraud Watch Network and never making financial decisions under pressure.",
    "Baby Boomers":       "Consider a one-time session with a fee-only financial planner to review your retirement readiness. NAPFA lists certified fiduciaries who earn no commissions on your choices.",
    "Generation X":       "The 'sandwich generation' financial stress is real. Free CFP-offered planning sessions or the SmartMoney resource hub can provide an outside perspective that reveals blind spots in your full financial picture.",
    "Millennials":        "Try 'I Will Teach You to Be Rich' by Ramit Sethi or 'The Psychology of Money' by Morgan Housel. Both are written for your generation and genuinely shift how you think about financial decisions.",
    "Generation Z":       "Financial social media can mislead — follow creators with CFP credentials or bookmark r/personalfinance. Building knowledge from credible sources in your 20s changes your financial trajectory entirely.",
    "Generation Alpha":   "Everyone is still learning about money — even grown-ups! Try watching money videos on YouTube with a parent, or play money-themed board games. Every bit you learn is an investment in your future.",
    "Generation Beta":    "It's totally okay not to know everything about money yet — that's what growing up is for! Ask questions, play money games, and every answer you find makes you a bit richer in knowledge.",
    "default":            "Read reputable finance books or follow trusted finance creators. Knowledge builds confidence.",
  },

  // ── Q9: I understand people earn money in different ways ──────────────────
  8: {
    "Silent Generation":  "You've likely experienced multiple income streams across a lifetime. If you have rental income, dividends, or a pension — documenting these clearly now ensures smooth financial management for you and your family.",
    "Baby Boomers":       "Diversifying income before full retirement is smart. Consider passive income sources — dividend stocks, REITs, or a small rental — so you're not solely dependent on Social Security or a single pension.",
    "Generation X":       "With job markets increasingly unstable, a side hustle or passive income stream is excellent insurance. Even $500/month from freelancing or an online business significantly changes your financial resilience.",
    "Millennials":        "Explore the full income spectrum: salary, freelancing, dividends, rental income, and digital products. Multiple income streams are the modern middle-class safety net — more accessible now than ever.",
    "Generation Z":       "You're entering a world where the 'one job for life' model is gone. Explore creator economies, freelancing platforms, and how investing creates passive income. Your generation will likely have 5+ income streams.",
    "Generation Alpha":   "People earn money in lots of ways — some get paid for jobs, some for making things, and some earn while they sleep through investing! Learning about this now gives you so many future options.",
    "Generation Beta":    "Did you know some people earn money just by having money saved in certain places? And others earn it making art or videos! There are so many cool ways to earn — you'll discover your own way.",
    "default":            "Research different earning paths (jobs, freelancing, investments) to understand all of life's financial options.",
  },

  // ── Q10: I talk with family about how money is earned and managed ─────────
  9: {
    "Silent Generation":  "Your generation often kept finances private. But sharing your values around money with grandchildren — and the lessons from tough times — is a genuine and lasting legacy worth giving.",
    "Baby Boomers":       "Estate planning conversations are critical and often avoided. A family meeting to discuss wills, beneficiaries, and financial wishes prevents disputes and ensures your wishes are honoured.",
    "Generation X":       "You're the bridge between your parents' financial world and your kids'. Casual money conversations at home — about budgeting, saving, and goals — break intergenerational financial silence and set your children up well.",
    "Millennials":        "Money shame runs deep in your generation. But normalising money talk with family — income, debt, goals — breaks cycles of financial secrecy that often perpetuate poor decisions across generations.",
    "Generation Z":       "Your generation is more open to talking about money than any before. Use that openness! Ask parents or grandparents about their financial journeys — the lessons are often invaluable and completely free.",
    "Generation Alpha":   "It's great to ask your parents 'how do we get money?' or 'how do you decide what to buy?' These conversations help you learn things school often doesn't teach!",
    "Generation Beta":    "Try asking a grown-up about money today — like 'how do you earn money?' Grown-ups love curious questions, and you'll learn things that will help you your whole life!",
    "default":            "Start conversations about money at home. Open dialogue reduces shame and builds lasting financial literacy.",
  },

  // ── Q11: When I buy something, I compare prices ───────────────────────────
  10: {
    "Silent Generation":  "Your instinct for value was forged through necessity. Apply it digitally too — apps like Google Shopping or Camelcamelcamel (for Amazon) ensure you never pay more than you need to.",
    "Baby Boomers":       "For large fixed expenses — insurance, utilities, phone plans — comparing annually can save $500–$2,000/year. Set a calendar reminder at each renewal date to shop around before auto-renewing.",
    "Generation X":       "For recurring household costs like broadband and insurance, comparison sites can reveal major savings in minutes. Prices often rise for loyal customers — 'loyalty penalties' are very real.",
    "Millennials":        "Browser extensions like Honey or Capital One Shopping automatically find coupons and compare prices while you shop. Set them up once and save passively on every purchase.",
    "Generation Z":       "Before any purchase over $20, spend 3 minutes on Google Shopping or Camelcamelcamel. You'll often find it 20–40% cheaper — and that gap compounds into thousands over a lifetime.",
    "Generation Alpha":   "Before buying something, check if it costs less somewhere else — it's like a treasure hunt where the prize is saving money! Ask a parent to help you compare prices online.",
    "Generation Beta":    "Shopping smarter means looking at a few different places before you buy. Finding the same thing cheaper is like finding extra coins — you can use them for something else!",
    "default":            "Before major purchases, check multiple sources. Small savings multiply into big wins over time.",
  },

  // ── Q12: Advertisements influence what I decide to buy ───────────────────
  11: {
    "Silent Generation":  "Modern digital advertising is highly sophisticated and targeted. If certain ads seem to follow you online, that's 'retargeting' — a technique designed to wear down resistance through repetition.",
    "Baby Boomers":       "Retirement advertising often targets this group with high-pressure financial products. Be especially critical of ads for annuities, reverse mortgages, or investment products — always verify independently first.",
    "Generation X":       "Middle-age advertising targets fears around health, security, and legacy. Recognise that ads are designed to amplify anxiety, then sell a solution. Naming the tactic reduces its power over you.",
    "Millennials":        "Influencer marketing is designed to feel authentic but is often paid promotion. Before a social-media-driven purchase, ask: 'Am I buying this product, or buying the lifestyle I was sold?'",
    "Generation Z":       "You grew up in the most ad-saturated environment in history — including disguised ads. Learn to spot undisclosed sponsorships, affiliate links, and algorithm-optimised content designed to trigger impulse buys.",
    "Generation Alpha":   "Some videos and games have ads that try to make you really want things. It's good to notice when this is happening! Knowing 'this is an ad' gives you superpower thinking.",
    "Generation Beta":    "Ads are like someone trying to convince you their toy is the best ever! It's okay to think it looks cool — but remember, the ad wants you to want it. You get to decide if you actually need it.",
    "default":            "Ads are designed to influence behaviour. Recognise them and think critically about what you actually need.",
  },

  // ── Q13: I think carefully about whether I need something before buying ───
  12: {
    "Silent Generation":  "This is one of your generation's defining strengths — 'use it up, wear it out, make it do, or do without.' Applying that same discernment to modern spending patterns preserves wealth beautifully.",
    "Baby Boomers":       "As you simplify in retirement, the need vs. want question becomes more important than ever. Before buying, ask: 'Does this enhance my retirement goals, or add clutter to them?'",
    "Generation X":       "The 'keeping up with the Joneses' pressure peaks at your life stage. A simple question — 'Am I buying this for me, or for how it looks to others?' — can prevent a lot of regretful spending.",
    "Millennials":        "Try this: 'Will I still be glad I bought this in six months?' If you probably won't even remember buying it, it's a want masquerading as a need.",
    "Generation Z":       "Intentional living is trending among Gen Z for a reason — owning less but higher-quality costs less over time. Ask: 'Would I still want this if no one could see me with it?'",
    "Generation Alpha":   "Before you ask for something, think: Do I really need this, or do I just want it right now? Asking that question is already a sign of someone who'll be great with money!",
    "Generation Beta":    "When you see something you want right away, try asking yourself: 'Will I still want this tomorrow?' Sometimes yes, sometimes we forget completely — and either answer teaches you something useful.",
    "default":            "Use a decision framework: Need it? Use it? Love it? Buy only if two or more are yes.",
  },

  // ── Q14: I feel confident making digital/electronic payments ─────────────
  13: {
    "Silent Generation":  "Digital payments are now unavoidable. Ask your bank for a free tutorial session — many offer telephone or in-branch support specifically designed to walk older customers through mobile banking safely.",
    "Baby Boomers":       "Tap-to-pay and mobile wallets are secure and convenient. Start with small transactions to build confidence. Your bank's app usually has a dedicated 'help' section with step-by-step payment guides.",
    "Generation X":       "If you're comfortable with digital payments, focus on security hygiene: use unique strong passwords, enable two-factor authentication, and regularly review transactions for anything unfamiliar.",
    "Millennials":        "Explore the full range — Apple Pay, Google Pay, PayPal, and even crypto payment rails where relevant. Understanding which is most secure in which context gives you an important edge.",
    "Generation Z":       "You likely use digital payments instinctively, but understand what happens behind the scenes — tokenisation, 3D Secure, and how chargebacks work if something goes wrong.",
    "Generation Alpha":   "Digital payments use invisible technology to move money safely — it's pretty amazing! Ask a parent to show you how they pay on a phone, and what they do to keep it safe.",
    "Generation Beta":    "Paying with a phone or card sends digital coins through the air — like magic! Ask a grown-up to show you how it works, and how they make sure it's always safe.",
    "default":            "Practice secure digital payments in safe environments. Ask your bank for guidance on best practices.",
  },

  // ── Q15: I know how to keep personal information safe online ─────────────
  14: {
    "Silent Generation":  "Online financial scams targeting seniors cost billions annually. Core rule: your bank will never call asking for your PIN. Always verify calls by phoning the official number on your card.",
    "Baby Boomers":       "Enable two-factor authentication on all financial accounts now. Adding your phone as a second verification step dramatically reduces the risk of account takeover fraud.",
    "Generation X":       "Run a free dark web check through HaveIBeenPwned.com to see if your passwords have been compromised. Update any reused passwords immediately, starting with your financial accounts.",
    "Millennials":        "Use a password manager (Bitwarden is free and excellent) and enable 2FA on every financial account. Your credentials are almost certainly in a data breach somewhere — assume it and act.",
    "Generation Z":       "Audit your app permissions monthly, use different email addresses for financial vs. social accounts, and never enter card details on a site without HTTPS in the address bar.",
    "Generation Alpha":   "Never share your name, address, or passwords online without a parent knowing first. Even if someone seems friendly online, your safety always comes first — always tell a trusted adult.",
    "Generation Beta":    "Keep your passwords secret like they're the world's biggest treasure. Never tell anyone, and always ask a grown-up before typing your details anywhere online.",
    "default":            "Never share passwords, use strong PINs, shop only on HTTPS sites. Protect your financial identity.",
  },

  // ── Q16: I think about how I will manage my money in the future ───────────
  15: {
    "Silent Generation":  "Future planning at your stage centres on estate planning and legacy. Ensure you have an up-to-date will, power of attorney in place, and beneficiaries named on all accounts.",
    "Baby Boomers":       "Create or review your retirement income plan: list every source (pension, Social Security, investments, savings), project your expenses, and calculate your monthly surplus or gap. Knowing this number is everything.",
    "Generation X":       "You're likely 10–20 years from retirement. Run a retirement readiness calculation now — Vanguard's Retirement Nest Egg Calculator gives a realistic picture while there's still time to adjust.",
    "Millennials":        "Your biggest financial lever is time. Even modest increases to pension or 401k contributions now compound dramatically by retirement. Aim to raise your savings rate by 1% each year.",
    "Generation Z":       "Starting to invest in your 20s is the single most powerful financial move available to you. Even $50/month in a low-cost index fund from age 22 grows to over $200k by retirement — look it up.",
    "Generation Alpha":   "Thinking about future money is something clever people do! Try imagining what you'd like to buy or do when you're a grown-up. What would you need to save for that dream?",
    "Generation Beta":    "It's never too early to dream about what you want when you grow up! If you want something big one day, thinking ahead and saving a little now is exactly how you get there.",
    "default":            "Write down 3 financial goals (short, medium, long-term). Review and update them quarterly.",
  },

  // ── Q17: I would like to learn more about personal finances ───────────────
  16: {
    "Silent Generation":  "Your local library or community centre may offer free financial literacy workshops tailored for older adults. The AARP also offers free financial education and one-on-one counselling.",
    "Baby Boomers":       "The Bogleheads community (Bogleheads.org) is an outstanding free resource for evidence-based, low-cost investing philosophy — especially relevant as you finalise your retirement asset allocation.",
    "Generation X":       "Podcasts like 'The Money Guy Show' or 'ChooseFI' are excellent for time-pressed Gen X learners. Twenty minutes on a commute can genuinely transform your financial knowledge over a year.",
    "Millennials":        "'I Will Teach You to Be Rich' (Ramit Sethi) and 'The Psychology of Money' (Morgan Housel) are must-reads for your generation. Both are fast, practical, and built for your financial stage.",
    "Generation Z":       "Check out r/personalfinance's 'Prime Directive' as a financial roadmap, and pair it with 'The Simple Path to Wealth' to build a strong foundation quickly.",
    "Generation Alpha":   "There are amazing books and videos made just for kids about money! Ask a parent about 'Biz Kid$' or look for age-appropriate money books — learning about money can be genuinely fun.",
    "Generation Beta":    "There are fun games and books about money made just for kids your age! Ask a grown-up to find one with you — learning about money can feel just like playing a game.",
    "default":            "Join free financial literacy programs, podcasts, or communities. Finance evolves — keep learning!",
  },

  // ── Q18: I enjoy discussing money matters with friends or family ──────────
  17: {
    "Silent Generation":  "Money was often taboo for your generation. But family money conversations — especially around estate planning — prevent significant conflict later. Starting is the hardest part; the relief is worth it.",
    "Baby Boomers":       "Consider organising a family money meeting to discuss financial plans, care expectations, and inheritance wishes openly. It's one of the most loving things you can do — removing uncertainty is a real gift.",
    "Generation X":       "Modelling open money conversations at home directly improves your children's financial futures. Kids who hear parents talk about budgeting and savings grow up with markedly better financial instincts.",
    "Millennials":        "Money shame runs deep in your generation. Finding even one friend or partner to share financial goals with creates real accountability and makes the journey much less isolating.",
    "Generation Z":       "Your generation is leading a shift toward financial transparency among peers. Sharing savings goals, talking about salary, or joining investing groups normalises good behaviour and multiplies motivation.",
    "Generation Alpha":   "Chatting with your family about money is actually really cool — you can ask how your family earns and saves. The more you talk about it, the more comfortable these topics become!",
    "Generation Beta":    "Talking about money with people you trust helps everyone learn. You could even make it a game: ask 'what would you save up for if you had $10?' and see what everyone says!",
    "default":            "Normalise money conversations with those around you. Shared learning makes financial topics far less intimidating.",
  },

  // ── Q19: I believe it is important for young people to understand money ───
  18: {
    "Silent Generation":  "Your conviction here is a genuine asset. Sharing even one financial life lesson with a younger family member could change their trajectory. Your generation's wisdom around money is irreplaceable.",
    "Baby Boomers":       "You have the opportunity to be a financial mentor for grandchildren or younger family members. One honest conversation about how you built your savings could change the direction of their life.",
    "Generation X":       "Financial literacy is still absent from most school curricula. As a parent, you're the primary financial educator for your children — a huge responsibility and an enormous opportunity to shape their lives.",
    "Millennials":        "Your generation knows first-hand how unprepared young people can be financially. Channel that into action — support financial literacy in your community, or simply have the honest money conversations you rarely received.",
    "Generation Z":       "You already believe this — so put it into action. Share helpful financial content with peers, start money conversations, or consider mentoring younger students. The impact is real and lasting.",
    "Generation Alpha":   "You're absolutely right that learning about money young is a real head start! The fact that you think this shows you're already thinking like someone who'll be brilliant with money.",
    "Generation Beta":    "You already know something really important: learning about money early is one of the best advantages you can have. Keep asking questions and sharing what you learn with friends!",
    "default":            "Young people who understand money make better decisions earlier. You're investing in your own future!",
  },

  // ── Q20: I feel in control of my financial decisions ─────────────────────
  19: {
    "Silent Generation":  "If financial decisions feel less certain, consider discussing a limited power of attorney for finances with a trusted person — not to remove control, but to create a reliable safety net.",
    "Baby Boomers":       "Build a simple one-page financial summary: income, expenses, savings, investments, and debts. Having this visible reminds you of your full picture and reinforces a genuine sense of agency.",
    "Generation X":       "Control starts with clarity. If finances feel scattered across multiple accounts and loans, track everything in a single dashboard like Personal Capital or Copilot to get a complete view.",
    "Millennials":        "Financial control often starts with one keystone habit — budgeting. Try the 50/30/20 rule for just one month. Seeing where your money goes, then choosing where it goes next, transforms how control feels.",
    "Generation Z":       "Control is built through small consistent habits, not big dramatic changes. Pick one financial habit this week: set a savings auto-transfer, check your balance daily, or track every purchase for seven days. Build from there.",
    "Generation Alpha":   "Feeling in control of your money starts with small steps — like deciding where your allowance goes. Choosing to save half of it is a powerful decision you made yourself. That's real control!",
    "Generation Beta":    "You're the boss of your own money decisions, even if they're small right now! Deciding to save a coin instead of spending it shows you're in charge — and that's something to be proud of.",
    "default":            "Small steps (budgeting in an app, tracking spending) build a sense of control. Start small, build big.",
  },
};

/**
 * Get generation-aware guidance for a question
 * @param {number} index - Question index (0-19)
 * @param {string} generation - Generation name from generations.js
 * @returns {string} Guidance text tailored to the user's generation
 */
export function getGenerationGuidance(index, generation) {
  const questionGuidance = guidanceByGeneration[index];
  if (!questionGuidance) return "Continue learning about this financial topic.";
  return questionGuidance[generation] || questionGuidance["default"] || "Continue learning about this financial topic.";
}
