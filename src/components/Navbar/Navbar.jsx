import "./navbar.scss";

import { useState } from "react";

const Navbar = () => {
  const [isShowBurger, setIsShowBurger] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsShowBurger((isShowBurger) => !isShowBurger);
  };

  return (
    <>
      <div
        className={isShowBurger ? "burger active" : "burger"}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="menu">
        <ul
          className={isShowBurger ? "menu__list burger-active" : "menu__list"}
        >
          <li className="menu__item">
            <a href="/" className="menu__link">
              Movies
            </a>
          </li>
          <li className="menu__item">
            <a href="/" className="menu__link">
              TV Shoes
            </a>
          </li>
          <li className="menu__item">
            <a href="/" className="menu__link">
              Coming Soon
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
