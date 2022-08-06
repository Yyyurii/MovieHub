import { useHttp } from "../hooks/http.hook";

const key = "f352de76e35a775aebdd8d341fa300ff";
const url = "https://api.themoviedb.org/3/";

const useImdb = () => {
  const { loading, error, request, clearError } = useHttp();

  const getMostPopularMovies = async (page = 1) => {
    const response = await request(
      `${url}movie/popular?api_key=${key}&language=en-US&page=${page}`
    );
    return response.results.map(_transform);
  };

  const getRandomMovie = async () => {
    const response = await request(
      `${url}movie/${Math.floor(
        Math.random() * 50000
      )}?api_key=${key}&language=en-US`
    );
    return response;
  };

  const getMoviebyId = async (id) => {
    const response = await request(
      `${url}movie/${id}?api_key=${key}&language=en-US`
    );
    return response;
  };

  const getNowPlayingMovies = async () => {
    const response = await request(
      `${url}movie/now_playing?api_key=${key}&language=en-US&page=1`
    );
    return response.results.map(_transform);
  };

  const getVideoForMovie = async (id) => {
    const response = await request(
      `${url}movie/${id}/videos?api_key=${key}&language=en-US`
    );
    return response;
  };

  const getPopularTV = async (page = 1) => {
    const response = await request(
      `${url}tv/popular?api_key=${key}&language=en-US&page=${page}`
    );
    return response.results.map(_transform);
  };

  const getTVbyId = async (id) => {
    const response = await request(
      `${url}tv/${id}?api_key=${key}&language=en-US`
    );
    return response;
  };

  const getVideoForTV= async (id) => {
    const response = await request(
      `${url}tv/${id}/videos?api_key=${key}&language=en-US`
    );
    return response;
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
      releaseDate: data.release_date,
    };
  };

  return {
    loading,
    error,
    clearError,
    getMostPopularMovies,
    getNowPlayingMovies,
    getPopularTV,
    getRandomMovie,
    getMoviebyId,
    getTVbyId,
    getVideoForMovie,
    getVideoForTV
  };
};
export default useImdb;
