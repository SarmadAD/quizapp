const questionscardList = document.querySelectorAll('[data-js="questionscard"]');
const bookmarkContainersList = document.querySelectorAll('[data-js="questionsCard__bookmark"]');

const createQuestionCount = document.querySelector('[data-js="createQuestionCount"]');
const addAnswerCount = document.querySelector('[data-js="addAnswerCount"]');
const addTagsCount = document.querySelector('[data-js="addTagsCount"]');

const createQuestionTextarea = document.querySelector('[data-js="taCreateQuestion"]');
const addAnswerTextarea = document.querySelector('[data-js="taAddAnswer"]');
const addTagsTextarea = document.querySelector('[data-js="taAddTags"]');

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

bookmarkContainersList.forEach(bookmark => {
  const bookmarkImage = bookmark.querySelector('[data-js="bookmarkImage"]');
  bookmarkImage?.addEventListener('click', () => {
    bookmarkImage.classList.toggle('blackBookMark');
  });
});

questionscardList.forEach(questioncard => {
  const showAnswerButton = questioncard.querySelector('[data-js="showAnswerButton"]');
  const answerText = questioncard.querySelector('[data-js="answerButtonAndText"]');

  showAnswerButton?.addEventListener('click', () => {
    answerText.classList.toggle('toggle-answer');
    if (showAnswerButton.textContent === 'Hide Answer') {
      showAnswerButton.textContent = 'Show Answer';
    } else {
      showAnswerButton.textContent = 'Hide Answer';
    }
  });
});
