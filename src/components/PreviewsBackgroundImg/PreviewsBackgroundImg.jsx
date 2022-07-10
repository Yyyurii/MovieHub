import "./previewsBackgroundImg.scss";

import mainPoster from "../../assets/images/previews/00.jpg";

const PreviewsBackgroundImg = () => {
  return (
    <img className="previews-main-img" src={mainPoster} alt="main poster" />
  );
};

export default PreviewsBackgroundImg;
