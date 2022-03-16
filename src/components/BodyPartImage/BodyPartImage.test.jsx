import { cleanup, render } from "@testing-library/react";
import React from "react";
import { BodyPartImage } from "./BodyPartImage";

afterEach(cleanup);

test("BodyPart renders with empty div if no props are passed", () => {
  const { getByTestId } = render(<BodyPartImage />);

  expect(getByTestId("empty-div")).toBeTruthy();
});

// test("BodyPart renders img if required props are passed", () => {
// const { getByTestId } = render(<BodyPart isSelected imageSrc="imageSrc" />);
// expect(getByTestId("image")).toBeTruthy();
// expect(true).toBeTruthy();
// });
