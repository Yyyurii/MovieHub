import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./previewsTrailers.scss";

import trailer1 from "../../assets/images/previews/01.jpg";
import trailer2 from "../../assets/images/previews/02.jpg";
import trailer3 from "../../assets/images/previews/03.jpg";
import trailer4 from "../../assets/images/previews/04.jpg";

const PreviewsTrailers = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px 30px 30px 0px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    dots: true,
    swipeToSlide: true,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      // {
      //   breakpoint: 900,
      //   settings: {
      //     slidesToShow: 2,
      //     initialSlide: 1,
      //   },
      // },
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
        <Slider {...settings}>
          <div>
            <div className="gallery__item">
              <span>01</span>
              <img src={trailer1} alt="trailers" />
            </div>
          </div>
          <div>
            <div className="gallery__item">
              <span>02</span>
              <img src={trailer2} alt="trailers" />
            </div>
          </div>
          <div>
            {" "}
            <div className="gallery__item">
              <span>03</span>
              <img src={trailer3} alt="trailers" />
            </div>
          </div>
          <div>
            <div className="gallery__item">
              <span>04</span>
              <img src={trailer4} alt="trailers" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PreviewsTrailers;
