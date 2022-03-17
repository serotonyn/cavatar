import { observer } from "mobx-react-lite";
import React from "react";
import { BodyPartImage } from "../BodyPartImage/BodyPartImage";
import { cavatar, parts } from "../state";
import "./DisplayAvatar.scss";

export interface DisplayAvatarProps {}

export const DisplayAvatar = observer(({}: DisplayAvatarProps) => {
  return (
    <div data-testid="display-avatar" id="display-avatar">
      <BodyPartImage
        imageSrc={parts.backgrounds[cavatar["backgrounds"]]}
        isSelected
        imageSize={140}
      />
      <BodyPartImage
        className="display-avatar-image"
        imageSrc={parts.skins[cavatar["skins"]]}
        isSelected
        imageSize={140}
      />
      <BodyPartImage
        className="display-avatar-image"
        imageSrc={parts.bodys[cavatar["bodys"]]}
        isSelected
        imageSize={140}
      />
      <BodyPartImage
        className="display-avatar-image"
        imageSrc={parts.eyes[cavatar["eyes"]]}
        isSelected
        imageSize={140}
      />
      <BodyPartImage
        className="display-avatar-image"
        imageSrc={parts.facialHairs[cavatar["facialHairs"]]}
        isSelected
        imageSize={140}
      />
      <BodyPartImage
        className="display-avatar-image"
        imageSrc={parts.hairs[cavatar["hairs"]]}
        isSelected
        imageSize={140}
      />
      <BodyPartImage
        className="display-avatar-image"
        imageSrc={parts.mouths[cavatar["mouths"]]}
        isSelected
        imageSize={140}
      />
      <BodyPartImage
        className="display-avatar-image"
        imageSrc={parts.noses[cavatar["noses"]]}
        isSelected
        imageSize={140}
      />
    </div>
  );
});
