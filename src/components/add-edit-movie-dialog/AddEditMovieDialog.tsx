import { MovieModel } from "../../models";
import { AddEditMovieForm } from "../add-edit-movie-form/AddEditMovieForm";
import { Dialog } from "../dialog/Dialog";
import { AddEditMovieDialogProps } from "./add-edit-movie-dialog-props.interface";

export function AddEditMovieDialog({
  movie,
  onClose,
}: AddEditMovieDialogProps) {
  return (
    <Dialog
      isOpen
      onClose={() => onClose()}
      title={movie ? "Edit Movie" : "Add Movie"}
    >
      <AddEditMovieForm
        movie={movie}
        submitForm={(movie) => onClose(movie) as MovieModel}
      ></AddEditMovieForm>
    </Dialog>
  );
}
