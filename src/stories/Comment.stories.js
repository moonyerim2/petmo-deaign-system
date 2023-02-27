import React from "react";
import Comment from "../components/Comment";

export default {
  component: Comment,
  title: "Comment/Comment",
};

const Template = (args) => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = {
  userBadgeData: {
    imgSrc: require("../assets/avatar_no_img.png"),
    userName: "모찌",
    address: "송파동",
    elapsedTime: "2분전",
  },
  content: "안녕하세요~",
  depth: 1,
};

export const SubComment = Template.bind({});
SubComment.args = {
  userBadgeData: {
    imgSrc: require("../assets/avatar_no_img.png"),
    userName: "모찌",
    address: "송파동",
    elapsedTime: "2분전",
  },
  content: "안녕하세요~",
  depth: 2,
};

export const MyComment = Template.bind({});
MyComment.args = {
  isMyComment: true,
  userBadgeData: {
    imgSrc: require("../assets/avatar_no_img.png"),
    userName: "모찌모찌",
    address: "송파동",
    elapsedTime: "2분전",
  },
  content: "안녕하세요~",
  depth: 1,
};
