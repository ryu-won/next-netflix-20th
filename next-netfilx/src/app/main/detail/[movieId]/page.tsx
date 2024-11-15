import { MovieDetailClient } from "@/components/DetailPage/MovieDetailClient";

type PageProps = {
  params: Promise<{ movieId: string }>;
};

export default async function MovieDetail(props: PageProps) {
  const { movieId } = await props.params;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NETFLIX_API_KEY}`
  );
  const data = await response.json();

  return <MovieDetailClient data={data} />;
}
