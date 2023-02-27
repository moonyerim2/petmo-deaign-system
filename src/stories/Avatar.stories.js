import React from "react";
import Avatar from "../components/Avatar";

export default {
  component: Avatar,
  title: "Avatar/Avatar",
};

const Template = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  imgSrc: require("../assets/avatar_no_img.png"),
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  imgSrc: require("../assets/avatar_no_img.png"),
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  imgSrc: require("../assets/avatar_no_img.png"),
};

export const LargeWithButton = Template.bind({});
LargeWithButton.args = {
  size: "large",
  imgSrc: require("../assets/avatar_no_img.png"),
  withButton: true,
};
