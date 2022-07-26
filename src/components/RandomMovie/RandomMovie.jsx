import "./RandomMovie.scss";
import trailer1 from "../../assets/images/previews/01.jpg";

const RandomMovie = () => {
  return (
    <div className="random-movie">
      <h1 className="random-movie__title">Random Movie</h1>
      <div className="random-movie__content">
        <img className="random-movie__img" src={trailer1} alt="random movie" />
        <ul className="random-movie__information">
          <li className="random-movie__list-item-name">Rating:</li>
          <li className="random-movie__list-item-value">6.7</li>
          <li className="random-movie__list-item-name">Release date:</li>
          <li className="random-movie__list-item-value">2022-08-10</li>
          <li className="random-movie__list-item-name">Country:</li>
          <li className="random-movie__list-item-value">
            United states of America
          </li>
          <li className="random-movie__list-item-name">Genre:</li>
          <li className="random-movie__list-item-value">Fantasy, advanture</li>
          <li className="random-movie__list-item-name">Runtime:</li>
          <li className="random-movie__list-item-value">139 min</li>
          <li className="random-movie__list-item-name">Overview:</li>
          <li className="random-movie__list-item-value">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
            dolorum assumenda vitae voluptas error magni iusto perspiciatis
            repellat, dolor nostrum voluptatum harum nobis iure explicabo.
          </li>
        </ul>
      </div>
      <button className="random-movie__btn">Random Movie</button>
    </div>
  );
};

export default RandomMovie;
