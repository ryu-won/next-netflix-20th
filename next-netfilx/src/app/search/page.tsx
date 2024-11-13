"use client"; 
import { PageContainer } from "../main/page";

const SearchPage: React.FC = () => {
  return (
    <PageContainer>
      <p>검색 컴포넌트</p>
      <p>검색 결과 리스트 컴포넌트 - listItem 하나 하나 누르면 디테일로 가게</p>
    </PageContainer>
  );
};

export default SearchPage;