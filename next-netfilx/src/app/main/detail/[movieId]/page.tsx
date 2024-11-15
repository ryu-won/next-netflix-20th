interface IMovieDetail {
  params: { movieId: string };
}

export default async function MovieDetail({ params }: IMovieDetail) {
  return <div>sdf</div>;
}
