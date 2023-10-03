import { MovieModel } from "../../models";

export interface MoviesListProps extends React.PropsWithChildren {
  onMovieClick: (movie: MovieModel) => void;
}
