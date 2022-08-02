const key = "f352de76e35a775aebdd8d341fa300ff";
const url = "https://api.themoviedb.org/3/";

const useImdb = () => {
  const getMostPopularMovies = async () => {
    const response = await fetch(
      `${url}movie/popular?api_key=${key}&language=en-US&page=1`
    );

    if (!response.ok) {
      throw new Error(`Could not fetch, status: ${response.status}`);
    }

    const data = await response.json();
    return data.results.map(_transform);
  };

  const getRandomMovie = async () => {
    const response = await fetch(
      `${url}movie/${Math.floor(Math.random() * 50000)}?api_key=${key}&language=en-US&page=${Math.floor(Math.random() * 10)}`
    );

    if (!response.ok) {
      throw new Error(`Could not fetch, status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  };

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      `${url}movie/now_playing?api_key=${key}&language=en-US&page=1`
    );

    if (!response.ok) {
      throw new Error(`Could not fetch, status: ${response.status}`);
    }

    const data = await response.json();
    return data.results.map(_transform);
  };

  const getPopularTV = async () => {
    const response = await fetch(
      `${url}tv/popular?api_key=${key}&language=en-US&page=1`
    );

    if (!response.ok) {
      throw new Error(`Could not fetch, status: ${response.status}`);
    }

    const data = await response.json();
    return data.results.map(_transform);
  };

  const _transform = (data) => {
    const genres = {
      12: "Adventure",
      14: "Fantasy",
      16: "Animation",
      18: "Drama",
      27: "Horror",
      28: "Action",
      35: "Comedy",
      36: "History",
      37: "Western",
      53: "Thriller",
      80: "Crime",
      99: "Documentary",
      878: "Science Fiction",
      9648: "Mystery",
      10402: "Music",
      10749: "Romance",
      10751: "Family",
      10752: "War",
      10759: "Action & Adventure",
      10762: "Kids",
      10763: "News",
      10764: "Reality",
      10770: "TV Movie", 
      10765: "Sci-Fi & Fantasy",
      10766: "Soap",
      10767: "Talk",
      10768: "War & Politics",
    };


    const genre = () => {
      let genre = data.genre_ids;
      let genreArr = [];
      if (genre.length > 0) {
        genre.forEach((item) => {
          genreArr.push(genres[item]);
        });
      }
      return genreArr;
    };

    return {
      id: data.id,
      title: data.title,
      name: data.name,
      rating: data.vote_average,
      imgPath: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`,
      genre: genre(),
      overview: data.overview,
      releaseDate: data.release_date
    };
  };

  return { getMostPopularMovies, getNowPlayingMovies, getPopularTV, getRandomMovie };
};
export default useImdb;
