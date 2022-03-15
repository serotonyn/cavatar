import "./Carousel.scss";
import React from "react";
import { BodyPart } from "../BodyPart/BodyPart";
import { CarouselButton } from "../CarouselButton/CarouselButton";
import { parts } from "../Carousels/Carousels";

type bodyPart = "backgrounds" | "hairs";
export interface CarouselProps {
  bodySectionCollection: string[];
  selected: number;
  // setState: React.Dispatch<
  //   React.SetStateAction<{ [key: keyof typeof parts]: number }>
  // >;
  name: string;
  // increment: (name: keyof typeof parts) => {};
  // decrement: (name: keyof typeof parts) => {};
  // setToLastBodyPart: (name: keyof typeof parts) => {};
  // setToFirstBodyPart: (name: keyof typeof parts) => {};
  next: (name: string) => void;
  prev: (name: string) => void;
}

export const Carousel = ({
  bodySectionCollection,
  selected,
  // setState,
  name,
  // setToFirstBodyPart,
  // setToLastBodyPart,
  // increment,
  // decrement,
  next,
  prev,
}: CarouselProps) => {
  return (
    <div id="carousel-container" data-testid="carousel-container">
      <CarouselButton handleClick={() => prev(name)} direction="LEFT" />
      {bodySectionCollection.map((item, i) => {
        return <BodyPart key={i} isSelected={selected == i} imageSrc={item} />;
      })}
      <CarouselButton handleClick={() => next(name)} direction="RIGHT" />
    </div>
  );
};
