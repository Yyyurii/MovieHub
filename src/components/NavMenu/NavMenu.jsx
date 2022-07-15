import "./navMenu.scss";

const NavMenu = ({show}) => {
  return (
    <nav className="menu">
      <ul className={show ? "menu__list burger-active" : "menu__list"}>
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
  );
};

export default NavMenu;
