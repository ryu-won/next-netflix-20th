import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import {
  getPopularMovies,
  getPreviewMovies,
  getUpcomingMovies,
  getTrendingMovies,
  getNGTrendingMovies,
} from "@/app/lib/movieApi";
import CategorySection, { CategorySectionProps } from "./CategorySection";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview?: string;
  release_date?: string;
}

const AnimatedCategorySection = ({
  category,
  movies,
  preview,
}: CategorySectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
    margin: "0px 0px -20% 0px",
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <CategorySection category={category} movies={movies} preview={preview} />
    </motion.div>
  );
};

const MovieCategoriesList: React.FC = () => {
  const [moviesByCategory, setMoviesByCategory] = useState<{
    [key: string]: Movie[];
  }>({
    Preview: [],
    "Popular on Netflix": [],
    "New Releases": [],
    "Trending Now": [],
    "Top 10 in Nigeria Today": [],
  });

  const getMovieList = async () => {
    try {
      const [
        popularMovies,
        topRatedMovies,
        upcomingMovies,
        trending,
        NGtrending,
      ] = await Promise.all([
        getPopularMovies(),
        getPreviewMovies(),
        getUpcomingMovies(),
        getTrendingMovies(),
        getNGTrendingMovies(),
      ]);

      setMoviesByCategory({
        Preview: topRatedMovies,
        "Popular on Netflix": popularMovies,
        "New Releases": upcomingMovies,
        "Trending Now": trending,
        "Top 10 in Nigeria Today": NGtrending,
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
        <AnimatedCategorySection
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
  margin-bottom: 60px;
  color: white;
  flex-grow: 1;

  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
