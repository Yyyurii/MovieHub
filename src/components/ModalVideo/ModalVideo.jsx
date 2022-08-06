import "./ModalVideo.scss";
import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

const ModalVideo = ({ modal, setModal, movieKey }) => {
  const [videoLoading, setVideoLoading] = useState(true);
  const [link, setLink] = useState("");

  useEffect(() => {
    const setMovieLink = async () => {
      const key = await movieKey;
      if (key) setLink(`https://www.youtube.com/embed/${key}`);
    };
    setMovieLink();
  }, [movieKey]);

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <>
      {modal ? (
        <section className="modal__bg">
          <div className="modal__align">
            <div className="modal__content" modal={modal.toString()}>
              <IoCloseOutline
                className="modal__close"
                arial-label="Close modal"
                onClick={() => setModal(!modal)}
              />
              <div className="modal__video-align">
                {videoLoading ? (
                  <div className="modal__spinner">
                    <BiLoaderAlt
                      className="modal__spinner-style"
                      fadein="none"
                    />
                  </div>
                ) : null}
                <iframe
                  className="modal__video-style"
                  onLoad={spinner}
                  loading="lazy"
                  width="800"
                  height="500"
                  src={link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ModalVideo;
