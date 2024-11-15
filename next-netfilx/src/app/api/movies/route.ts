import { NextResponse } from 'next/server';

const API_KEY = process.env.NETFLIX_API_KEY;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get('endpoint');
  const query = searchParams.get('query');

  if (!endpoint) {
    return NextResponse.json({ error: 'Endpoint is required' }, { status: 400 });
  }

  // API 요청 URL에 검색어가 포함되도록 수정
  const url = `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}${query ? `&query=${encodeURIComponent(query)}` : ""}`;
  
  const response = await fetch(url);

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }

  const data = await response.json();
  return NextResponse.json(data);
}
