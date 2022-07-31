import "./app.scss";
import "../../assets/styles/icons.css";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Main from "../Main";
import Head from "../Head";
import Previews from "../Previews";
import useImdb from "../../services/imdb";
import AppContext from "../../context";

const App = () => {
  const [mostPopularMovies, setMostPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    getMostPopularMoviesList();
    getNowPlayingMoviesList();
  }, []);

  const { getMostPopularMovies, getNowPlayingMovies } = useImdb();

  const getMostPopularMoviesList = () => {
    getMostPopularMovies().then((res) => setMostPopularMovies(res));
  };

  const getNowPlayingMoviesList = () => {
    getNowPlayingMovies().then((res) => setNowPlayingMovies(res));
  };

  return (
    <>
      <AppContext.Provider value={{ mostPopularMovies }}>
        <Head />
        <Previews data={nowPlayingMovies} />
        <Main />
        <Footer />
      </AppContext.Provider>
    </>
  );
};

export default App;
