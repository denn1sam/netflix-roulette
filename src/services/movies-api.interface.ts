import { GenresEnum, MovieModel } from "../models";

export interface GetMovieResponse {
  data: MovieModel[];
  limit: number;
  offset: number;
  totalAmount: number;
}

export interface GetMoviePayload {
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  search?: string;
  searchBy?: "genres" | "title";
  filter?: GenresEnum[];
  offset?: number;
  limit?: number;
}
