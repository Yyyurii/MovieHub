import "./previews.scss";
import triangle from "../../assets/images/icon/triangle.svg";

import { useState } from "react";

import PreviewsDescription from "../PreviewsDescription/PreviewsDescription";
import PreviewsTrailers from "../PreviewsTrailers";

const Previews = () => {
  const [backgroundSrc, setBackgroundSrc] = useState("");

  const setImgSrc = (src) => {
    setBackgroundSrc(src);
  };

  return (
    <div className="previews-container">
      <div className="container">
        <img className="previews-main-img" src={backgroundSrc} alt="main poster" />
        <div className="previews">
          <div className="play-btn">
            <div className="play-btn__wrap-circle">
              <div className="play-btn__img-container">
                <img src={triangle} alt="Play btn" />
              </div>
            </div>
          </div>
          <PreviewsDescription />
          <PreviewsTrailers setImgSrc={setImgSrc} />
        </div>
      </div>
    </div>
  );
};

export default Previews;
