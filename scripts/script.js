const questionscardList = document.querySelectorAll('[data-js="questionscard"]');
const bookmarkContainersList = document.querySelectorAll('[data-js="questionsCard__bookmark"]');
const footerItemList = document.querySelectorAll('[data-js="footerItem"]');

const questionPage = document.querySelector('[data-js="questionPage"]');
const bookmarkPage = document.querySelector('[data-js="bookmarkPage"]');
const createPage = document.querySelector('[data-js="createPage"]');
const profilePage = document.querySelector('[data-js="profilePage"]');

const footerItemHome = document.querySelector('[data-js="footerItemHome"]');
const footerItemBookMarked = document.querySelector('[data-js="footerItemBookMarked"]');
const footerItemCreate = document.querySelector('[data-js="footerItemCreate"]');
const footerItemProfile = document.querySelector('[data-js="footerItemProfile"]');

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

footerItemHome?.addEventListener('click', () => {
  questionPage.classList.remove('toogleSite');
  hideBookmarkPage();
  hideCreatePage();
  hideProfilePage();
});

footerItemBookMarked?.addEventListener('click', () => {
  bookmarkPage.classList.remove('toogleSite');
  hideQuestionPage();
  hideCreatePage();
  hideProfilePage();
});

footerItemCreate?.addEventListener('click', () => {
  createPage.classList.remove('toogleSite');
  hideQuestionPage();
  hideBookmarkPage();
  hideProfilePage();
});

footerItemProfile?.addEventListener('click', () => {
  profilePage.classList.remove('toogleSite');
  hideQuestionPage();
  hideBookmarkPage();
  hideCreatePage();
});

function hideBookmarkPage() {
  bookmarkPage.classList.add('toogleSite');
}
function hideQuestionPage() {
  questionPage.classList.add('toogleSite');
}
function hideCreatePage() {
  createPage.classList.add('toogleSite');
}
function hideProfilePage() {
  profilePage.classList.add('toogleSite');
}
