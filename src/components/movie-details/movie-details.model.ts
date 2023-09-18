import { MovieModel } from "../../models/movie.model";

export interface MovieDetailsProps {
  movie: MovieModel;
  children?: React.JSX.Element;
}
