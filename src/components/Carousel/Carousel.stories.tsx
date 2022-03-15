import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Carousel } from "./Carousel";
import { parts } from "../Carousels/Carousels";

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
  selected: 1,
  setState: () => {},
};
