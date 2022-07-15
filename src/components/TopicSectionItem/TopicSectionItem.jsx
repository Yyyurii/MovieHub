import "./topicSectionItem.scss";

import duration from "../../assets/images/icon/duration.svg";
import views from "../../assets/images/icon/views.svg";
import imdb from "../../assets/images/icon/imdb.svg";
import imdb2 from "../../assets/images/icon/imdb2.svg";

const TopicSectionItem = ({ details, wider }) => {
  const { title, imgPath, rating, genre } = details;
  return (
    <a href="/" className={wider === 0 ? "card card_wider" : "card"}>
      <img className="card__poster" src={imgPath} alt="main poster" />
      <div className="card__genre">{genre[0]}</div>
      <div className="card__raiting">
        <img src={imdb} alt="views" />
        <span>{rating}</span>
      </div>
      <h1 className="card__title">{title}</h1>
    </a>
  );
};

export default TopicSectionItem;
