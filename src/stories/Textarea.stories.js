import React from "react";
import Textarea from "../components/Textarea";

export default {
  component: Textarea,
  title: "Textarea/Textarea",
};

const TypedTemplate = (args) => (
  <Textarea placeholder="텍스트를 입력해주세요." {...args}>
    청춘은 위하여 천하를 그리하였는가?
  </Textarea>
);

const UnTypedTemplate = (args) => (
  <Textarea placeholder="텍스트를 입력해주세요." {...args}></Textarea>
);

export const Typed = TypedTemplate.bind({});

export const Placeholder = UnTypedTemplate.bind({});
