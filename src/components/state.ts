import { makeAutoObservable } from "mobx";
import * as assets from "../svgs";

export interface Parts {
  backgrounds: string[];
  bodys: string[];
  eyes: string[];
  facialHairs: string[];
  hairs: string[];
  mouths: string[];
  noses: string[];
  skins: string[];
}
export type BodyPart = keyof Parts;

export const parts: Parts = {
  backgrounds: Object.values(assets.background),
  bodys: Object.values(assets.body),
  eyes: Object.values(assets.eyes),
  facialHairs: Object.values(assets.facialHair),
  hairs: Object.values(assets.hair),
  mouths: Object.values(assets.mouth),
  noses: Object.values(assets.nose),
  skins: Object.values(assets.skin),
};

export const randomizeAvatarState = () => {
  return (Object.keys(parts) as Array<BodyPart>).reduce(
    (acc: any, cur: BodyPart) => {
      acc[cur] = Math.floor(Math.random() * parts[cur].length);
      return acc;
    },
    {}
  );
};

class Cavatar {
  backgrounds = 0;
  bodys = 0;
  eyes = 0;
  facialHairs = 0;
  hairs = 0;
  mouths = 0;
  noses = 0;
  skins = 0;

  constructor() {
    makeAutoObservable(this);
  }

  next = (name: BodyPart) => {
    this[name] = this[name] === parts[name].length - 1 ? 0 : this[name] + 1;
  };
  prev = (name: BodyPart) => {
    this[name] = this[name] === 0 ? parts[name].length - 1 : this[name] - 1;
  };
}

export const cavatar = new Cavatar();
