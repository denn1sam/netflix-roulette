import { Meta } from "@storybook/react";
import "../components/select-field/select-field.css";
import { MovieDetails } from "../components/movie-details/MovieDetails";
import { MOVIES_LIST } from "../pages/home/mocks/movies-list.mock";
import { MovieDetailsProps } from "../components/movie-details/movie-details.model";

export default {
  title: "Components/MovieDetails",
  component: MovieDetails,
} as Meta;

export const Default = (args: MovieDetailsProps) => {
  return <MovieDetails {...args} movie={MOVIES_LIST[0]} />;
};
