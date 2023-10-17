import { useLoaderData, useNavigate } from "react-router-dom";
import { MovieDetails } from "../movie-details/MovieDetails";
import { MovieModel } from "../../models";
import "./movie-details-wrapper.css";
import { PageTitle } from "../page-title/PageTitle";

export function MovieDetailsWrapper() {
  const navigate = useNavigate();
  const { selectedMovieDetails } = useLoaderData() as {
    selectedMovieDetails: MovieModel;
  };

  return selectedMovieDetails?.id ? (
    <MovieDetails movie={selectedMovieDetails} />
  ) : (
    <div className="not-found-section">
      <PageTitle isDetailsView={true} onBackToSearch={() => navigate("/")} />

      <h2>Whoops! 404...</h2>
      <p>Movie not found</p>
    </div>
  );
}
