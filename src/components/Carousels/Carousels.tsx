import React from "react";
import * as assets from "../../svgs";
import { Carousel } from "../Carousel/Carousel";

type PartCollection = string[];

interface Parts {
  [key: string]: PartCollection;
}

export const parts: Parts = {
  backgrounds: Object.values(assets.background) as string[],
  bodys: Object.values(assets.body) as string[],
  eyes: Object.values(assets.eyes),
  facialHairs: Object.values(assets.facialHair) as string[],
  hairs: Object.values(assets.hair) as string[],
  mouths: Object.values(assets.mouth),
  noses: Object.values(assets.nose),
  skins: Object.values(assets.skin) as string[],
};

export const randomizeAvatarState = () => {
  return Object.keys(parts).reduce((acc: any, cur) => {
    acc[cur] = Math.floor(Math.random() * parts[cur].length);
    return acc;
  }, {});
};

export const Carousels = ({}) => {
  const [avatarState, setAvatarState] = React.useState(randomizeAvatarState());
  return (
    <Carousel
      bodySectionCollection={parts["backgrounds"]}
      selected={avatarState["backgrounds"]}
      setState={setAvatarState}
      name="backgrounds"
    />
  );
};
