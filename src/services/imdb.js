const key = "f352de76e35a775aebdd8d341fa300ff";
const url = "https://api.themoviedb.org/3/";
const fullUrl = `https://api.themoviedb.org/3/movie/popular?api_key=f352de76e35a775aebdd8d341fa300ff&language=en-US&page=1`;

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

  const _transform = (data) => {
    const movieGenre = {
      10402: "Music",
      10749: "Romance",
      10751: "Family",
      10752: "War",
      10770: "TV Movie",
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
      878: "Science Fiction",
      9648: "Mystery",
      99: "Documentary"
    };

    const genre = () => {
      let genre = data.genre_ids;
      let genreArr = [];
      if(genre.length > 0) {
        genre.forEach(item => {
          genreArr.push(movieGenre[item]);
        })
      }
      return genreArr;
    }

    return {
      id: data.id,
      title: data.title,
      rating: data.vote_average,
      imgPath: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`,
      genre: genre(),
      overview: data.overview
    };
  };

  return { getMostPopularMovies };
};
export default useImdb;
