import { Movie } from "@/components/MainPage/MovieCategoriesList";

const fetchMovies = async (endpoint: string, query?: string, page?: number) => {
  try {
    // 검색어가 있으면 query 파라미터에 추가, 없으면 기본 값 ""
    const searchQuery = query ? `&query=${encodeURIComponent(query)}` : "";
    const pageQuery = page ? `&page=${page}` : "";
    const response = await fetch(
      `/api/movies?endpoint=${endpoint}${searchQuery}${pageQuery}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Error fetching ${endpoint} movies:`, error);
    throw error;
  }
};

export default fetchMovies;

export const getPopularMovies = () => fetchMovies("movie/popular");
export const getPreviewMovies = () => fetchMovies("movie/top_rated");
export const getUpcomingMovies = () => fetchMovies("movie/upcoming");
export const getTrendingMovies = () => fetchMovies("trending/movie/week");
export const getNGTrendingMovies = () => fetchMovies("trending/movie/day");
export const getSearchMovies = (query: string, page: number = 5) =>
  fetchMovies("search/movie", query, page);
// 검색어 입력받아 검색어(query 값) 기준 영화 요소들 불러오기
// debounce 이용
// query를 fetchMovies로 전달해 삼항연산자 이용 -> query가 필요한 요청과 안 필요한 요청 구분

// 배열을 무작위로 섞는 함수
const shuffleArray = (array: Movie[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // 배열 요소를 교환
  }
  return array;
};

// getRandomMovies 함수에서 인기 영화를 가져와서 랜덤으로 렌더링
export const getRandomMovies = async () => {
  const popularMovies = await getPopularMovies(); // 인기 영화 20개 가져오기
  const shuffledMovies = shuffleArray(popularMovies); // 영화 순서 랜덤으로 섞기
  return shuffledMovies;
};
