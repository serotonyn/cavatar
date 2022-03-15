import React from "react";
import { Carousel } from "../Carousel/Carousel";
import { DisplayAvatar } from "../DisplayAvatar/DisplayAvatar";
import { cavatar, parts } from "../state";

export const Carousels = ({}) => {
  const next = (name: string) => {
    cavatar.next(name);
  };
  const prev = (name: string) => {
    cavatar.prev(name);
  };

  return (
    <>
      <Carousel
        bodySectionCollection={parts["backgrounds"]}
        selected={cavatar["backgrounds"]}
        name="backgrounds"
        next={next}
        prev={prev}
      />
      <DisplayAvatar />
    </>
  );
};
