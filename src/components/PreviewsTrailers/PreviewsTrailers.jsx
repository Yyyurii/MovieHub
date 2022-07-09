import "./previewsTrailers.scss";

import trailer1 from "../../assets/images/previews/01.jpg";
import trailer2 from "../../assets/images/previews/02.jpg";
import trailer3 from "../../assets/images/previews/03.jpg";
import trailer4 from "../../assets/images/previews/04.jpg";

const PreviewsTrailers = () => {
  return (
    <div className="trailers">
      <p>Trailers</p>
      <div className="gallery">
        <div className="gallery__item">
          <span>01</span>
          <img src={trailer1} alt="trailers" />
        </div>
        <div className="gallery__item">
          <span>02</span>
          <img src={trailer2} alt="trailers" />
        </div>
        <div className="gallery__item">
          <span>03</span>
          <img src={trailer3} alt="trailers" />
        </div>
        <div className="gallery__item">
          <span>04</span>
          <img src={trailer4} alt="trailers" />
        </div>
      </div>
    </div>
  );
};

export default PreviewsTrailers;
