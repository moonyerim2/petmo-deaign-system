import React from "react";

import Button from "./Button";

export default {
  component: Button,
  title: "Button",
};

const Template = (args) => <Button {...args}>버튼을 클릭하세요.</Button>;

export const Default = Template.bind({});
