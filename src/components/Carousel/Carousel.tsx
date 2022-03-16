import "./Carousel.scss";
import React from "react";
import { BodyPartImage } from "../BodyPartImage/BodyPartImage";
import { CarouselButton } from "../CarouselButton/CarouselButton";
import { BodyPart, cavatar } from "../state";
import { observer } from "mobx-react-lite";

export interface CarouselProps {
  bodySectionCollection: string[];
  name: BodyPart;
  next: (name: BodyPart) => void;
  prev: (name: BodyPart) => void;
}

export const Carousel = observer(
  ({ bodySectionCollection, name, next, prev }: CarouselProps) => {
    if (!name || !bodySectionCollection.length) {
      return null;
    }
    return (
      <div id="carousel-container" data-testid="carousel-container">
        <CarouselButton handleClick={() => prev(name)} direction="LEFT" />
        {bodySectionCollection.map((item, i) => {
          return (
            <BodyPartImage
              key={item}
              isSelected={cavatar[name] == i}
              imageSrc={item}
            />
          );
        })}
        <CarouselButton handleClick={() => next(name)} direction="RIGHT" />
      </div>
    );
  }
);
