import { MovieModel } from "../../models";

export interface MoviesListProps extends React.PropsWithChildren {
  movies: MovieModel[];
  onMovieClick: (movie: MovieModel) => void;
}
