import "./topicSectionItem.scss";

import imdb from "../../assets/images/icon/imdb.svg";

import { Link } from "react-router-dom";
import { useContext } from "react";

import AppContext from "../../context";

const TopicSectionItem = ({ details, wider, isMovie }) => {
  const { getFilmOnClick, getTVOnClick } = useContext(AppContext);

  const { title, name, imgPath, rating, genre, id } = details;

  return (
    <Link
      to={`/${isMovie ? "MovieHub/movies" : "MovieHub/tv-shows"}/${title ? title : name}`}
      className={wider === 0 ? "card card_wider" : "card"}
      onClick={() => isMovie ? getFilmOnClick(id) : getTVOnClick(id)}
    >
      <img className="card__poster" src={imgPath} alt="main poster" />
      <div className="card__genre">{genre ? genre[0] : 'Genre'}</div>
      <div className="card__raiting">
        <img src={imdb} alt="views" />
        <span>{rating}</span>
      </div>
      <h1 title={title ? title : name} className="card__title">
        {title ? title : name}
      </h1>
    </Link>
  );
};

export default TopicSectionItem;
