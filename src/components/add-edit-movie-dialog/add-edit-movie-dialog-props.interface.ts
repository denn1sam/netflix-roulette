import { MovieModel } from "../../models";

export interface AddEditMovieDialogProps {
  movie?: MovieModel;
  isOpen: boolean;
  onClose: (movie?: MovieModel) => MovieModel | void | Promise<void>;
}
