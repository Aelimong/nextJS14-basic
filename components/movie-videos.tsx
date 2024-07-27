import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  throw new Error("something broke");
  // const response = await fetch(`${API_URL}/${id}/video`);
  // return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  console.log(videos);
  return <h6>{JSON.stringify(videos)}</h6>;
}