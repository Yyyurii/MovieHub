import Previews from "../components/Previews";
import RandomMovie from "../components/RandomMovie";
import TopicSection from "../components/TopicSection";

export const MainPage = ({
  data,
  movieItemList,
  movieTitle,
  TVItemList,
  TVtitle,
  randomMovie,
  getRandomFilm,
}) => {
  return (
    <>
      <Previews data={data} />
      <TopicSection itemsList={movieItemList} title={movieTitle} isMovie={true} />
      <TopicSection itemsList={TVItemList} title={TVtitle} isMovie={false} />
      {/* <RandomMovie randomMovie={randomMovie} getRandomFilm={getRandomFilm} /> */}
    </>
  );
};
