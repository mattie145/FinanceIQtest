// ===================== GUIDANCE PARAGRAPHS =====================
// Age-specific guidance for areas scored below 3 (Disagree/Strongly Disagree)
import { questions } from "./questions.js";

export const infoParagraphs = questions.map((q, i) => [
  "📊 **Spending Awareness**: Start tracking your weekly spending using an app or notebook. Awareness is the first step to control.",
  "💰 **Affordability Check**: Before any purchase, pause and ask: 'Do I have this money?' This simple habit prevents debt spiral.",
  "🎯 **Savings Habit**: Set a small regular savings goal—even $5/week builds the discipline. Use a separate account to keep it safe.",
  "⏰ **Delayed Gratification**: Try the '24-hour rule'—wait a day before non-essential purchases. Most impulses fade!",
  "🏦 **Bank Account Basics**: Learn how banks work: deposits, withdrawals, interest. Watch Khan Academy or your bank's tutorial videos.",
  "💳 **Card Knowledge**: Debit = your money now. Credit = borrowing money (pay interest if not cleared monthly). Know the difference!",
  "% **Interest Explained**: Interest is the 'rental fee' for borrowed money. Understand it when borrowing OR saving.",
  "🧠 **Financial Confidence**: Read 'The Simple Path to Wealth' or follow reputable finance creators. Knowledge builds confidence.",
  "💼 **Income Types**: Research different earning paths (jobs, freelancing, investments) to understand life's financial options.",
  "👨‍👩‍👧 **Family Money Talks**: Start conversations about money at home. Open dialogue reduces shame and builds literacy.",
  "🔍 **Price Comparison**: Before major purchases, check 3+ sources. Small savings multiply into big wins annually.",
  "📺 **Ad Awareness**: Ads are designed to manipulate. Recognize them and think critically about what you actually need.",
  "❓ **Intentional Spending**: Use the decision framework: Need? Use? Love? Buy only if 2+ are yes.",
  "📱 **Digital Payment**: Practice secure digital payments in safe environments. Ask your bank for security tips.",
  "🔒 **Online Safety**: Never share passwords, use strong PINs, shop on HTTPS sites. Protect your financial identity.",
  "🎲 **Future Planning**: Write down 3 financial goals (short, medium, long-term). Review and update quarterly.",
  "📖 **Lifelong Learning**: Join free financial literacy programs, podcasts, or communities. Finance evolves—keep learning!",
  "💬 **Money Conversations**: Normalize money talk with peers. Shared learning makes it less intimidating.",
  "🌍 **Financial Importance**: Young people who understand money make better decisions earlier. You're investing in your future!",
  "🎛️ **Financial Control**: Small steps (budgeting an app, tracking spending) build a sense of control. Start small, build big."
][i];
