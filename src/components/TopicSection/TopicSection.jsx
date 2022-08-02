import "./topicSection.scss";

import TopicSectionItems from "../TopicSectionItems";
import TopicSectionHeader from "../TopicSectionHeader";

const TopicSection = ({itemsList, title}) => {
  return (
    <div className="topic-section">
      <div className="container">
        <TopicSectionHeader title={title} />
        <TopicSectionItems itemsList={itemsList}/>
      </div>
    </div>
  );
};

export default TopicSection;
