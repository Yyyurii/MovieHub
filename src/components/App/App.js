import "./app.scss";
import "../../assets/styles/icons.css";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Head from "../Head";
import Previews from "../Previews";
import TopicSection from "../TopicSection";
import RandomMovie from "../RandomMovie";
import useImdb from "../../services/imdb";
import AppContext from "../../context";

const App = () => {
  const [mostPopularMovies, setMostPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [randomMovie, setRandomMovie] = useState([]);

  useEffect(() => {
    getMostPopularMoviesList();
    getNowPlayingMoviesList();
    getPopularTVList();
    getRandomFilm();
  }, []);

  const { getMostPopularMovies, getNowPlayingMovies, getPopularTV, getRandomMovie } = useImdb();

  const getMostPopularMoviesList = () => {
    getMostPopularMovies().then((res) => setMostPopularMovies(res));
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

  return (
    <>
      <AppContext.Provider>
        <Head />
        <Previews data={nowPlayingMovies} />
        <TopicSection itemsList={mostPopularMovies} title='The Most Popular Movies'/>
        <TopicSection itemsList={popularTV} title='The Most Popular TV Shows'/>
        <RandomMovie randomMovie={randomMovie} getRandomFilm={getRandomFilm} />
        <Footer />
      </AppContext.Provider>
    </>
  );
};

export default App;
