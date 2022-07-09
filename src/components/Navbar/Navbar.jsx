import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="menu">
        <ul className="menu__list">
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
