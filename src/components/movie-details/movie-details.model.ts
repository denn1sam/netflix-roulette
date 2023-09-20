import { MovieModel } from "../../models/movie.model";

export interface MovieDetailsProps extends React.PropsWithChildren {
  movie: MovieModel;
}
