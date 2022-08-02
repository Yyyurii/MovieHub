import "./singleItemPage.scss";

import { useContext } from "react";

import AppContext from "../../context";

const SingleItemPage = ({isMovie}) => {
  const { singleItemsDetails } = useContext(AppContext);

  const {
    original_title,
    backdrop_path,
    poster_path,
    release_date,
    genres,
    runtime,
    overview,
    vote_average
  } = singleItemsDetails;

  const genreArr = genres ? genres.map(item => item.name).toString() : 'Genre';

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
          <h1 className="single-page__title">{original_title}</h1>
          <div className="single-page__columns">
            <div className="single-page__left-column">
              <img className="single-page__poster" src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="poster" />
              <ul className="single-page__details-list">
                <li className="single-page__list-item-name">Rating:</li>
                <li className="single-page__list-item-value">{vote_average}</li>
                <li className="single-page__list-item-name">Release date:</li>
                <li className="single-page__list-item-value">{release_date}</li>
                {/* <li className="single-page__list-item-name">Country:</li>
                <li className="single-page__list-item-value">
                  United states of America
                </li> */}
                <li className="single-page__list-item-name">Genre:</li>
                <li className="single-page__list-item-value">
                  {genreArr}
                </li>
                <li className="single-page__list-item-name">Runtime:</li>
                <li className="single-page__list-item-value">{runtime} min</li>
              </ul>
            </div>
            <div className="single-page__right-column">
              <div className="single-page__video"></div>
              <div className="single-page__overview">
               {overview}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItemPage;
