import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}
// default component가 받는 param과 동일한 것을 전달 받는다
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return (
    <>
      <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
          <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
          <MovieVideos id={id} />
        </Suspense>
      </div>
    </>
  );
}
