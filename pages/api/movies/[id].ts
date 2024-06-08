import { fetchMovies, Movie } from '../movies';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function fetchMovieById(id: string): Promise<Movie | undefined> {
  const movies = await fetchMovies();
  return movies.find((movie) => `${movie.id}` === id);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movie>) {
  const movie = await fetchMovieById(req.query.id as string);
  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(404).json({ error: 'Not found' } as any);
  }
}
