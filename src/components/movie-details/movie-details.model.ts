import { MovieModel } from "../../models";

export interface MovieDetailsProps extends React.PropsWithChildren {
  movie: MovieModel;
}
