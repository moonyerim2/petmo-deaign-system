import React from "react";
import IconButton from "./IconButton";
import CheckIcon from "../assets/CheckIcon";

export default {
  component: IconButton,
  title: "button/IconButton",
};

const Template = (args) => (
  <IconButton {...args}>버튼을 클릭하세요.</IconButton>
);

export const Large = Template.bind({});
Large.args = {
  size: "large",
  Icon: CheckIcon,
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  Icon: CheckIcon,
};
