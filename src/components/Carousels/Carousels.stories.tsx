import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Carousels } from "./Carousels";

export default {
  title: "Cavatar/Carousels",
  component: Carousels,
} as ComponentMeta<typeof Carousels>;

const Template: ComponentStory<typeof Carousels> = (args) => (
  <Carousels {...args} />
);

export const Basic = Template.bind({});
