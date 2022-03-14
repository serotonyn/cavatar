import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BodyPart } from "./BodyPart";

export default {
  title: "Cavatar/BodyPart",
  component: BodyPart,
} as ComponentMeta<typeof BodyPart>;

const Template: ComponentStory<typeof BodyPart> = (args) => (
  <BodyPart {...args} />
);

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
};
