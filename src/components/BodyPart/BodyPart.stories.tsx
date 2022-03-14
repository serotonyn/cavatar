import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BodyPart } from "./BodyPart";
import Icon from "./assets/s.svg";

export default {
  title: "Cavatar/BodyPart",
  component: BodyPart,
} as ComponentMeta<typeof BodyPart>;

const Template: ComponentStory<typeof BodyPart> = (args) => (
  <BodyPart {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  isSelected: true,
  imageSrc: Icon,
};

export const WithOptionalSize = Template.bind({});
WithOptionalSize.args = {
  isSelected: true,
  imageSrc: Icon,
  imageSize: 100,
};
