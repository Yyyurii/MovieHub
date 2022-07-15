import "./navbar.scss";

import { useState, useEffect } from "react";

import NavMenu from "../NavMenu";
import NavSidebar from "../NavSidebar";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth ;
  }

  return (
    <>
      <div className="burger" onClick={handleShow}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {windowSize > 800 ? (
        <NavMenu show={show} />
      ) : (
        <NavSidebar show={show} onHide={handleClose} />
      )}
    </>
  );
};

export default Navbar;
