import { observer } from "mobx-react-lite";
import React from "react";
import { cavatar, parts } from "../Carousels/Carousels";
// import { emitter } from "../emitter";

interface DisplayAvatarProps {
  state?: any;
}

// emitter.on("*", () => console.log("dis"));

export const DisplayAvatar = observer(({ state }: DisplayAvatarProps) => {
  console.log(cavatar["backgrounds"], "dis");
  return (
    <div data-testid="display-avatar" id="display-avatar">
      <img
        className="absolute w-32 h-32"
        src={parts.backgrounds[cavatar["backgrounds"]]}
      />
      {/* <img className="absolute w-32 h-32" src={parts.bodys[state["body"]]} />
      <img className="absolute w-32 h-32" src={parts.skins[state["skin"]]} />
      <img className="absolute w-32 h-32" src={parts.eyes[state["eye"]]} />
      <img
        className="absolute w-32 h-32"
        src={parts.facialHairs[state["facialHair"]]}
      />
      <img className="absolute w-32 h-32" src={parts.hairs[state["hair"]]} />
      <img className="absolute w-32 h-32" src={parts.mouths[state["mouth"]]} />
      <img className="absolute w-32 h-32" src={parts.noses[state["nose"]]} /> */}
    </div>
  );
});
