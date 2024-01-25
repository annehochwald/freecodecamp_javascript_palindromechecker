const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkForPalindrome = input => {
  const originalInput= input;

  if (input === '') {
    alert('Please input a value');
    return;
  }

  resultDiv.innerHTML = '';

  const lower = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `<strong>${originalInput}</strong> ${
    lower === lower.split('').reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const paragraph = document.createElement('p');
  paragraph.className = 'user-input';
  paragraph.innerHTML = resultMsg;
  resultDiv.appendChild(paragraph);

  resultDiv.classList.remove('hidden');
};

checkButton.addEventListener("click", () => {
  checkForPalindrome(userInput.value);
  userInput.value = '';
});

userInput.addEventListener("keydown", e => {
  if (e.key === 'Enter') {
    checkForPalindrome(userInput.value);
    userInput.value = '';
  }
});