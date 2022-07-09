import "./previews.scss";

import PreviewsPlayBtn from "../PreviewsPlayBtn";
import PreviewsDescription from "../PreviewsDescription/PreviewsDescription";
import PreviewsTrailers from "../PreviewsTrailers";

const Previews = () => {
  return (
    <div className="previews-container">
      <div className="container">
        <div className="previews">
          <PreviewsPlayBtn />
          <PreviewsDescription />
          <PreviewsTrailers />
        </div>
      </div>
    </div>
  );
};

export default Previews;
