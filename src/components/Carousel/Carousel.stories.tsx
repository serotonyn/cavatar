import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Carousel } from "./Carousel";
import { cavatar, parts } from "../state";

export default {
  title: "Cavatar/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);

console.log(cavatar.backgrounds);
export const Basic = Template.bind({});
Basic.args = {
  name: "backgrounds",
  bodySectionCollection: parts["backgrounds"],
  next: () => cavatar.next("backgrounds"),
  prev: () => cavatar.prev("backgrounds"),
};
