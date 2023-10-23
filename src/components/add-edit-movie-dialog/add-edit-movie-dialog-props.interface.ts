import { MovieModel } from "../../models";

export interface AddEditMovieDialogProps {
  movie?: any;
  isOpen: boolean;
  onClose: (movie?: MovieModel) => MovieModel | void | Promise<void>;
}
