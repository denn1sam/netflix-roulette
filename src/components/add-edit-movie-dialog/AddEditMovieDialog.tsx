import { AddEditMovieForm } from "../add-edit-movie-form/AddEditMovieForm";
import { Dialog } from "../dialog/Dialog";
import { AddEditMovieDialogProps } from "./add-edit-movie-dialog-props.interface";

export function AddEditMovieDialog({
  movie,
  isOpen,
  onClose,
}: AddEditMovieDialogProps) {
  return (
    <Dialog
      title={movie ? "Edit Movie" : "Add Movie"}
      isOpen={isOpen}
      onClose={() => onClose()}
    >
      <AddEditMovieForm movie={movie}></AddEditMovieForm>
    </Dialog>
  );
}
