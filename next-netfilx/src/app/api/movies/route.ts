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

  const response = await fetch(
    `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}`
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}
