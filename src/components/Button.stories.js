import React from "react";

import Button from "./Button";

export default {
  component: Button,
  title: "button/Button",
};

const Template = (args) => <Button {...args}>버튼을 클릭하세요.</Button>;

export const Primary = Template.bind({});
Primary.args = {
  size: "large",
  color: "primary",
  shape: "default",
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "large",
  color: "secondary",
  shape: "default",
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: "large",
  color: "disabled",
  shape: "default",
};
