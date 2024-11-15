import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface MovieItemProps {
  movie: {
    title: string;
    poster_path: string;
  };
  preview: boolean;
  id: number;
}

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
    <MovieCard
      whileHover={{ scale: 1.1 }}
      layoutId={`${id}`}
      whileTap={{ scale: 1.1 }}
    >
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

const MovieCard = styled(motion.div)`
  width: 120px;
`;

const Poster = styled.img<{ $preview?: boolean }>`
  width: 103px;
  height: ${({ $preview }) => ($preview ? "103px" : "161px")};
  border-radius: ${({ $preview }) => ($preview ? "50%" : "8px")};
  object-fit: cover;
  cursor: pointer;
`;
