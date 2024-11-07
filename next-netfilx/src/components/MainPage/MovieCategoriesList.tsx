import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CategorySection from "./CategorySection";

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
}

const MovieCategoriesList: React.FC = () => {
    const [moviesByCategory, setMoviesByCategory] = useState<{ [key: string]: Movie[] }>({
        "Preview": [],
        "Popular on Netflix": [],
        "New Releases": [],
        "Trending Now": [],
        "Top 10 in Nigeria Today": []
    });

    const getMovieList = async () => {
        try {
            const API_KEY = process.env.NEXT_PUBLIC_MIMIZAE_API_KEY;

            // axios를 사용한 API 호출
            const popularMovies = await axios.get(
                `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            );
            const topRatedMovies = await axios.get(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
            );
            const upcomingMovies = await axios.get(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
            );
            const trending = await axios.get(
                `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
            );
            const NGtrending = await axios.get(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&region=US`
            );

            setMoviesByCategory({
                "Preview": topRatedMovies.data.results,
                "Popular on Netflix": popularMovies.data.results,
                "New Releases": upcomingMovies.data.results,
                "Trending Now": trending.data.results,
                "Top 10 in Nigeria Today": NGtrending.data.results
            });
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    useEffect(() => {
        getMovieList();
    }, []);

    return (
        <MovieListContainer>
            {Object.entries(moviesByCategory).map(([category, movies]) => (
                <CategorySection
                    key={category}
                    category={category}
                    movies={movies}
                    preview={category === "Preview"}
                />
            ))}
        </MovieListContainer>
    );
};

export default MovieCategoriesList;

const MovieListContainer = styled.main`
    margin: 516px 0 60px 0;
    color: white;
    flex-grow: 1;
`;
