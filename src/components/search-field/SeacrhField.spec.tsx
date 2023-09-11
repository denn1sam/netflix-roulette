import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { SearchField } from "./SearchField";

test("should display initial search", () => {
  const initialSearch = "initial search";
  const onSearch = () => null;
  render(<SearchField onSearch={onSearch} initialSearch={initialSearch} />);

  const searchInputElement = screen.getByTestId("search-input");

  expect(searchInputElement).toHaveValue(initialSearch);
});

test("should check if OnChange is called with proper value on click on submit button", async () => {
  const onSearch = jest.fn();
  const newSearchValue = "new search value";
  render(<SearchField onSearch={onSearch} />);

  const searchInputElement = screen.getByTestId("search-input");
  const submitButtonElement = screen.getByTestId("submit");

  await userEvent.type(searchInputElement, newSearchValue);
  await userEvent.click(submitButtonElement);

  expect(onSearch).toHaveBeenCalledWith(newSearchValue);
});

test("should check if OnChange is called with proper value on press enter", async () => {
  const handleSearch = jest.fn();
  const newSearchValue = "new search value";
  render(<SearchField onSearch={handleSearch} />);

  const searchInputElement = screen.getByTestId("search-input");

  await userEvent.type(searchInputElement, newSearchValue);
  await fireEvent.keyUp(searchInputElement, {
    key: "Enter",
    code: "Enter",
    charCode: 13,
  });

  expect(handleSearch).toHaveBeenCalledWith(newSearchValue);
});
