import React from "react";
import "./BodyPart.scss";

export interface BodyPartProps {
  isSelected: boolean;
  imageSrc: string;
}

export const BodyPart = ({ isSelected, imageSrc }: BodyPartProps) => {
  return (
    <div className="absolute flex justify-center select-none">
      <div className={` ${isSelected ? "z-10 opacity-100" : "z-0 opacity-0"}`}>
        <img className="rounded-lg" src={imageSrc} alt="" />
      </div>
    </div>
  );
};
