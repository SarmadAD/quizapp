const showAnswerButton = document.querySelector('[data-js="showAnswerButton"]');
const answerText = document.querySelector('[data-js="answerButtonAndText"]');

const createQuestionCount = document.querySelector(
  '[data-js="createQuestionCount"]'
);
const addAnswerCount = document.querySelector('[data-js="addAnswerCount"]');
const addTagsCount = document.querySelector('[data-js="addTagsCount"]');

const createQuestionTextarea = document.querySelector(
  '[data-js="taCreateQuestion"]'
);
const addAnswerTextarea = document.querySelector('[data-js="taAddAnswer"]');
const addTagsTextarea = document.querySelector('[data-js="taAddTags"]');
const bookmarkImage = document.querySelector('[data-js="bookmarkImage"]');
const maxCharacters = 250;

createQuestionTextarea?.addEventListener('input', () => {
  if (createQuestionTextarea.value.length <= maxCharacters) {
    createQuestionCount.textContent = `Zeichen: ${createQuestionTextarea.value.length} /${maxCharacters}`;
  }
});
addAnswerTextarea?.addEventListener('input', () => {
  addAnswerCount.textContent = `Zeichen: ${addAnswerTextarea.value.length}/${maxCharacters}`;
});

addTagsTextarea?.addEventListener('input', () => {
  addTagsCount.textContent = `Zeichen: ${addTagsTextarea.value.length}/${maxCharacters}`;
});

bookmarkImage?.addEventListener('click', () => {});

showAnswerButton?.addEventListener('click', () => {
  answerText.classList.toggle('toggle-answer');
  if (showAnswerButton.textContent === 'Hide Answer') {
    showAnswerButton.textContent = 'Show Answer';
  } else {
    showAnswerButton.textContent = 'Hide Answer';
  }
});
