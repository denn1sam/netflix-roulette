import { useLoaderData, useNavigate } from "react-router-dom";
import { AddEditMovieDialog } from "../add-edit-movie-dialog/AddEditMovieDialog";
import { MovieModel } from "../../models";
import { MoviesApiService } from "../../services/movies-api.service";

export function AddEditMovieDialogWrapper() {
  const navigate = useNavigate();

  const { selectedMovieDetails = undefined } = (useLoaderData() ?? {}) as {
    selectedMovieDetails?: MovieModel;
  };

  async function handleOnClose(movie: MovieModel | undefined): Promise<void> {
    if (movie) {
      if (movie?.id) {
        await MoviesApiService.update(movie);
      } else {
        await MoviesApiService.create(movie);
      }

      navigate(`/${movie.id}`);
    } else {
      navigate("/");
    }
  }

  return (
    <AddEditMovieDialog
      movie={selectedMovieDetails}
      isOpen={true}
      onClose={(movie) => handleOnClose(movie)}
    />
  );
}
