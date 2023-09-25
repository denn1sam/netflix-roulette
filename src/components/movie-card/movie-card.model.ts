import { MovieModel } from "../../models";

export interface MovieCardProps extends React.PropsWithChildren {
  movie: MovieModel;
  onMenuClick?: () => void;
  onDetailsClick?: () => void;
}
