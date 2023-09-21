import { Meta } from "@storybook/react";
import { MovieDetails } from "../components/movie-details/MovieDetails";
import { MOVIES_LIST } from "../pages/home/mocks/movies-list.mock";
import { MovieDetailsProps } from "../components/movie-details/movie-details.model";
import { MovieCard } from "../components/movie-card/MovieCard";

export default {
  title: "Components/MovieTile",
  component: MovieDetails,
} as Meta;

export const Default = (args: MovieDetailsProps) => {
  return (
    <div
      style={{ maxWidth: "300px", maxHeight: "300px", backgroundColor: "grey" }}
    >
      <MovieCard {...args} movie={MOVIES_LIST[0]} />
    </div>
  );
};
