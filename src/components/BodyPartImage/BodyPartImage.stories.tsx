import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { eyes } from "../../svgs";
import { BodyPartImage } from "./BodyPartImage";

export default {
  title: "Cavatar/BodyPart",
  component: BodyPartImage,
} as ComponentMeta<typeof BodyPartImage>;

const Template: ComponentStory<typeof BodyPartImage> = (args) => (
  <BodyPartImage {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  isSelected: true,
  imageSrc: eyes[0],
};

export const WithOptionalSize = Template.bind({});
WithOptionalSize.args = {
  isSelected: true,
  imageSrc: eyes[0],
  imageSize: 100,
};
