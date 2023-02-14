import React from "react";
import LargeCard from "./LargeCard";

export default {
  component: LargeCard,
  title: "Card/LargeCard",
};

const Template = (args) => (
  <LargeCard {...args}>
    헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 나는 헌법을
    준수하고 국가를 보위하며 조국의 평화적 통일과 국민의 자유와 복리의 증진 및
    민족문화의 창달에 노력하여 대통령으로서의 직책을 성실히 수행할 것을 국민
    앞에 엄숙히 선서합니다. 혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로
    성립되고 유지되어야 하며, 국가는 이를 보장한다. 헌법개정안이 제2항의 찬성을
    얻은 때에는 헌법개정은 확정되며, 대통령은 즉시 이를 공포하여야 한다.
  </LargeCard>
);

const userBadgeData = {
  userName: "모찌",
  imgSrc: require("../assets/avatar_no_img.png"),
  address: "송파동",
  elapsedTime: "2분전",
};

export const Default = Template.bind({});
Default.args = {
  userBadgeData: userBadgeData,
  mainTag: "축하해요",
  subTags: ["강아지", "고양이"],
  images: [
    { id: 1, src: require("../assets/mozzi.jpeg"), alt: "게시글 이미지" },
    { id: 2, src: require("../assets/mozzi.jpeg"), alt: "게시글 이미지" },
    { id: 3, src: require("../assets/mozzi.jpeg"), alt: "게시글 이미지" },
    { id: 4, src: require("../assets/mozzi.jpeg"), alt: "게시글 이미지" },
  ],
  imageType: "slider",
};

export const Summary = Template.bind({});
Summary.args = {
  userBadgeData: userBadgeData,
  mainTag: "축하해요",
  subTags: ["강아지", "고양이"],
  isSummary: true,
  images: [
    { id: 1, src: require("../assets/mozzi.jpeg") },
    { id: 2, src: require("../assets/mozzi.jpeg") },
    { id: 3, src: require("../assets/mozzi.jpeg") },
    { id: 4, src: require("../assets/mozzi.jpeg") },
    { id: 5, src: require("../assets/mozzi.jpeg") },
  ],
  imageType: "image",
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  userBadgeData: userBadgeData,
  mainTag: "축하해요",
  subTags: ["강아지", "고양이"],
  isSummary: true,
};
