import { getMovieDetail } from "@/app/lib/movieApi";

interface IMovieDetail {
  params: { movieId: number };
}

export default async function MovieDetail({
  params: { movieId },
}: IMovieDetail) {
  const movie = await getMovieDetail(movieId);
  console.log(movie);

  return <div>sdf</div>;
}
