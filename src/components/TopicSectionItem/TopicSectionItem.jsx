import "./topicSectionItem.scss";

import duration from "../../assets/images/icon/duration.svg";
import views from "../../assets/images/icon/views.svg";

const TopicSectionItem = () => {
  return (
    <a href="/" className="card">
      <div className="card__genre">Fantasy</div>
      <div className="card__details">
        <div className="card__duration">
          <img src={duration} alt="duration" />
          <span>1hr 24mins</span>
        </div>
        <div className="card__views">
          <img src={views} alt="views" />
          <span>21.3K views</span>
        </div>
      </div>
      <h1 className="card__title">Interspace</h1>
    </a>
  );
};

export default TopicSectionItem;
