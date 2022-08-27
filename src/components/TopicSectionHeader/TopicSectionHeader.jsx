import "./topicSectionHeader.scss";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context";

const TopicSectionHeader = ({ title, isMovie }) => {
  const { onButtonClick } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickNavigate = () => {
    return isMovie
      ? navigate("/MovieHub/movies")
      : navigate("/MovieHub/tv-shows");
  };

  return (
    <div className="topic-section__header">
      <div className="topic-section__title">{title}</div>
      <div className="topic-section__link"
        onClick={(e) => {
          onClickNavigate();
          onButtonClick(e);
        }}
      >
        View More
      </div>
    </div>
  );
};

export default TopicSectionHeader;
