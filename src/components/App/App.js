import "./app.scss";
import "../../assets/styles/icons.css";

import Footer from "../Footer/Footer";
import Main from "../Main";
import Header from "../Header";
import useImdb from "../../services/imdb";

const App = () => {
  const { getMostPopularMovies } = useImdb();

  getMostPopularMovies().then(res => console.log(res))

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
