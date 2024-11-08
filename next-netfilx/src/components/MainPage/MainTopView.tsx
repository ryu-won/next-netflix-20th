import styled from "styled-components";
import MainButtons from "./MainButtons";
import { getPreviewMovies } from "@/app/lib/movieApi";
import { useEffect, useState } from "react";

export default function MainTopView() {
  const [firstMoviePath, setFirstMoviePath] = useState<number>();

  useEffect(() => {
    async function fetchData() {
      const getPath = await getPreviewMovies();
      const ramdom = Math.floor(Math.random() * 10);

      setFirstMoviePath(getPath[ramdom]?.poster_path);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <MainMoviePoster
        src={`https://image.tmdb.org/t/p/w1280${firstMoviePath}`}
      >
        <BottomContainer>
          <Top10 src="/top_10.svg" alt="" />
          <span>#2 in Korea Today</span>
        </BottomContainer>
      </MainMoviePoster>

      <MainButtons />
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
