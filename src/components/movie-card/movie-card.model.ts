import { MovieModel } from "../../models/movie.model";

export interface MovieCardProps extends React.PropsWithChildren {
  movie: MovieModel;
  onMenuClick?: () => void;
  onDetailsClick?: () => void;
}
