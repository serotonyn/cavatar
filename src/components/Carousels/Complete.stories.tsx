import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Carousels } from "./Carousels";
import { DisplayAvatar } from "../DisplayAvatar/DisplayAvatar";

export default {
  title: "Cavatar/Complete",
  component: Carousels,
} as ComponentMeta<typeof Carousels>;

const Template: ComponentStory<typeof Carousels> = (args) => (
  <>
    <DisplayAvatar />
    <Carousels {...args} />
  </>
);

export const Basic = Template.bind({});
