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

  useEffect(() => {
    getMostPopularMoviesList();
  }, []);

  const { getMostPopularMovies } = useImdb();

  const getMostPopularMoviesList = () => {
    getMostPopularMovies().then((res) => setMostPopularMovies(res));
  };

  return (
    <>
      <AppContext.Provider value={{ mostPopularMovies }}>
        <Head />
        <Previews />
        <Main />
        <Footer />
      </AppContext.Provider>
    </>
  );
};

export default App;
