import "./previewsPlayBtn.scss";

import triangle from "../../assets/images/icon/triangle.svg";

const PreviewsPlayBtn = () => {
  return (
    <div className="play-btn">
      <div className="play-btn__wrap-circle">
        <div className="play-btn__img-container">
          <img src={triangle} alt="Play btn" />
        </div>
      </div>
    </div>
  );
};

export default PreviewsPlayBtn;
