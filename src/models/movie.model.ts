export interface MovieModel {
  name: string;
  imageUrl: string;
  year: number;
  genres: string[];
  description?: string;
  rate?: string;
  duration?: string;
  id: string;
}
