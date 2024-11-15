"use client"; // BottomNavBar는 클릭 이벤트가 주로 발생하기에 클라이언트 컴포넌트임. 이를 임포트하기에 Main도 클라이언트?

import MovieCategoriesList from "@/components/MainPage/MovieCategoriesList";
import styled from "styled-components";
import MainTopView from "@/components/MainPage/MainTopView";
import Header from "@/components/MainPage/Header";
import { Suspense } from "react";

const MainPage: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <Suspense fallback={<h1>loading main view</h1>}>
        <MainTopView />
      </Suspense>
      <Suspense fallback={<h1>loading movie categories list</h1>}>
        <MovieCategoriesList />
      </Suspense>
    </PageContainer>
  );
};

export default MainPage;

export const PageContainer = styled.div`
  width: 375px;
  height: 100vh;
  margin: 0 auto;
  overflow-y: auto; /* 전체 화면이 아닌 부모 요소 내에서 스크롤 가능하게 설정 */
  background-color: black;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
`;
