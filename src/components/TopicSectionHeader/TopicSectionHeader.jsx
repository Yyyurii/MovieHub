import "./topicSectionHeader.scss";

import { Link } from 'react-router-dom';
import { useContext } from "react";
import AppContext from "../../context";

const TopicSectionHeader = ({title, isMovie}) => {
  const { onButtonClick } = useContext(AppContext);

  return (
    <div className="topic-section__header">
      <div className="topic-section__title">
        {title}
      </div>
      <Link to={`${isMovie ? 'MovieHub/movies' : 'MovieHub/tv-shows'}`} onClick={onButtonClick}>View More</Link>
    </div>
  );
};

export default TopicSectionHeader;
