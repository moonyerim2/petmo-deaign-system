import React from "react";
import Chip from "./Chip";

export default {
  component: Chip,
  title: "chip/Chip",
};

const Template = (args) => <Chip {...args}>#마스터즈</Chip>;

export const MainColor = Template.bind({});
MainColor.args = {
  backgroundColor: "pink50",
  color: "main",
};

export const SubColor = Template.bind({});
SubColor.args = {
  backgroundColor: "blue50",
  color: "sub",
};

export const GrayColor = Template.bind({});
GrayColor.args = {
  backgroundColor: "gray100",
  color: "black",
};
