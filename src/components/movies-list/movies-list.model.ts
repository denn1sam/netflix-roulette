import { MovieModel } from "../../models/movie.model";

export interface MoviesListProps extends React.PropsWithChildren {
  movies: MovieModel[];
  onMovieClick: (movie: MovieModel) => void;
}
