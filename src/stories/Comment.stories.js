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

export const NoProfileImg = Template.bind({});
NoProfileImg.args = {
  isMyComment: false,
  userBadgeData: {
    userName: "모찌모찌",
    elapsedTime: "2분전",
  },
  content:
    "무한한 품에 바로 끓는 날카로우나 착목한는 이것이야말로 트고, 이것이다. 무엇이 못하다 열매를 노래하며 구하기 위하여, 끝까지 이것이다. 용기가 불어 인생에 풀밭에 광야에서 있으랴? 이상 피고 이상의 것이다. 우는 가치를 이 꽃이 할지니, 힘있다. 관현악이며, 바로 때에, 없으면, 있는 피가 위하여 사막이다. 사람은 이상의 없으면 뜨거운지라, 인간이 운다. 풀이 영원히 살았으며, 끝에 투명하되 청춘의 노년에게서 인간의 청춘에서만 것이다. 영락과 새가 피고, 주는 웅대한 이것이다. 인도하겠다는 무엇을 거선의 별과 튼튼하며, 실로 끓는 교향악이다. 청춘의 날카로우나 얼마나 칼이다.",
  depth: 1,
};
