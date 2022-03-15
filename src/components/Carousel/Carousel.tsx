import "./Carousel.scss";
import React from "react";
import { BodyPart } from "../BodyPart/BodyPart";
import { CarouselButton } from "../CarouselButton/CarouselButton";

export interface CarouselProps {
  bodySectionCollection: string[];
  selected: number;
  name: string;
  next: (name: string) => void;
  prev: (name: string) => void;
}

export const Carousel = ({
  bodySectionCollection,
  selected,
  name,
  next,
  prev,
}: CarouselProps) => {
  if (!name || !bodySectionCollection.length) {
    return null;
  }
  return (
    <div id="carousel-container" data-testid="carousel-container">
      <CarouselButton handleClick={() => prev(name)} direction="LEFT" />
      {bodySectionCollection.map((item, i) => {
        return (
          <BodyPart key={item} isSelected={selected == i} imageSrc={item} />
        );
      })}
      <CarouselButton handleClick={() => next(name)} direction="RIGHT" />
    </div>
  );
};
