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
  const [discoverData, setDiscoverData] = useState([]);
  const [discoverFilters, setDiscoverFilters] = useState([]);

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
    discoverMovie
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

  const onButtonClick = (e) => {
    window.scrollTo(0, e.target.scrollHeight);
  };

  const getDiscoverMovie = (filters) => {
    discoverMovie(filters).then((res) => setDiscoverData(res));
  }

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
              setDiscoverFilters,
              getDiscoverMovie
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
                  <TopicSectionFullContentPage
                    itemsList={mostPopularMovies}
                    isMovie={true}
                  />
                }
              />
              <Route
                path="/MovieHub/movies/:movieTitle"
                element={<SingleItemPage isMovie={true} />}
              />

              <Route
                path="/MovieHub/tv-shows"
                element={
                  <TopicSectionFullContentPage
                    itemsList={popularTV}
                    isMovie={false}
                  />
                }
              />
              <Route
                path="/MovieHub/tv-shows/:TVTitle"
                element={<SingleItemPage />}
              />
              <Route
                path="/MovieHub/search"
                element={<TopicSectionFullContentPage itemsList={searchData} isMovie={true} />}
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
