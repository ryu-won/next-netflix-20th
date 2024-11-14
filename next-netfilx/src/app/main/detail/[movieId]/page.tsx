import { getMovieDetail } from "@/app/lib/movieApi";

interface IMovieDetail {
  params: { movieId: string };
}

export default async function MovieDetail({ params }: IMovieDetail) {
  const movieId = await params.movieId;
  const movie = await getMovieDetail(movieId);
  console.log(movie);

  return <div>sdf</div>;
}
