// ===================== GENERATIONS DATA =====================
export const generationData = [
  { name: "Silent Generation", startYear: 1928, endYear: 1945, mode: "elder" },
  { name: "Baby Boomers", startYear: 1946, endYear: 1964, mode: "elder" },
  { name: "Generation X", startYear: 1965, endYear: 1980, mode: "millennial" },
  { name: "Millennials", startYear: 1981, endYear: 1996, mode: "millennial" },
  { name: "Generation Z", startYear: 1997, endYear: 2012, mode: "genz" },
  { name: "Generation Alpha", startYear: 2013, endYear: 2025, mode: "genz" },
  { name: "Generation Beta", startYear: 2026, endYear: 2050, mode: "genz" },
];

/**
 * Get generation from birth year
 * @param {number} birthYear - Birth year
 * @returns {object} Generation object with name and mode
 */
export function getGenerationFromYear(birthYear) {
  const generation = generationData.find(
    (g) => birthYear >= g.startYear && birthYear <= g.endYear
  );
  return generation || { name: "Unknown", mode: "millennial" };
}

/**
 * Get mode (genz | millennial | elder) from age
 * @param {number} age - Age in years
 * @returns {string} Mode identifier
 */
export function getAgeMode(age) {
  const birthYear = new Date().getFullYear() - age;
  const generation = getGenerationFromYear(birthYear);
  return generation.mode;
}

/**
 * Get generation name from age
 * @param {number} age - Age in years
 * @returns {string} Generation name
 */
export function getGenerationName(age) {
  const birthYear = new Date().getFullYear() - age;
  const generation = getGenerationFromYear(birthYear);
  return generation.name;
}
