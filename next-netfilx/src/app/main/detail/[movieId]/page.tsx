import { MovieDetailClient } from "@/components/DetailPage/MovieDetailClient";

interface IMovieDetail {
  params: { movieId: string };
}

export default async function MovieDetail({ params }: IMovieDetail) {
  const movieId = await Promise.resolve(params.movieId);

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NETFLIX_API_KEY}`
  );
  const data = await response.json();
  console.log(data);

  return <MovieDetailClient data={data} />;
}
