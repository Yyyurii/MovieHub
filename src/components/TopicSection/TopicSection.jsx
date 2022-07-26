import "./topicSection.scss";

import TopicSectionItems from "../TopicSectionItems";
import TopicSectionHeader from "../TopicSectionHeader";
import Page404 from "../../pages/Page404/Page404";

const TopicSection = () => {
  return (
    <div className="topic-section">
      <div className="container">
      <Page404 />
        <TopicSectionHeader />
        <TopicSectionItems />
      </div>
    </div>
  );
};

export default TopicSection;
