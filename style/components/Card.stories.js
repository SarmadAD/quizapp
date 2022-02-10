import questionCard from "./questionCard.html";

export default {
  title: "Components/questionCard",
};

export const Default = () => questionCard;

export const Footer = () => /* html */ `
<div class="footer">
<div class="home">
    <a href="#">
        <img alt="Nav home" src="../../images/outline_home_black_24dp.png" />
    </a>
</div>
<div class="bookmarked">
    <a href="./pages/create.html">
        <img alt="Nav bookmark" src="../../images/bookmark.png" />
    </a>
</div>
<div class="create">

    <a href="#">
        <img alt="Nav create" src="../../images/outline_article_black_24dp.png" />
    </a>
</div>
<div class="profile">
    <a href="#">
        <img alt="Nav profile" src="../../images/outline_account_circle_black_24dp.png" />
    </a>
</div>
</div>
`;
