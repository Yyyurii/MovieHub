import "./app.scss";
import "../../assets/styles/icons.css";
import userImg from '../../assets/images/icon/photo-cover.svg';

const App = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__top top-header">
            <a href="/" className="top-header__logo">
              MovieHub
            </a>

            <nav className="top-header__menu menu">
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
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    In Theatres
                  </a>
                </li>
              </ul>
            </nav>

            <div className="top-header__search">
              <form action="#" className="search-header">
                <input
                  className="search-header__input"
                  placeholder="Search"
                  autoComplete="off"
                ></input>
                <button className="search-header__button icon-search"></button>
              </form>
            </div>

            <div className="top-header__user user">
              <a href="/" className="user__link">
                <img className="user__img icon-photo-cover" src={userImg} alt="User" />
                John Smith
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="main">Main</main>
      <footer className="footer">footer</footer>
    </>
  );
};

export default App;
