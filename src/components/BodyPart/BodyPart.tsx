import React from "react";
import "./BodyPart.scss";

export interface BodyPartProps {
  isSelected: boolean;
  imageSrc: string;
  imageSize?: number;
}

export const BodyPart = ({
  isSelected,
  imageSrc,
  imageSize = 64,
}: BodyPartProps) => {
  if (isSelected === undefined || imageSrc === undefined) {
    return <div data-testid="empty-div"></div>;
  }
  return (
    <img
      src={imageSrc}
      width={imageSize}
      height={imageSize}
      data-testid="image"
      alt=""
      className={isSelected ? "container is-selected" : "container"}
    />
  );
};
