import axios from "axios";

export const getNowPlayingMovies = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGQwM2FlYTE3YTllMTI5MjJjMmYyMjEzNTgzYjNiYyIsIm5iZiI6MTcxMzMwNDk4OS43ODgsInN1YiI6IjY2MWVmNTlkZWNhZWY1MDE2M2Y5MDMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.588XlY3VnuNagLznv_l1KNdNDF54fOO3Nr-90U1V4JU",
    },
  };

  try {
    const res = await axios.request(options);

    const response = res.data.results;

    return response;
  } catch (err) {
    return null;
  }
};

export const getTopRatedMovies = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGQwM2FlYTE3YTllMTI5MjJjMmYyMjEzNTgzYjNiYyIsIm5iZiI6MTcxMzMwNDk4OS43ODgsInN1YiI6IjY2MWVmNTlkZWNhZWY1MDE2M2Y5MDMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.588XlY3VnuNagLznv_l1KNdNDF54fOO3Nr-90U1V4JU",
    },
  };

  try {
    const res = await axios.request(options);

    const response = res.data.results;
    
    return response;
  } catch (err) {
    return null;
  }
};
