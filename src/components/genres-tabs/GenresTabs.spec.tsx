import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { GenresTabs } from "./GenresTabs";

test("should display all passed genres", () => {
  const genres = ["genre1", "genre2", "genre3", "genre4"];
  const handleOnSelect = () => null;
  render(<GenresTabs genres={genres} onSelect={handleOnSelect} />);

  const genresListElement = screen.getByTestId("genres-list");

  expect(genresListElement).toHaveTextContent(genres.join(""));
});

test("should check if tab of selected genre is highlighted", async () => {
  const genres = ["genre1", "genre2", "genre3", "genre4"];
  const selectedGenre = genres[2];
  const handleOnSelect = () => null;

  render(<GenresTabs genres={genres} onSelect={handleOnSelect} />);

  const selectedGenreTabElement = screen.getByTestId(selectedGenre);

  await fireEvent.click(selectedGenreTabElement);

  expect(selectedGenreTabElement).toHaveClass("active");
});

test("should check if OnSelect is called with proper value on click on tab", async () => {
  const handleOnSelect = jest.fn();
  const genres = ["genre1", "genre2", "genre3", "genre4"];
  const selectedGenre = genres[2];

  render(<GenresTabs genres={genres} onSelect={handleOnSelect} />);

  const selectedGenreTabElement = screen.getByTestId(selectedGenre);

  await fireEvent.click(selectedGenreTabElement);

  expect(handleOnSelect).toHaveBeenCalledWith(selectedGenre);
});
