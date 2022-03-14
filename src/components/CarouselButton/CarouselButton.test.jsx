import React from "react";
import { CarouselButton } from "./CarouselButton";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("CarouselButton renders a button", () => {
  const { getByTestId } = render(<CarouselButton />);

  expect(getByTestId("carousel-button")).toBeTruthy();
});

test("CarouselButton triggers event on click", () => {
  const handleClick = jest.fn();
  const { getByTestId } = render(<CarouselButton handleClick={handleClick} />);
  getByTestId("carousel-button").click();

  expect(handleClick).toHaveBeenCalled();
});
