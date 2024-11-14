const fetchMovies = async (endpoint: string) => {
  try {
    console.log(`Fetching from: /api/movies/${endpoint}`); // 확인용 로그

    const response = await fetch(`/api/movies/${endpoint}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Error fetching ${endpoint} movies:`, error);
    throw error;
  }
};

export default fetchMovies;

export const getPopularMovies = () => fetchMovies("movie/popular");
export const getPreviewMovies = () => fetchMovies("movie/top_rated");
export const getUpcomingMovies = () => fetchMovies("movie/upcoming");
export const getTrendingMovies = () => fetchMovies("trending/movie/week");
export const getNGTrendingMovies = () => fetchMovies("trending/movie/day");

export const getMovieDetail = async (id: string) => {
  return fetchMovies(`movie/${id}`);
};
