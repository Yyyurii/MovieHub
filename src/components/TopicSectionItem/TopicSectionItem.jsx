import "./topicSectionItem.scss";

import duration from "../../assets/images/icon/duration.svg";
import views from "../../assets/images/icon/views.svg";
import imdb from "../../assets/images/icon/imdb.svg";
import imdb2 from "../../assets/images/icon/imdb2.svg";

const TopicSectionItem = () => {
  return (
    <a href="/" className="card">
      <div className="card__raiting">
          <img src={imdb} alt="views" />
          <span>6.9</span>
        </div>
      <h1 className="card__title">Interspace</h1>
    </a>
  );
};

export default TopicSectionItem;
