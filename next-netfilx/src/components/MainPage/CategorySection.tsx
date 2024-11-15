import styled, { css } from "styled-components";
import MovieItem from "./MovieItem";
import { Movie } from "./MovieCategoriesList";

export interface CategorySectionProps {
  category: string;
  movies: Movie[]; // Movie 타입 배열
  preview?: boolean;
}
const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  movies = [],
  preview = false,
}) => {
  return (
    <CategoryContainer>
      <CategoryTitle $preview={preview}>{category}</CategoryTitle>
      <MoviesContainer>
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            preview={preview}
            id={movie.id}
          />
        ))}
      </MoviesContainer>
    </CategoryContainer>
  );
};

export default CategorySection;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  gap: 15px;
  padding: 10px;
`;

const CategoryTitle = styled.div<{ $preview?: boolean }>`
  font-size: 20px;
  font-weight: 700;
  ${({ $preview }) =>
    $preview &&
    css`
      font-size: 30px;
    `}
`;

const MoviesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 8px;
  /* overflow: visible; */
  padding: 7px 0;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;
