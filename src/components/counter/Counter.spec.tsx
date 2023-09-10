import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Counter } from "./Counter";

test("should display initial count", () => {
  const initialCount = 20;
  render(<Counter initialCount={initialCount} />);

  const countElement = screen.getByTestId("count");

  expect(countElement).toHaveTextContent(`Count: ${initialCount}`);
});

test("should increment counter", async () => {
  render(<Counter initialCount={10} />);

  const countElement = screen.getByTestId("count");
  const incrementElement = screen.getByTestId("increment");

  await userEvent.click(incrementElement);

  expect(countElement).toHaveTextContent(`Count: ${11}`);
});

test("should decrement counter", async () => {
  render(<Counter initialCount={10} />);

  const countElement = screen.getByTestId("count");
  const decrementElement = screen.getByTestId("decrement");

  await userEvent.click(decrementElement);

  expect(countElement).toHaveTextContent(`Count: ${9}`);
});
