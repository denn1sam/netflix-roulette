import { Meta } from "@storybook/react";
import "../components/select-field/select-field.css";
import { MovieDetails } from "../components/movie-details/MovieDetails";
import { moviesList } from "../pages/home/mocks/movies-list.mock";
import { MovieDetailsProps } from "../components/movie-details/movie-details.model";

export default {
  title: "Components/MovieDetails",
  component: MovieDetails,
} as Meta;

export const Default = (args: MovieDetailsProps) => {
  return <MovieDetails {...args} movie={moviesList[0]} />;
};
