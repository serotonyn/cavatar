import React from "react";
import "./BodyPart.scss";
import { observer } from "mobx-react-lite";
import { cavatar, parts } from "../Carousels/Carousels";

export interface BodyPartProps {
  isSelected: boolean;
  imageSrc: string;
  imageSize?: number;
}

export const BodyPart = observer(
  ({ isSelected, imageSrc, imageSize = 64 }: BodyPartProps) => {
    // if (isSelected === undefined || imageSrc === undefined) {
    //   return <div data-testid="empty-div"></div>;
    // }
    console.log(cavatar.backgrounds, "bo");

    return (
      <img
        src={parts["backgrounds"][cavatar.backgrounds]}
        // width={imageSize}
        // height={imageSize}
        // data-testid="image"
        // alt=""
        className={isSelected ? "container is-selected" : "container"}
      />
    );
  }
);
