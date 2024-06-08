import type { NextApiRequest, NextApiResponse } from 'next';
import movies from "../api/movies.json"

export type Movie = {
};

export async function fetchMovies(): Promise<Movie[]> {
  movies.forEach((movie) => {
    if (movie.vote_average > 5) movie.vote_average = Math.round(movie.vote_average / 2);
    })
  return movies;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movie[]>) {
  res.status(200).json(await fetchMovies());
}