import "./topicSection.scss";

import TopicSectionItems from "../TopicSectionItems";
import TopicSectionHeader from "../TopicSectionHeader";
import RandomMovie from "../RandomMovie";

const TopicSection = () => {
  return (
    <div className="topic-section">
      <div className="container">
      <RandomMovie />
        <TopicSectionHeader />
        <TopicSectionItems />
      </div>
    </div>
  );
};

export default TopicSection;
