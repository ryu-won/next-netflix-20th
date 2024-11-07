import styled, { css } from "styled-components";
import MovieItem from "./MovieItem";

interface CategorySectionProps {
    category: string;
    movies: Array<{ id: number; title: string; poster_path: string }>;
    preview?: boolean;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, movies = [], preview = false }) => {
    return (
        <CategoryContainer>
            <CategoryTitle $preview={preview}>{category}</CategoryTitle>
            <MoviesContainer>
                {movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} preview={preview} />
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

    &::-webkit-scrollbar {
        display: none;
    }
`;
