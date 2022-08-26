import "./topicSectionHeader.scss";

import { Link } from 'react-router-dom';
import { useContext } from "react";
import AppContext from "../../context";

const TopicSectionHeader = ({title, isMovie}) => {
  const { onButtonClick } = useContext(AppContext);
  const path = isMovie ? '/MovieHub/movies' : '/MovieHub/tv-shows';

  return (
    <div className="topic-section__header">
      <div className="topic-section__title">
        {title}
      </div>
      <Link to={path} onClick={onButtonClick}>View More</Link>
    </div>
  );
};

export default TopicSectionHeader;
