const key = "k_9sua7xy4";

const useImdb = () => {
  const getMostPopularMovies = async () => {
    const response = await fetch(
      `https://imdb-api.com/en/API/MostPopularMovies/${key}`
    );

    if (!response.ok) {
      throw new Error(`Could not fetch, status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  };

  return { getMostPopularMovies }
};
export default useImdb;
