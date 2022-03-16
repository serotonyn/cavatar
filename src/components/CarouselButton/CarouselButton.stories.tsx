import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { CarouselButton } from "./CarouselButton";

export default {
  title: "Cavatar/CarouselButton",
  component: CarouselButton,
} as ComponentMeta<typeof CarouselButton>;

const Template: ComponentStory<typeof CarouselButton> = (args) => (
  <CarouselButton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  handleClick: () => {},
  direction: "LEFT",
};
