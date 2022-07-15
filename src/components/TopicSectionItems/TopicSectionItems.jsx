import { useState, useEffect } from "react";

import "./topicSectionItems.scss";

import TopicSectionItem from "../TopicSectionItem/TopicSectionItem";
import useImdb from "../../services/imdb";

const TopicSectionItems = () => {
  const [mostPopularMovies, setMostPopularMovies] = useState([]);

  useEffect(() => {
    getMostPopularMoviesList();
  }, []);

  const { getMostPopularMovies } = useImdb();

  const getMostPopularMoviesList = () => {
    getMostPopularMovies().then((res) => setMostPopularMovies(res));
  };

  return (
    <div className="topic-section-items">
      {mostPopularMovies.map((item, index) => {
        if(index < 5) return <TopicSectionItem key={item.id} details={item} wider={index} />;
      })}
    </div>
  );
};

export default TopicSectionItems;
