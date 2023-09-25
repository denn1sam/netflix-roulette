import { SelectOption } from "../select-input/select-input.interface";

export interface MovieFormModel {
  title?: string;
  tagline?: string;
  vote_average?: number;
  vote_count?: number;
  release_date?: string | number;
  poster_path?: string;
  overview?: string;
  budget?: number;
  revenue?: number;
  genres?: SelectOption[];
  runtime?: number;
  id?: string;
}
