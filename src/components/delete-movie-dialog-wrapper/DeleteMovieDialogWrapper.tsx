import { useNavigate, useParams } from "react-router-dom";
import { DeleteMovieDialog } from "../delete-movie-dialog/DeleteMovieDialog";
import { MoviesApiService } from "../../services/movies-api.service";

export function DeleteMovieDialogWrapper() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  async function handleDeleteDialogClose(isConfirmed: boolean) {
    if (isConfirmed && movieId) {
      await MoviesApiService.delete(movieId);
      navigate("/");
    } else {
      navigate(`/${movieId}`);
    }
  }

  return (
    <DeleteMovieDialog
      isOpen
      onClose={(isConfirmed) => handleDeleteDialogClose(isConfirmed)}
    />
  );
}
