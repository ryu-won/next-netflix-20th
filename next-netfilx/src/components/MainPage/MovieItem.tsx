import styled from "styled-components";
import { Movie } from "./MovieCategoriesList";

interface MovieItemProps {
    movie: Movie;
    preview: boolean;
  }
// 영화 하나하나 담는 요소

const MovieItem: React.FC<MovieItemProps> = ({ movie, preview = false  }) => {
    return (
        <MovieCard>
            <Poster $preview={preview} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        </MovieCard>
    );
};

export default MovieItem;

const MovieCard = styled.div`
    width: 120px;
`;

const Poster = styled.img<{ $preview?: boolean }>`
    width: ${({ $preview }) => ($preview ? "103px" : "103px")}; /* preview일 때는 너비와 높이 100px로 설정해서 정원형으로 만들 수 있도록 함*/
    height: ${({ $preview }) => ($preview ? "103px" : "161px")};
    border-radius: ${({ $preview }) => ($preview ? "50%" : "8px")};
    object-fit: cover;
    cursor: pointer;
`;