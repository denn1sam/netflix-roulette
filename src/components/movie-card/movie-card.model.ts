import { MovieModel } from "../../models/movie.model";

export interface MovieCardProps {
  movie: MovieModel;
  children?: React.JSX.Element;
  onMenuClick?: () => void;
  onDetailsClick?: () => void;
}
