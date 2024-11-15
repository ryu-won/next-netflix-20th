"use client";

import { useState, useEffect, useCallback } from "react";
import SearchBox from "@/components/SearchPage/SearchBox";
import { getSearchMovies, getRandomMovies } from "../lib/movieApi";
import SearchResultList from "@/components/SearchPage/SearchResultList";
import { Movie } from "@/components/MainPage/MovieCategoriesList";
import styled from "styled-components";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState(""); // 검색어 상태
  const [results, setResults] = useState<Movie[]>([]); // 검색 결과 상태
  const [page, setPage] = useState(1); // 현재 페이지
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [hasMoreResults, setHasMoreResults] = useState(true); // 더 많은 결과 여부

  // 초기화 시 무작위 영화 불러오기
  useEffect(() => {
    if (!query) {
      async function fetchRandomMovies() {
        try {
          setIsLoading(true);
          const movies = await getRandomMovies();
          setResults(movies); // 무작위 영화 목록 저장
        } catch (error) {
          console.error("Error fetching random movies:", error);
        } finally {
          setIsLoading(false);
        }
      }
      fetchRandomMovies();
    }
  }, [query]);

  // 검색 시 영화 불러오기
  useEffect(() => {
    if (query) {
      async function fetchSearchResults() {
        try {
          setIsLoading(true);
          const data = await getSearchMovies(query, page); // 현재 페이지에 맞는 데이터 요청
          setResults((prev) => [...prev, ...data]); // 기존 데이터에 새로운 검색 결과 추가

          // 더 이상 검색 결과가 없으면 hasMoreResults를 false로 설정
          if (data.length === 0 || data.length < 20) {
            setHasMoreResults(false);
          }
        } catch (error) {
          console.error("Error fetching search results:", error);
        } finally {
          setIsLoading(false);
        }
      }

      // 검색 결과를 가져올 때마다 페이지 번호를 증가시키지 않도록 hasMoreResults 체크
      if (hasMoreResults) {
        fetchSearchResults();
      }
    }
  }, [query, page, hasMoreResults]); // 쿼리나 페이지가 변경될 때마다 실행

  // 무한 스크롤 감지
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !isLoading &&
      hasMoreResults
    ) {
      setPage((prev) => prev + 1); // 페이지 증가
    }
  }, [isLoading, hasMoreResults]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // 검색 박스 핸들러
  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setPage(1); // 새 검색 시 페이지 초기화
    setResults([]); // 기존 데이터 초기화
    setHasMoreResults(true); // 더 많은 결과를 요청 가능하게 설정
  };

  return (
    <PageContainer>
      <SearchBox onSearch={handleSearch} />
      <SearchResultList results={results} isLoading={isLoading} />
    </PageContainer>
  );
};

export default SearchPage;

const PageContainer = styled.div`
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
