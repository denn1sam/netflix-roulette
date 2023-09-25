import { GenresEnum } from "../../models";
import { SelectOption } from "../select-input/select-input.interface";
import { MovieFormModel } from "./add-edit-movie-form.interface";

export const INITIAL_FORM_STATE: MovieFormModel = {
  title: "",
  tagline: "",
  vote_average: undefined,
  vote_count: undefined,
  release_date: undefined,
  poster_path: "",
  overview: "",
  budget: undefined,
  revenue: undefined,
  genres: [],
  runtime: undefined,
};

export const GENRES_LIST: SelectOption[] = [
  { label: "Comedy", value: GenresEnum.Comedy },
  { label: "Crime", value: GenresEnum.Crime },
  { label: "Documentary", value: GenresEnum.Documentary },
  { label: "Horror", value: GenresEnum.Horror },
];
