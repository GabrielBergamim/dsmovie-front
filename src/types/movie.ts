export interface MovieDTO {
  id: number;
  title: string;
  score: number;
  count: number;
  image: string;
}

export interface ScoreEntradaDTO {
  movieId: number;
  email: string;
  score: number;
}