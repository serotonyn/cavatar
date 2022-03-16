import React from "react";
import { Carousel } from "../Carousel/Carousel";
import { DisplayAvatar } from "../DisplayAvatar/DisplayAvatar";
import { BodyPart, cavatar, parts, Parts } from "../state";

export const Carousels = ({}) => {
  const next = (name: BodyPart) => {
    cavatar.next(name);
  };
  const prev = (name: BodyPart) => {
    cavatar.prev(name);
  };

  return (
    <>
      <DisplayAvatar />
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
