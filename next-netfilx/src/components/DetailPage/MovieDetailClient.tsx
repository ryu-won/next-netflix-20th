"use client";
import { Suspense } from "react";
import styled from "styled-components";
import PlayIcon from "../../../public/PlayIcon";

interface MovieDetail {
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  // 필요한 다른 속성들 추가
}
export function MovieDetailClient({ data }: { data: MovieDetail }) {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <BigWrapper>
        <ImageWrapper
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
        />
        <BottomWrapper>
          <PlayButtonWrapper>
            <PlayIcon />
          </PlayButtonWrapper>
          <h2>Previews</h2>
          <span>{data.overview}</span>
        </BottomWrapper>
      </BigWrapper>
    </Suspense>
  );
}
const BigWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;
const ImageWrapper = styled.div<{ src: string }>`
  width: 100%;
  position: relative;
  height: 50vh;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
    url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  width: 100%;
  position: relative;
`;

const PlayButtonWrapper = styled.div`
  width: 90%;
  text-align: center;
  padding: 8px 0;
  background-color: #c4c4c4;
  border-radius: 5px;
  display: inline-block;
`;

const BottomWrapper = styled.div`
  margin: 0 auto;
  padding-left: 36px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  & h1 {
    margin-top: 7px;
  }

  & span {
    font-size: 11px;
    font-weight: 400;
  }
`;
