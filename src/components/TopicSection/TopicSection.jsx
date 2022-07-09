import "./topicSection.scss";

import TopicSectionItems from "../TopicSectionItems";
import TopicSectionHeader from "../TopicSectionHeader";

const TopicSection = () => {
  return (
    <div className="topic-section">
      <div className="container">
        <TopicSectionHeader />
        <TopicSectionItems />
      </div>
    </div>
  );
};

export default TopicSection;
