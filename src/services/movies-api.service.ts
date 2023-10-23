import { API_DOMAIN } from "../config/api-domain.config";
import { GenresEnum, MovieModel } from "../models";
import { GetMoviePayload, GetMovieResponse } from "./movies-api.interface";

export class MoviesApiService {
  private static API_DOMAIN = API_DOMAIN;

  public static async get(params: GetMoviePayload): Promise<GetMovieResponse> {
    const {
      sortBy = "release_date",
      sortOrder = "desc",
      search = "",
      searchBy = "title",
    } = params;
    const offset = params.offset ? `${params.offset}` : "10";
    const limit = params.limit ? `${params.limit}` : "10";
    const genresFilter = params.filter?.join(",") || "";

    const urlSearchParams = new URLSearchParams({
      sortBy,
      sortOrder,
      search,
      offset,
      limit,
      searchBy,
      filter: genresFilter.replace(GenresEnum.All, ""),
    });

    return fetch(`${this.API_DOMAIN}/movies?${urlSearchParams}`)
      .then((response) => response.json())
      .catch(() => ({
        data: [],
      }));
  }

  public static async getById(id: string | number): Promise<GetMovieResponse> {
    return fetch(`${this.API_DOMAIN}/movies/${id}`)
      .then((response) => response.json())
      .catch(() => ({
        data: [],
      }));
  }

  public static async update(movie: MovieModel): Promise<GetMovieResponse> {
    return fetch(`${this.API_DOMAIN}/movies`, {
      method: "PUT",
      body: JSON.stringify(movie),
    })
      .then((response) => response.json())
      .catch(() => ({
        data: [],
      }));
  }

  public static async create(movie: MovieModel): Promise<GetMovieResponse> {
    return fetch(`${this.API_DOMAIN}/movies`, {
      method: "POST",
      body: JSON.stringify(movie),
    })
      .then((response) => response.json())
      .catch(() => ({
        data: [],
      }));
  }

  public static async delete(id: string | number): Promise<GetMovieResponse> {
    return fetch(`${this.API_DOMAIN}/movies/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .catch(() => ({
        data: [],
      }));
  }
}
