const showAnswerButton = document.querySelector('[data-js="showAnswerButton"]');
const answerText = document.querySelector('[data-js="answerButtonAndText"]');

showAnswerButton.addEventListener('click', () => {
  answerText.classList.toggle('toggle-answer');
  if (showAnswerButton.textContent == 'Hide Answer') {
    showAnswerButton.textContent = 'Show Answer';
  } else {
    showAnswerButton.textContent = 'Hide Answer';
  }
});
