import "./Carousel.scss";
import React from "react";
import { BodyPart } from "../BodyPart/BodyPart";
import { CarouselButton } from "../CarouselButton/CarouselButton";
import { parts } from "../Carousels/Carousels";

export interface CarouselProps {
  bodySectionCollection: string[];
  selected: number;
  setState: React.Dispatch<
    React.SetStateAction<{ [key: keyof typeof parts]: number }>
  >;
  name?: keyof typeof parts;
}

export const Carousel = ({
  bodySectionCollection,
  selected,
  setState,
  name,
}: CarouselProps) => {
  if (!name || !bodySectionCollection.length) return null;

  const upLimit = bodySectionCollection.length - 1;
  const downLimit = 0;

  const next = () => {
    if (selected === upLimit) {
      setState((state) => ({ ...state, [name]: downLimit }));
    } else {
      setState((state) => ({ ...state, [name]: state[name] + 1 }));
    }
  };
  const prev = () => {
    if (selected === downLimit) {
      setState((state) => ({ ...state, [name]: upLimit }));
    } else {
      setState((state) => ({ ...state, [name]: state[name] - 1 }));
    }
  };

  return (
    <div id="carousel-container" data-testid="carousel-container">
      <CarouselButton handleClick={prev} direction="LEFT" />
      {bodySectionCollection.map((item, i) => {
        return <BodyPart key={i} isSelected={selected == i} imageSrc={item} />;
      })}
      <CarouselButton handleClick={next} direction="RIGHT" />
    </div>
  );
};
