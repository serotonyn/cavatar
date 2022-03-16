import { cleanup, render } from "@testing-library/react";
import React from "react";
import { DisplayAvatar } from "./DisplayAvatar";

afterEach(cleanup);

test("DisplayAvatar renders a button", () => {
  const { getByTestId } = render(<DisplayAvatar />);
  expect(getByTestId("display-avatar")).toBeTruthy();
});
