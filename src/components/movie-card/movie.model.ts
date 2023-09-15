export interface MovieCardProps {
  movie: MovieModel;
  children?: React.JSX.Element;
  onMenuClick: () => void;
  onDetailsClick: () => void;
}

export interface MovieModel {
  name: string;
  imageUrl: string;
  year: number;
  genres: string[];
  id: string;
}
