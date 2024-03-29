import "./singleItemPage.scss";

import { useContext } from "react";
import { useState, useEffect } from "react";
import useImdb from "../../services/imdb";

import AppContext from "../../context";
import Loader from "../../components/Loader";

const SingleItemPage = () => {
  const { singleItemsDetails } = useContext(AppContext);
  const { getVideoForMovie, getVideoForTV } = useImdb();
  const { id, isMovie } = singleItemsDetails;

  const [movieKey, setMovieKey] = useState({});
  const [tvKey, setTVKey] = useState({});
  const [isDisplayed, setIsDisplayed] = useState(false);

  const getMovieVideo = (id) => {
    getVideoForMovie(id).then((res) => setMovieKey(res.results[0].key));
  };

  const getTVVideo = (id) => {
    getVideoForTV(id).then((res) => setTVKey(res.results[0].key));
  };

  useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(true);
    }, 1000);
    isMovie ? getMovieVideo(id) : getTVVideo(id);
  }, [singleItemsDetails]);

  return (
    <>
      {isDisplayed ? (
        <View
          details={singleItemsDetails}
          isMovie={isMovie}
          movieKey={movieKey}
          tvKey={tvKey}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SingleItemPage;

const View = ({ details, isMovie, movieKey, tvKey }) => {
  const {
    original_title,
    original_name,
    backdrop_path,
    poster_path,
    release_date,
    genres,
    runtime,
    overview,
    vote_average,
    first_air_date,
    episode_run_time
  } = details;

  const genreArr = genres
    ? genres.map((item) => item.name).toString()
    : "Genre";

  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
  };
  return (
    <>
      <div className="single-page">
        <div className="single-page__background-img" style={styles}>
          <div className="single-page__background-color"></div>
        </div>
        <div className="container">
          <h1 className="single-page__title">{isMovie ? original_title : original_name}</h1>
          <div className="single-page__columns">
            <div className="single-page__left-column">
              <img
                className="single-page__poster"
                src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                alt="poster"
              />
              <ul className="single-page__details-list">
                <li className="single-page__list-item-name">Rating:</li>
                <li className="single-page__list-item-value">{vote_average}</li>
                <li className="single-page__list-item-name">Release date:</li>
                <li className="single-page__list-item-value">
                  {isMovie ? release_date : first_air_date}
                </li>
                <li className="single-page__list-item-name">Genre:</li>
                <li className="single-page__list-item-value">{genreArr}</li>
                <li className="single-page__list-item-name">Runtime:</li>
                <li className="single-page__list-item-value">
                  {isMovie ? runtime : episode_run_time} min
                </li>
              </ul>
            </div>
            <div className="single-page__right-column">
              <div className="single-page__video">
                <iframe
                  width="100%"
                  height="385"
                  src={`https://www.youtube.com/embed/${isMovie ? movieKey : tvKey}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="single-page__overview">{overview}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
