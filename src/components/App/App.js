import "./app.scss";
import "../../assets/styles/icons.css";

import logo from "../../assets/images/icon/logo.svg";

import trailer1 from "../../assets/images/previews/01.jpg";
import trailer2 from "../../assets/images/previews/02.jpg";
import trailer3 from "../../assets/images/previews/03.jpg";
import trailer4 from "../../assets/images/previews/04.jpg";
import duration from "../../assets/images/icon/duration.svg";
import views from "../../assets/images/icon/views.svg";

import Logo from "../Logo";
import Navbar from "../Navbar";
import SearchPanel from "../SearchPanel";
import User from "../User";
import PreviewsPlayBtn from "../PreviewsPlayBtn";
import PreviewsDescription from "../PreviewsDescription/PreviewsDescription";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__container_absolute">
            <div className="header__top top-header">
              <Logo />
              <Navbar />
              <SearchPanel />
              <User />
            </div>
          </div>
        </div>

        <div className="header__previews previews-container">
          <div className="container">
            <div className="previews">
              <PreviewsPlayBtn />
             <PreviewsDescription />
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
              <a href="/" className="tab-section__title">
                Top Movies
              </a>
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
                <h1 title="Interspace" className="card__title">
                  Interspace
                </h1>
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
