import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { 
    getPopularMovies, 
    getPreviewMovies, 
    getUpcomingMovies, 
    getTrendingMovies, 
    getNGTrendingMovies 
 } from "@/app/lib/movieApi";

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

            const popularMovies = await getPopularMovies();
            const topRatedMovies = await getPreviewMovies();
            const upcomingMovies = await getUpcomingMovies();
            const trending = await getTrendingMovies();
            const NGtrending = await getNGTrendingMovies();
            setMoviesByCategory({
                "Preview": topRatedMovies,
                "Popular on Netflix": popularMovies,
                "New Releases": upcomingMovies,
                "Trending Now": trending,
                "Top 10 in Nigeria Today": NGtrending
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
