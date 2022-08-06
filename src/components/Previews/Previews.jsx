import "./previews.scss";
import triangle from "../../assets/images/icon/triangle.svg";

import { useState, useEffect } from "react";

import PreviewsDescription from "../PreviewsDescription/PreviewsDescription";
import PreviewsTrailers from "../PreviewsTrailers";
import ModalVideo from "../ModalVideo";
import useImdb from "../../services/imdb";

const Previews = ({ data }) => {
  const [backgroundSrc, setBackgroundSrc] = useState("");
  const [nowPlayingMoview, setNowPlayingMoview] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeId, setActiveId] = useState(null);
  const [movieKey, setMovieKey] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const { getVideoForMovie } = useImdb();

  useEffect(() => {
    const filterMovies = () => {
      const movies = data.slice(0, 9);
      setNowPlayingMoview(movies);
    };

    const getActiveMovieId = async () => {
      const item = await data[activeSlide];
      if (item) setActiveId(item.id);
    };

    const getMovieKey = async (id) => {
      const arg = id;
      if (arg)
        getVideoForMovie(id).then((res) => setMovieKey(res.results[0].key));
    };

    const setImgSrc = () => {
      const imgSrc = data[activeSlide];
      if (imgSrc) setBackgroundSrc(imgSrc.imgPath);
    };

    filterMovies();
    getActiveMovieId();
    getMovieKey(activeId);
    setImgSrc();
  }, [data, activeId, activeSlide]);

  return (
    <div className="previews-container">
      <div className="container">
        <img
          className="previews-main-img"
          src={backgroundSrc}
          alt="main poster"
        />
        <div className="previews">
          <div className="play-btn" onClick={() => setIsOpen(!isOpen)}>
            <div className="play-btn__wrap-circle">
              <div className="play-btn__img-container">
                <img src={triangle} alt="Play btn" />
              </div>
            </div>
          </div>
          <ModalVideo modal={isOpen} setModal={setIsOpen} movieKey={movieKey} />
          <PreviewsDescription movie={nowPlayingMoview[activeSlide]} />
          <PreviewsTrailers
            movies={nowPlayingMoview}
            setActiveSlide={setActiveSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Previews;
