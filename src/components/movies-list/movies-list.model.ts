import { MovieModel } from "../../models/movie.model";

export interface MoviesListProps {
  movies: MovieModel[];
  onMovieClick: (movie: MovieModel) => void;
  children?: React.JSX.Element;
}
