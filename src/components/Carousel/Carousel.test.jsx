import { cleanup, render } from "@testing-library/react";
import React from "react";
import { Carousel } from "./Carousel";

afterEach(cleanup);

test("Carousel renders null if no props passed", () => {
  const { queryByTestId } = render(<Carousel />);

  expect(queryByTestId("carousel-container")).toBeNull();
});

// test("Carousel renders correctly with props", () => {
//   const { getByTestId } = render(
//     <Carousel
//       name="backgrounds"
//       bodySectionCollection={["this_is_a_base64_mock"]}
//     />
//   );

//   expect(getByTestId("carousel-container")).toBeTruthy();
// });
