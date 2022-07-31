import { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./previewsTrailers.scss";

const PreviewsTrailers = ({ setImgSrc, movies, setActiveSlide }) => {
  useEffect(() => {
    if (movies) {
      movies.forEach((item, index) => index === 0 ? setImgSrc(item.imgPath) : null);
    }
  }, [movies]);

  const renderMovies = (moviesList) => {
    const list = moviesList.map((item, index) => {
      return (
        <div key={item.id}>
          <div
            className="gallery__item"
            onClick={() => setImgSrc(item.imgPath)}
          >
            <span>{`${index + 1}`}</span>
            <img src={item.imgPath} alt="trailers" />
          </div>
        </div>
      );
    });

    return list;
  };

  const moviesList = renderMovies(movies);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px 30px 30px 0px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    dots: false,
    swipeToSlide: true,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="trailers">
      <p>Trailers</p>
      <div className="gallery">
        <Slider {...settings}>{moviesList}</Slider>
      </div>
    </div>
  );
};

export default PreviewsTrailers;
