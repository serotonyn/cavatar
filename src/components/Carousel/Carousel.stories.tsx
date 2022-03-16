import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { cavatar, parts } from "../state";
import { Carousel } from "./Carousel";

export default {
  title: "Cavatar/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  name: "backgrounds",
  bodySectionCollection: parts["backgrounds"],
  next: () => cavatar.next("backgrounds"),
  prev: () => cavatar.prev("backgrounds"),
};
