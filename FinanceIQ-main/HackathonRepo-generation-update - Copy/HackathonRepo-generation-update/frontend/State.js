// ===================== STATE =====================
let userName = "";
let userGen = "";
let userExp = "";
let ageMode = "default"; // 'genz' | 'millennial' | 'elder'
let currentQ = 0;
let score = 0;
let answered = false;

export function setState(updates) {
  if ("userName"  in updates) userName  = updates.userName;
  if ("userGen"   in updates) userGen   = updates.userGen;
  if ("userExp"   in updates) userExp   = updates.userExp;
  if ("ageMode"   in updates) ageMode   = updates.ageMode;
  if ("currentQ"  in updates) currentQ  = updates.currentQ;
  if ("score"     in updates) score     = updates.score;
  if ("answered"  in updates) answered  = updates.answered;
}

// Getter functions to always get fresh state values
export function getCurrentQ() { return currentQ; }
export function getScore() { return score; }
export function getAnswered() { return answered; }
export function getAgeMode() { return ageMode; }
export function getUserName() { return userName; }
export function getUserGen() { return userGen; }



export function applyAgeMode(mode) {
  document.body.classList.remove("mode-genz", "mode-millennial", "mode-elder");
  document.body.classList.add("mode-" + mode);
}
