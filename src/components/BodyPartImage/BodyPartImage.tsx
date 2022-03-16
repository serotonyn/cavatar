import React from "react";
import "./BodyPartImage.scss";
import { observer } from "mobx-react-lite";

export interface BodyPartImageProps {
  isSelected: boolean;
  imageSrc: string;
  imageSize?: number;
  className?: string;
}

export const BodyPartImage = observer(
  ({
    isSelected,
    imageSrc,
    imageSize = 64,
    className = " ",
  }: BodyPartImageProps) => {
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
        className={[
          isSelected ? "container is-selected" : "container",
          " " + className,
        ].join("")}
      />
    );
  }
);
