import React from "react";
import IconTextButton from "../components/IconTextButton";
import CheckIcon from "../assets/CheckIcon";

export default {
  component: IconTextButton,
  title: "button/IconTextButton",
};

const Template = (args) => (
  <IconTextButton {...args}>버튼을 클릭하세요.</IconTextButton>
);

export const Left = Template.bind({});
Left.args = {
  size: "large",
  color: "primary",
  shape: "default",
  Icon: CheckIcon,
  iconLocation: "left",
};

export const Right = Template.bind({});
Right.args = {
  size: "large",
  color: "primary",
  shape: "default",
  Icon: CheckIcon,
  iconLocation: "right",
};
