import { NextResponse } from "next/server";

const API_KEY = process.env.NETFLIX_API_KEY;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get("endpoint");

  if (!endpoint) {
    return NextResponse.json(
      { error: "Endpoint is required" },
      { status: 400 }
    );
  }

  // endpoint가 이미 movie/id 형식인 경우와 아닌 경우를 구분
  const baseUrl = `https://api.themoviedb.org/3/movie/`;
  const url = `${baseUrl}${endpoint}?api_key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return NextResponse.json(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
