import React from "react";
import { parts } from "../Carousels/Carousels";

interface DisplayAvatarProps {
  state: any;
}

export const DisplayAvatar = ({ state }: DisplayAvatarProps) => {
  return (
    <div data-testid="display-avatar" id="display-avatar">
      <img
        className="absolute w-32 h-32"
        src={parts.backgrounds[state["background"]]}
      />
      <img className="absolute w-32 h-32" src={parts.bodys[state["body"]]} />
      <img className="absolute w-32 h-32" src={parts.skins[state["skin"]]} />
      <img className="absolute w-32 h-32" src={parts.eyes[state["eye"]]} />
      <img
        className="absolute w-32 h-32"
        src={parts.facialHairs[state["facialHair"]]}
      />
      <img className="absolute w-32 h-32" src={parts.hairs[state["hair"]]} />
      <img className="absolute w-32 h-32" src={parts.mouths[state["mouth"]]} />
      <img className="absolute w-32 h-32" src={parts.noses[state["nose"]]} />
    </div>
  );
};
