import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/movie";
const HEADERS = {
  "Content-Type": "application/json;charset=utf-8",
  Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGQwM2FlYTE3YTllMTI5MjJjMmYyMjEzNTgzYjNiYyIsIm5iZiI6MTcxMzMwNDk4OS43ODgsInN1YiI6IjY2MWVmNTlkZWNhZWY1MDE2M2Y5MDMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.588XlY3VnuNagLznv_l1KNdNDF54fOO3Nr-90U1V4JU`,
};

/**
 * @param {number} movieId
 * @param {number} ratingValue
 * @returns {Promise<object|null>}
 */

export const setRateMovie = async (movieId, ratingValue) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/${movieId}/rating`,
      { value: ratingValue },
      { headers: HEADERS }
    );

    return response.data;
  } catch (error) {
    return null;
  }
};
