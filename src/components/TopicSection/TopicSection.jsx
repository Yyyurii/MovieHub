import "./topicSection.scss";

import TopicSectionItems from "../TopicSectionItems";
import TopicSectionHeader from "../TopicSectionHeader";

const TopicSection = ({movies}) => {
  return (
    <div className="topic-section">
      <div className="container">
        <TopicSectionHeader />
        <TopicSectionItems movies={movies}/>
      </div>
    </div>
  );
};

export default TopicSection;
