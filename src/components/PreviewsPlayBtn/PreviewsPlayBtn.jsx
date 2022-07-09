import "./previewsPlayBtn.scss";

import playBtn from "../../assets/images/previews/play-button.svg";

const PreviewsPlayBtn = () => {
  return (
    <div className="play-btn">
      <img src={playBtn} alt="Play btn" />
    </div>
  );
};

export default PreviewsPlayBtn;
