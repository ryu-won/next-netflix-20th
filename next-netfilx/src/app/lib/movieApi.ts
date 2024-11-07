import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_MIMIZAE_API_KEY;

const fetchMovies = async (endpoint: string) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}`
        );
        return response.data.results;
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