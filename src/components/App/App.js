import "./app.scss";
import "../../assets/styles/icons.css";
import userImg from "../../assets/images/icon/photo-cover.svg";
import logo from "../../assets/images/icon/logo.svg";
import playBtn from "../../assets/images/previews/play-button.svg";
import trailer1 from "../../assets/images/previews/01.jpg";
import trailer2 from "../../assets/images/previews/02.jpg";
import trailer3 from "../../assets/images/previews/03.jpg";
import trailer4 from "../../assets/images/previews/04.jpg";
import duration from "../../assets/images/icon/duration.svg";
import views from "../../assets/images/icon/views.svg";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__container_absolute">
            <div className="header__top top-header">
              <a href="/" className="top-header__logo">
                <img src={logo} alt="logo" />
                <span>MovieHub</span>
              </a>

              <div className="top-header__burger burger">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <nav className="top-header__menu menu ">
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
                  <img
                    className="user__img icon-photo-cover"
                    src={userImg}
                    alt="User"
                  />
                  <span>John Smith</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="header__previews previews-container">
          <div className="container">
            <div className="previews">
              <div className="previews__btn-play">
                <img src={playBtn} alt="Play btn" />
              </div>
              <div className="previews__description">
                <div className="previews__title">The Legend of Sunrise</div>
                <div className="previews__subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </div>
                <div className="previews__details">
                  Genre : Adventure
                  <br />
                  Duration : 2 hr 45 mins
                  <br />
                  Ratings : 4.5
                  <br />
                </div>
              </div>
              <div className="previews__trailers">
                <p>Trailers</p>
                <div className="previews__gallery gallery">
                  <div className="gallery__item">
                    <span>01</span>
                    <img src={trailer1} alt="trailers" />
                  </div>
                  <div className="gallery__item">
                    <span>02</span>
                    <img src={trailer2} alt="trailers" />
                  </div>
                  <div className="gallery__item">
                    <span>03</span>
                    <img src={trailer3} alt="trailers" />
                  </div>
                  <div className="gallery__item">
                    <span>04</span>
                    <img src={trailer4} alt="trailers" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="tab-section">
          <div className="container">
            <div className="tab-section__header">
              <a href="/" className="tab-section__title">Top Movies</a>
              <button>View More</button>
            </div>
            <div className="tab-section__cards">
              <a href="/" className="card card_wider">
                <div className="card__genre">Fantasy</div>
                <div className="card__details">
                  <div className="card__duration">
                    <img src={duration} alt="duration" />
                    <span>1hr 24mins</span>
                  </div>
                  <div className="card__views">
                    <img src={views} alt="views" />
                    <span>21.3K views</span>
                  </div>
                </div>
                <h1 title="Interspace" className="card__title">Interspace</h1>
              </a>
              <a href="/" className="card">
                <div className="card__genre">Fantasy</div>
                <div className="card__details">
                  <div className="card__duration">
                    <img src={duration} alt="duration" />
                    <span>1hr 24mins</span>
                  </div>
                  <div className="card__views">
                    <img src={views} alt="views" />
                    <span>21.3K views</span>
                  </div>
                </div>
                <h1 className="card__title">Interspace</h1>
              </a>
              <a href="/" className="card">
                <div className="card__genre">Fantasy</div>
                <div className="card__details">
                  <div className="card__duration">
                    <img src={duration} alt="duration" />
                    <span>1hr 24mins</span>
                  </div>
                  <div className="card__views">
                    <img src={views} alt="views" />
                    <span>21.3K views</span>
                  </div>
                </div>
                <h1 className="card__title">Interspace</h1>
              </a>
              <a href="/" className="card">
                <div className="card__genre">Fantasy</div>
                <div className="card__details">
                  <div className="card__duration">
                    <img src={duration} alt="duration" />
                    <span>1hr 24mins</span>
                  </div>
                  <div className="card__views">
                    <img src={views} alt="views" />
                    <span>21.3K views</span>
                  </div>
                </div>
                <h1 className="card__title">Interspace</h1>
              </a>
              <a href="/" className="card">
                <div className="card__genre">Fantasy</div>
                <div className="card__details">
                  <div className="card__duration">
                    <img src={duration} alt="duration" />
                    <span>1hr 24mins</span>
                  </div>
                  <div className="card__views">
                    <img src={views} alt="views" />
                    <span>21.3K views</span>
                  </div>
                </div>
                <h1 className="card__title">Interspace</h1>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <a href="/" className="footer__logo">
            <img src={logo} alt="logo" />
            <span>MovieHub</span>
          </a>
          <span>Enjoy</span>
        </div>
      </footer>
    </>
  );
};

export default App;
