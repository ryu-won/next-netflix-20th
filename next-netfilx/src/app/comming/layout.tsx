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
