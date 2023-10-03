import { API_DOMAIN } from "../config/api-domain.config";
import { GenresEnum } from "../models";
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
}
