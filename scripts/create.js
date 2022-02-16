const createQuestionCount = document.querySelector('[data-js="createQuestionCount"]');
const addAnswerCount = document.querySelector('[data-js="addAnswerCount"]');
const addTagsCount = document.querySelector('[data-js="addTagsCount"]');

const createQuestionTextarea = document.querySelector('[data-js="taCreateQuestion"]');
const addAnswerTextarea = document.querySelector('[data-js="taAddAnswer"]');
const addTagsTextarea = document.querySelector('[data-js="taAddTags"]');

createQuestionTextarea.addEventListener('input',() => {
    createQuestionCount.textContent = `Zeichen: ${createQuestionTextarea.value.length}`;
  });
  
  addAnswerTextarea.addEventListener('input',() => {
    addAnswerCount.textContent = `Zeichen: ${addAnswerTextarea.value.length}`;
  });
  
  addTagsTextarea.addEventListener('input',() => {
    addTagsCount.textContent = `Zeichen: ${addTagsTextarea.value.length}`;
  });