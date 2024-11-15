import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Movie } from "./MovieCategoriesList";

interface MovieItemProps {
<<<<<<< HEAD
  movie: {
    title: string;
    poster_path: string;
  };
  preview: boolean;
  id: number;
}

=======
    movie: Movie;
    preview: boolean;
  }
>>>>>>> upstream/main
// 영화 하나하나 담는 요소

const MovieItem: React.FC<MovieItemProps> = ({
  id,
  movie,
  preview = false,
}) => {
  const router = useRouter();
  const movieClicked = () => {
    router.push(`/main/detail/${id}`);
  };

  // const movieClicked = () => {
  //   router.push({
  //     pathname: `/main/detail/${id}`,
  //     query: {
  //       title: movie.title,
  //       poster_path: movie.poster_path,
  //     },
  //   });
  // };
  //넘겨주는 방법이 없나..?

  return (
    <MovieCard>
      <Poster
        $preview={preview}
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        onClick={movieClicked}
      />
    </MovieCard>
  );
};

export default MovieItem;

const MovieCard = styled.div`
  width: 120px;
`;

const Poster = styled.img<{ $preview?: boolean }>`
<<<<<<< HEAD
  width: ${({ $preview }) =>
    $preview
      ? "103px"
      : "103px"}; /* preview일 때는 너비와 높이 100px로 설정해서 정원형으로 만들 수 있도록 함*/
  height: ${({ $preview }) => ($preview ? "103px" : "161px")};
  border-radius: ${({ $preview }) => ($preview ? "50%" : "8px")};
  object-fit: cover;
  cursor: pointer;
`;
=======
    width: 103px;
    height: ${({ $preview }) => ($preview ? "103px" : "161px")};
    border-radius: ${({ $preview }) => ($preview ? "50%" : "8px")};
    object-fit: cover;
    cursor: pointer;
`;
>>>>>>> upstream/main
