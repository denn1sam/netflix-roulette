import { Outlet, useLoaderData } from "react-router-dom";
import { MovieDetails } from "../movie-details/MovieDetails";
import { MovieModel } from "../../models";
import "./movie-details-wrapper.css";
import { PageTitle } from "../page-title/PageTitle";

export function MovieDetailsWrapper() {
  const { selectedMovieDetails } = useLoaderData() as {
    selectedMovieDetails: MovieModel;
  };

  if (selectedMovieDetails?.id) {
    return (
      <>
        <MovieDetails movie={selectedMovieDetails} />
        <Outlet />
      </>
    )
  }

  return (
    <div className="not-found-section">
      <PageTitle isDetailsView />
      <h2>Whoops! 404...</h2>
      <p>Movie not found</p>
    </div>
  );
}
