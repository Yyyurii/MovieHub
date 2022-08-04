import "./navMenu.scss";
import { NavLink } from "react-router-dom";

const NavMenu = ({ show }) => {
  let activeStyle = {
    padding: "0 0 4px",
    borderBottom: "4px solid #fed530",
    fontWeight: "700",
    lineHeight: "24px",
  };

  return (
    <nav className="menu">
      <ul className={show ? "menu__list burger-active" : "menu__list"}>
        <li className="menu__item">
          <NavLink
            to="movies"
            className="menu__link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Movies
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="tv-shows"
            className="menu__link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            TV Shoes
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="coming-soon"
            className="menu__link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Coming Soon
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
