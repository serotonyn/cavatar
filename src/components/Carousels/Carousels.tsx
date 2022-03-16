import React from "react";
import { Carousel } from "../Carousel/Carousel";
import { BodyPart, cavatar, parts } from "../state";

export const Carousels = ({}) => {
  const next = (name: BodyPart) => {
    cavatar.next(name);
  };
  const prev = (name: BodyPart) => {
    cavatar.prev(name);
  };

  return (
    <>
      {(Object.keys(parts) as Array<BodyPart>).map((part) => {
        return (
          <Carousel
            key={part}
            bodySectionCollection={parts[part]}
            name={part}
            next={next}
            prev={prev}
          />
        );
      })}
    </>
  );
};
