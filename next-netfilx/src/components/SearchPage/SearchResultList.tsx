import Image from "next/image";
import styled from "styled-components";
import play_circle from "../../../public/SearchPage/play-circle.svg";
import default_poster from "../../../public/SearchPage/default-poster.svg"; // 기본 이미지 경로
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null; // `poster_path`가 null일 수 있음
}
// 개별 아이템을 위한 컴포넌트
const AnimatedListItem = ({ movie }: { movie: Movie }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, {
    once: false,
    amount: 0.9,
    margin: "0px 0px 50% 0px",
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
        duration: 0.9,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <ListItem
      ref={itemRef}
      layoutId={`${movie.id}`}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <StyledLink href={`/main/detail/${movie.id}`}>
        <Poster
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
              : default_poster.src
          }
          alt={movie.title}
        />
        <Title>{movie.title}</Title>
        <ImageWrapper>
          <Image src={play_circle} alt="play button" />
        </ImageWrapper>
      </StyledLink>
    </ListItem>
  );
};

const SearchResultList: React.FC<{ results: Movie[]; isLoading: boolean }> = ({
  results,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <ListContainer>
        <TopSearches>Loading...</TopSearches>
        {Array.from({ length: 9 }).map((_, index) => (
          <SkeletonItem key={index}>
            <SkeletonPoster />
            <SkeletonTitle />
          </SkeletonItem>
        ))}
      </ListContainer>
    );
  } // 검색 페이지 들어가면 9개의 영화 요소가 보이기에 9개로 설정

  return (
    <ListContainer>
      <TopSearches>Top Searches</TopSearches>
      {results.map((movie) => (
        <AnimatedListItem key={movie.id} movie={movie} />
      ))}
    </ListContainer>
  );
};

export default SearchResultList;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

const TopSearches = styled.p`
  font-size: 26.75px;
  font-weight: 700;
  color: white;
  margin: 15px;
`;

const ListItem = styled(motion.li)`
  width: 100%;
  background-color: #424242;
  margin-bottom: 5px;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100%;
`;

const Poster = styled(motion.img)`
  min-width: 146px;
  height: 76px;
  border-radius: 2px;
  object-fit: cover;
  margin-right: 15px;
`;

const Title = styled.span`
  font-size: 14.72px;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 10px;
`;

/* 스켈레톤 스타일 */
const SkeletonItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 10px;
  background-color: #424242;
  border-radius: 4px;
`;

const SkeletonPoster = styled.div`
  width: 146px;
  height: 76px;
  background-color: #5c5c5c;
  border-radius: 2px;
  margin-right: 15px;
`;

const SkeletonTitle = styled.div`
  width: 50%;
  height: 16px;
  background-color: #5c5c5c;
  border-radius: 4px;
`;
