import "./delete-movie-dialog.css";
import { Dialog } from "../dialog/Dialog";
import { DeleteMovieProps } from "./delete-movie-props";

export function DeleteMovieDialog({ isOpen, onClose }: DeleteMovieProps) {
  return (
    <Dialog
      title={"Delete Movie"}
      isOpen={isOpen}
      onClose={() => onClose(false)}
    >
      <p className="delete-dialog-description">
        Are you sure you want to delete this movie?
      </p>

      <button
        className="flat-button delete-dialog-confirm-button"
        id="confirm-delete-movie-button"
        onClick={() => onClose(true)}
      >
        Confirm
      </button>
    </Dialog>
  );
}
