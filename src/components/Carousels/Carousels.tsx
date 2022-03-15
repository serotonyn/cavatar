import React from "react";
import * as assets from "../../svgs";
import { Carousel } from "../Carousel/Carousel";
import { DisplayAvatar } from "../DisplayAvatar/DisplayAvatar";
import { observable, autorun, makeAutoObservable } from "mobx";

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

class Cavatar {
  backgrounds = 0;

  constructor() {
    makeAutoObservable(this);
  }

  next = (name: string) => {
    this.backgrounds =
      this.backgrounds === parts["backgrounds"].length - 1
        ? 0
        : this.backgrounds + 1;
  };
}

// export const Cavatar = observable(randomizeAvatarState());
// autorun(() => {
//   console.log("changed", Cavatar.backgrounds);
// });
export const cavatar = new Cavatar();

export const Carousels = ({}) => {
  // const [avatarState, setState] = React.useState(randomizeAvatarState());

  const next = (name: string) => {
    // setState((state: any) => ({
    //   ...state,
    //   [name]:
    //     avatarState[name] === parts[name].length - 1 ? 0 : state[name] + 1,
    // }));
    // Cavatar[name] =
    //   Cavatar[name] === parts[name].length - 1 ? 0 : Cavatar[name] + 1;
    cavatar.next("");
  };
  const prev = (name: string) => {
    // setState((state: any) => ({
    //   ...state,
    //   name: avatarState[name] === 0 ? parts[name].length - 1 : state[name] - 1,
    // }));
  };

  return (
    <>
      <Carousel
        bodySectionCollection={parts["backgrounds"]}
        selected={cavatar["backgrounds"]}
        // selected={0}
        // setState={setAvatarState}
        name="backgrounds"
        next={next}
        prev={prev}
      />
      <DisplayAvatar />
    </>
  );
};
