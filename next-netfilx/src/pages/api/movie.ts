import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.NETFLIX_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { endpoint } = req.query;

  const response = await fetch(
    `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}`
  );
  
  const data = await response.json();
  res.status(200).json(data);
}
