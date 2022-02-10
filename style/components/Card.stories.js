import DefaultHtml from "./Card.default.html";

export default {
  title: "Components/Card",
};

export const Default = () => DefaultHtml;

export const Error = () => /* html */ `
  <article class="Card Card--error">
    <h4 class="Card__title">Card Title Bla</h4>
    <p class="Card__content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo
      eum ea totam! Iure obcaecati odit soluta sint quidem similique, ipsam
      debitis nihil sit iusto, cum aliquid neque placeat quibusdam.
    </p>
  </article>
`;
