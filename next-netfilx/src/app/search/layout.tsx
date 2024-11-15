"use client";

import BottomNavBar from "@/components/BottomNavBar";
import styled from "styled-components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      {children}
      <BottomNavBar />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
`;

// 이거 루트 레이아웃에 추가하고 홈, 검색 페이지 말고 다른 데에는 바텀 내브바 + 로딩 화면으로 하자
