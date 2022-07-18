import "./previewsBackgroundImg.scss";

import mainPoster from "../../assets/images/previews/00.jpg";

const PreviewsBackgroundImg = ({imgSrc}) => {
  return (
    <img className="previews-main-img" src={imgSrc} alt="main poster" />
  );
};

export default PreviewsBackgroundImg;
