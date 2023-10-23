import { MovieModel } from "../../models";

export interface AddEditMovieFormProps {
  submitForm: (movie: MovieModel) => MovieModel;
  movie?: MovieModel;
}
