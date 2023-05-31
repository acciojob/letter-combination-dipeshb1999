const digitToLetters = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
  0: "0",
  1: "1",
};

function generateCombinations(event) {
  event.preventDefault();

  const digits = document.getElementById("digits").value;

  const combinations = letterCombinations(digits);
  document.getElementById("result").textContent =
    "Combinations: " + combinations.join(", ");
}

function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const combinations = [""];

  for (let i = 0; i < digits.length; i++) {
    const letters = digitToLetters[digits[i]];

    while (combinations[0].length === i) {
      const currentCombination = combinations.shift();

      for (let j = 0; j < letters.length; j++) {
        combinations.push(currentCombination + letters[j]);
      }
    }
  }

  return combinations;
}
