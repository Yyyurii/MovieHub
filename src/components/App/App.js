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

  useEffect(() => {
    getMostPopularMoviesList();
    getNowPlayingMoviesList();
    getPopularTVList();
  }, []);

  const { getMostPopularMovies, getNowPlayingMovies, getPopularTV } = useImdb();

  const getMostPopularMoviesList = () => {
    getMostPopularMovies().then((res) => setMostPopularMovies(res));
  };

  const getNowPlayingMoviesList = () => {
    getNowPlayingMovies().then((res) => setNowPlayingMovies(res));
  };

  const getPopularTVList = () => {
    getPopularTV().then((res) => setPopularTV(res));
  };

  return (
    <>
      <AppContext.Provider value={{ mostPopularMovies }}>
        <Head />
        <Previews data={nowPlayingMovies} />
        <TopicSection itemsList={mostPopularMovies} title='The Most Popular Movies'/>
        <TopicSection itemsList={popularTV} title='The Most Popular TV Shows'/>
        <RandomMovie />
        <Footer />
      </AppContext.Provider>
    </>
  );
};

export default App;
