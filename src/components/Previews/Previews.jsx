import "./previews.scss";

import { useState } from "react";

import PreviewsPlayBtn from "../PreviewsPlayBtn";
import PreviewsDescription from "../PreviewsDescription/PreviewsDescription";
import PreviewsTrailers from "../PreviewsTrailers";
import PreviewsBackgroundImg from "../PreviewsBackgroundImg";

const Previews = () => {
  const [backgroundSrc, setBackgroundSrc] = useState("");

  const setImgSrc = (src) => {
    setBackgroundSrc(src);
  };

  return (
    <div className="previews-container">
      <div className="container">
        <PreviewsBackgroundImg imgSrc={backgroundSrc} />
        <div className="previews">
          <PreviewsPlayBtn />
          <PreviewsDescription />
          <PreviewsTrailers setImgSrc={setImgSrc} />
        </div>
      </div>
    </div>
  );
};

export default Previews;
