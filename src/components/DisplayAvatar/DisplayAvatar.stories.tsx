import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { DisplayAvatar } from "./DisplayAvatar";

export default {
  title: "Cavatar/DisplayAvatar",
  component: DisplayAvatar,
} as ComponentMeta<typeof DisplayAvatar>;

const Template: ComponentStory<typeof DisplayAvatar> = (args) => (
  <DisplayAvatar {...args} />
);

export const Basic = Template.bind({});
