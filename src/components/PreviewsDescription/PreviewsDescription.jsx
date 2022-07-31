import "./previewsDescription.scss";
import { useState, useEffect } from "react";

const PreviewsDescription = ({ movie }) => {
  const [description, setDescription] = useState({});

  useEffect(() => {
    if(movie) setDescription(movie);
  }, [movie]);

  const renderDesc = (descript) => {
    return (
      <>
        <div className="description__title">{descript.title}</div>
        <div className="description__subtitle">{descript.overview}</div>
        <div className="description__details">
          Genre : {descript.genre}
          <br />
          Rating : {descript.rating}
          <br />
        </div>
      </>
    );
  };

  const desc = renderDesc(description);

  return (
    <div className="description">
      {desc}
    </div>
  );
};

export default PreviewsDescription;
