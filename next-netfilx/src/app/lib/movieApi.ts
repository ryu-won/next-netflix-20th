const fetchMovies = async (endpoint: string) => {
  try {
    const response = await fetch(`/api/movie?endpoint=${endpoint}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Error fetching ${endpoint} movies:`, error);
    throw error;
  }
};

export const getPopularMovies = () => fetchMovies("movie/popular");
export const getPreviewMovies = () => fetchMovies("movie/top_rated");
export const getUpcomingMovies = () => fetchMovies("movie/upcoming");
export const getTrendingMovies = () => fetchMovies("trending/movie/week");
export const getNGTrendingMovies = () => fetchMovies("trending/movie/day");
