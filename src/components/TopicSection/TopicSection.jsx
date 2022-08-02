import "./topicSection.scss";

import TopicSectionItems from "../TopicSectionItems";
import TopicSectionHeader from "../TopicSectionHeader";

const TopicSection = ({itemsList, title, isMovie}) => {
  return (
    <div className="topic-section">
      <div className="container">
        <TopicSectionHeader title={title} />
        <TopicSectionItems itemsList={itemsList} isMovie={isMovie}/>
      </div>
    </div>
  );
};

export default TopicSection;
