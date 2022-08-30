import "./app.scss";
import "../../assets/styles/icons.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useImdb from "../../services/imdb";
import AppContext from "../../context";

import Footer from "../Footer/Footer";
import Head from "../Head";
import Loader from "../Loader";
import {
  Page404,
  MainPage,
  SingleItemPage,
  TopicSectionFullContentPage,
} from "../../pages";

const App = () => {
  const [mostPopularMovies, setMostPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [randomMovie, setRandomMovie] = useState([]);
  const [singleItemsDetails, setSingleItemsDetails] = useState({});
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [discoverDataMovie, setDiscoverDataMovie] = useState([]);
  const [discoverDataTV, setDiscoverDataTV] = useState([]);

  useEffect(() => {
    getMostPopularMoviesList();
    getNowPlayingMoviesList();
    getPopularTVList();
    setTimeout(() => {
      setIsDisplayed(true);
    }, 1000);
  }, []);

  const {
    getMostPopularMovies,
    getNowPlayingMovies,
    getPopularTV,
    getRandomMovie,
    getMoviebyId,
    getTVbyId,
    discoverMovie,
    discoverTV,
  } = useImdb();

  const getMostPopularMoviesList = (page) => {
    getMostPopularMovies(page).then((res) => {
      let data = res.map((item) => {
        let cloneItem = { ...item, isMovie: true };
        return cloneItem;
      });
      setMostPopularMovies(data);
    });
  };

  const getNowPlayingMoviesList = () => {
    getNowPlayingMovies().then((res) => {
      let data = res.map((item) => {
        let cloneItem = { ...item, isMovie: true };
        return cloneItem;
      });
      setNowPlayingMovies(data);
    });
  };

  const getPopularTVList = () => {
    getPopularTV().then((res) => {
      let data = res.map((item) => {
        let cloneItem = { ...item, isMovie: false };
        return cloneItem;
      });
      setPopularTV(data);
    });
  };

  const getRandomFilm = () => {
    getRandomMovie().then((res) => setRandomMovie(res));
  };

  const getFilmOnClick = (singleItemId) => {
    getMoviebyId(singleItemId).then((res) => {
      let data = { ...res, isMovie: true };
      setSingleItemsDetails(data);
    });
  };

  const getTVOnClick = (singleItemId) => {
    getTVbyId(singleItemId).then((res) => {
      let data = { ...res, isMovie: false };
      setSingleItemsDetails(data);
    });
  };

  const onButtonClick = (e) => {
    window.scrollTo(0, e.target.scrollHeight);
  };

  const getDiscoverMovie = (filters) => {
    discoverMovie(filters).then((res) => {
      let data = res.map((item) => {
        let cloneItem = {};
        item.title
          ? (cloneItem = { ...item, isMovie: true })
          : (cloneItem = { ...item, isMovie: false });
        return cloneItem;
      });
      console.log(data);
      setDiscoverDataMovie(data);
    });
  };

  const getDiscoverTV = (filters) => {
    discoverTV(filters).then((res) => {
      let data = res.map((item) => {
        let cloneItem = {};
        item.title
          ? (cloneItem = { ...item, isMovie: true })
          : (cloneItem = { ...item, isMovie: false });
        return cloneItem;
      });
      console.log(data);
      setDiscoverDataTV(data);
    });
  };

  return (
    <>
      {!isDisplayed ? (
        <Loader />
      ) : (
        <>
          <AppContext.Provider
            value={{
              getFilmOnClick,
              getTVOnClick,
              singleItemsDetails,
              getMostPopularMovies,
              setMostPopularMovies,
              getPopularTV,
              setPopularTV,
              onButtonClick,
              setSearchData,
              getDiscoverMovie,
              getDiscoverTV,
            }}
          >
            <Head />
            <Routes>
              <Route
                path="/MovieHub"
                element={
                  <MainPage
                    data={nowPlayingMovies}
                    movieItemList={mostPopularMovies}
                    movieTitle="The Most Popular Movies"
                    TVItemList={popularTV}
                    TVtitle="The Most Popular TV Shows"
                    randomMovie={randomMovie}
                    getRandomFilm={getRandomFilm}
                  />
                }
              />
              <Route
                path="/MovieHub/movies"
                element={
                  <TopicSectionFullContentPage itemsList={mostPopularMovies} />
                }
              />
              <Route
                path="/MovieHub/movies/:movieTitle"
                element={<SingleItemPage />}
              />

              <Route
                path="/MovieHub/tv-shows"
                element={<TopicSectionFullContentPage itemsList={popularTV} />}
              />
              <Route
                path="/MovieHub/tv-shows/:TVTitle"
                element={<SingleItemPage />}
              />
              <Route
                path="/MovieHub/search"
                element={<TopicSectionFullContentPage itemsList={searchData} />}
              />
              <Route path="/MovieHub/error" element={<Page404 />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
            <Footer />
          </AppContext.Provider>
        </>
      )}
    </>
  );
};

export default App;
