import React from "react";
import { BodyPart } from "./BodyPart";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("BodyPart renders with empty div if no props are passed", () => {
  const { getByTestId } = render(<BodyPart />);
  const emptyDiv = getByTestId("empty-div");

  expect(emptyDiv).toBeTruthy();
});

test("BodyPart renders img if required props are passed", () => {
  const { getByTestId } = render(<BodyPart isSelected imageSrc="imageSrc" />);

  expect(getByTestId("image")).toBeTruthy();
});