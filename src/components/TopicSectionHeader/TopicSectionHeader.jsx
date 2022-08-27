import "./topicSectionHeader.scss";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context";

const TopicSectionHeader = ({ title, isMovie }) => {
  const { onButtonClick } = useContext(AppContext);

  return (
    <div className="topic-section__header">
      <div className="topic-section__title">{title}</div>
      {isMovie ? (
        <NavLink to="movies" onClick={onButtonClick}>
          View More
        </NavLink>
      ) : (
        <NavLink to="tv-shows" onClick={onButtonClick}>
          View More
        </NavLink>
      )}
    </div>
  );
};

export default TopicSectionHeader;
