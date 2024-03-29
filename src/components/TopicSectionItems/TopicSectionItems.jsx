import "./topicSectionItems.scss";

import TopicSectionItem from "../TopicSectionItem/TopicSectionItem";

const TopicSectionItems = ({itemsList, isMovie}) => {

  return (
    <div className="topic-section-items">
      {itemsList.map((item, index) => {
        if (index < 7)
          return (
            <TopicSectionItem key={item.id} details={item} wider={index} isMovie={isMovie}/>
          );
      })}
    </div>
  );
};

export default TopicSectionItems;
