// ===================== STATE =====================
import { getAgeMode, getGenerationName } from "./generations.js";

export let userName = "";
export let userAge = 0;
export let userGeneration = "";
export let userExp = "";
export let ageMode = "default"; // 'genz' | 'millennial' | 'elder'
export let currentQ = 0;
export let score = 0;
export let answered = false;

export function setState(updates) {
  if ("userName"  in updates) userName  = updates.userName;
  if ("userAge"   in updates) userAge   = updates.userAge;
  if ("userGeneration" in updates) userGeneration = updates.userGeneration;
  if ("userExp"   in updates) userExp   = updates.userExp;
  if ("ageMode"   in updates) ageMode   = updates.ageMode;
  if ("currentQ"  in updates) currentQ  = updates.currentQ;
  if ("score"     in updates) score     = updates.score;
  if ("answered"  in updates) answered  = updates.answered;
}

// ===================== AGE LOGIC =====================
export function applyAgeMode(mode) {
  document.body.classList.remove("mode-genz", "mode-millennial", "mode-elder");
  document.body.classList.add("mode-" + mode);
}