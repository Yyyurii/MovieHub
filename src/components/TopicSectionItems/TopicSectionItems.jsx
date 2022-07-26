import { useContext } from "react";

import "./topicSectionItems.scss";

import TopicSectionItem from "../TopicSectionItem/TopicSectionItem";
import AppContext from "../../context";

const TopicSectionItems = () => {

  const { mostPopularMovies } = useContext(AppContext);

  return (
    <div className="topic-section-items">
      {mostPopularMovies.map((item, index) => {
        if (index < 7)
          return (
            <TopicSectionItem key={item.id} details={item} wider={index} />
          );
      })}
    </div>
  );
};

export default TopicSectionItems;
