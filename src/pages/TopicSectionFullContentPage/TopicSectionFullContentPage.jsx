import "./TopicSectionFullContentPage.scss";
import { useContext, useState } from "react";
import TopicSectionItem from "../../components/TopicSectionItem";
import AppContext from "../../context";
import FilterBox from "../../components/FiltersBox";

const TopicSectionFullContentPage = ({ itemsList }) => {
  const {
    getMostPopularMovies,
    setMostPopularMovies,
    getPopularTV,
    setPopularTV
  } = useContext(AppContext);
  const [pageMovie, setPageMovie] = useState(2);
  const [pageTV, setPageTV] = useState(2);
  const isMovie = itemsList[0].isMovie;
  return (
    <div className="topic-section-full-content">
      <div className="container">
        <FilterBox isMovie={isMovie}/>
        <div className="topic-section-items">
          {itemsList.map((item) => (
            <TopicSectionItem key={item.id} details={item} />
          ))}
        </div>
      </div>
      <button
        className="topic-section-full-content__btn"
        onClick={() => {
          if (itemsList[0].isMovie) {
            getMostPopularMovies(pageMovie).then((res) =>
              setMostPopularMovies((movies) => [...movies, ...res])
            );
            setPageMovie((pageMovie) => pageMovie + 1);
          } else {
            getPopularTV(pageTV).then((res) =>
            setPopularTV((tv) => [...tv, ...res])
          );
          setPageTV((pageTV) => pageTV + 1);
          }
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default TopicSectionFullContentPage;
