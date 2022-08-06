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

  useEffect(() => {
    getMostPopularMoviesList();
    getNowPlayingMoviesList();
    getPopularTVList();
    // getRandomFilm();
    setTimeout(() => {
      setIsDisplayed(true);
    }, 1000);
  }, []);

  const {
    error,
    loading,
    getMostPopularMovies,
    getNowPlayingMovies,
    getPopularTV,
    getRandomMovie,
    getMoviebyId,
    getTVbyId,
  } = useImdb();

  const getMostPopularMoviesList = (page) => {
    getMostPopularMovies(page).then((res) => setMostPopularMovies(res));
  };

  const getNowPlayingMoviesList = () => {
    getNowPlayingMovies().then((res) => setNowPlayingMovies(res));
  };

  const getPopularTVList = () => {
    getPopularTV().then((res) => setPopularTV(res));
  };

  const getRandomFilm = () => {
    getRandomMovie().then((res) => setRandomMovie(res));
  };

  const getFilmOnClick = (singleItemId) => {
    getMoviebyId(singleItemId).then((res) => setSingleItemsDetails(res));
  };

  const getTVOnClick = (singleItemId) => {
    getTVbyId(singleItemId).then((res) => setSingleItemsDetails(res));
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
            }}
          >
            <Head />
            <Routes>
              <Route
                path="/"
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
                path="/movies"
                element={
                  <TopicSectionFullContentPage
                    itemsList={mostPopularMovies}
                    isMovie={true}
                  />
                }
              />
              <Route
                path="/movies/:movieTitle"
                element={<SingleItemPage isMovie={true} />}
              />

              <Route
                path="/tv-shows"
                element={
                  <TopicSectionFullContentPage
                    itemsList={popularTV}
                    isMovie={false}
                  />
                }
              />
              <Route path="/tv-shows/:TVTitle" element={<SingleItemPage />} />

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
