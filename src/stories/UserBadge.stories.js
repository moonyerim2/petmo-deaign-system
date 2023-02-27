import React from "react";
import UserBadge from "../components/UserBadge";

export default {
  component: UserBadge,
  title: "UserBadge/UserBadge",
};

const TypedTemplate = (args) => <UserBadge {...args} />;

export const Small = TypedTemplate.bind({});
Small.args = {
  size: "small",
  imgSrc: require("../assets/avatar_no_img.png"),
  userName: "모찌",
  address: "송파동",
  elapsedTime: "2분전",
};

export const Medium = TypedTemplate.bind({});
Medium.args = {
  size: "medium",
  imgSrc: require("../assets/avatar_no_img.png"),
  userName: "모찌",
  address: "송파동",
  elapsedTime: "2분전",
};

export const Large = TypedTemplate.bind({});
Large.args = {
  size: "large",
  imgSrc: require("../assets/avatar_no_img.png"),
  userName: "모찌",
  address: "송파동",
};

export const LargeWithButton = TypedTemplate.bind({});
LargeWithButton.args = {
  size: "large",
  imgSrc: require("../assets/avatar_no_img.png"),
  userName: "모찌",
  address: "송파동",
  withButton: true,
};
