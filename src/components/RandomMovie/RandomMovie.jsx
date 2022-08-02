import "./RandomMovie.scss";
import trailer1 from "../../assets/images/previews/01.jpg";

const RandomMovie = ({ randomMovie, getRandomFilm }) => {
  const {
    original_title,
    backdrop_path,
    release_date,
    genres,
    runtime,
    tagline,
    vote_average,
  } = randomMovie;

  const genreArr = genres ? genres.map(item => item.name).toString() : 'Genre';
  
  return (
    <div className="container">
      <div className="random-movie">
        <h1 className="random-movie__title">Random Movie</h1>
        <div className="random-movie__content">
          <img
            className="random-movie__img"
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt="random movie"
          />
          <div className="random-movie__details-container">
            <h2 className="random-movie__movie-title">{original_title}</h2>
            <ul className="random-movie__information">
              <li className="random-movie__list-item-name">Rating:</li>
              <li className="random-movie__list-item-value">{vote_average}</li>
              <li className="random-movie__list-item-name">Release date:</li>
              <li className="random-movie__list-item-value">{release_date}</li>
              {/* <li className="random-movie__list-item-name">Country:</li>
              <li className="random-movie__list-item-value">
                United states of America
              </li> */}
              <li className="random-movie__list-item-name">Genre:</li>
              <li className="random-movie__list-item-value">{genreArr}</li>
              <li className="random-movie__list-item-name">Runtime:</li>
              <li className="random-movie__list-item-value">{runtime} min</li>
              <li className="random-movie__list-item-name">Overview:</li>
              <li className="random-movie__list-item-value">{tagline}</li>
            </ul>
          </div>
        </div>
        <button className="random-movie__btn" onClick={() => getRandomFilm()}>Random Movie</button>
      </div>
    </div>
  );
};

export default RandomMovie;
