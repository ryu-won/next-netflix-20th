import { motion } from "framer-motion";
import styled from "styled-components";
import MainButtons from "./MainButtons";
import { getPreviewMovies } from "@/app/lib/movieApi";
import { useEffect, useState } from "react";

export default function MainTopView() {
  const [firstMoviePath, setFirstMoviePath] = useState<number>();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    async function fetchData() {
      const getPath = await getPreviewMovies();
      const ramdom = Math.floor(Math.random() * 10);
      setFirstMoviePath(getPath[ramdom]?.poster_path);
    }
    fetchData();
  }, []);

  return (
    <Container
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <MainMoviePoster
        as={motion.div}
        src={`https://image.tmdb.org/t/p/w1280${firstMoviePath}`}
      >
        <BottomContainer as={motion.div} variants={itemVariants}>
          <Top10
            as={motion.img}
            src="/top_10.svg"
            alt=""
            whileHover={{ scale: 1.2 }}
          />
          <motion.span>#2 in Korea Today</motion.span>
        </BottomContainer>
      </MainMoviePoster>

      <motion.div variants={itemVariants}>
        <MainButtons />
      </motion.div>
    </Container>
  );
}

const MainMoviePoster = styled.div<{ src: string }>`
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
    url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  position: relative;
  &::after {
    content: "";
    display: block;
    padding-top: 110%;
  }
`;

const Container = styled.div`
  position: relative;
  margin-bottom: 43px;
`;

const Top10 = styled.img`
  width: 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: fit-content;
`;
