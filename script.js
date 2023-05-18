const digitToLetters = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
  '0': '0',
  '1': '1'
};

function generateCombinations() {
  var input = document.getElementById('input').value;
  var combinations = [];

  backtrack(combinations, '', input);

  var resultElement = document.getElementById('result');
  resultElement.innerHTML = '';

  for (var i = 0; i < combinations.length; i++) {
    var li = document.createElement('li');
    li.textContent = combinations[i];
    resultElement.appendChild(li);
  }
}

function backtrack(combinations, current, digits) {
  if (digits.length === 0) {
    combinations.push(current);
    return;
  }

  var letters = digitToLetters[digits[0]];

  for (var i = 0; i < letters.length; i++) {
    backtrack(combinations, current + letters[i], digits.slice(1));
  }
}

var generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', generateCombinations);