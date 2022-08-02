import "./topicSectionItems.scss";

import TopicSectionItem from "../TopicSectionItem/TopicSectionItem";

const TopicSectionItems = ({movies}) => {

  return (
    <div className="topic-section-items">
      {movies.map((item, index) => {
        if (index < 7)
          return (
            <TopicSectionItem key={item.id} details={item} wider={index} />
          );
      })}
    </div>
  );
};

export default TopicSectionItems;
