import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./previewsPlayBtn.scss";

// import playBtn from "../../assets/images/previews/play-button.svg";
import triangle from "../../assets/images/icon/triangle.svg";

const PreviewsPlayBtn = () => {
  return (
    <div className="play-btn">
      <div style={{ fontSize: 12, marginTop: -5, width: 144 }}>
        <CircularProgressbarWithChildren
          value={75}
          styles={buildStyles({
            pathColor: `rgba(254, 213, 48, 1)`,
          })}
        >
          <div className="play-btn__img-container">
            <img src={triangle} alt="Play btn" />
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default PreviewsPlayBtn;
