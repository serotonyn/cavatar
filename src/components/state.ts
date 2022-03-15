import { makeAutoObservable } from "mobx";
import * as assets from "../svgs";

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
      this.backgrounds === parts[name].length - 1 ? 0 : this.backgrounds + 1;
  };
  prev = (name: string) => {
    this.backgrounds =
      this.backgrounds === 0 ? parts[name].length - 1 : this.backgrounds - 1;
  };
}

export const cavatar = new Cavatar();
