import "./topicSectionHeader.scss";

import { Link } from 'react-router-dom';

const TopicSectionHeader = ({title, isMovie}) => {
  return (
    <div className="topic-section__header">
      <div className="topic-section__title">
        {title}
      </div>
      <Link to={`${isMovie ? '/movies' : '/tv-shows'}`} >View More</Link>
    </div>
  );
};

export default TopicSectionHeader;
