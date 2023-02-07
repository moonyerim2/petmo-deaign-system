import React from "react";
import { CSSProperties } from "styled-components";
import IconButton from "./IconButton";
import CheckIcon from "../assets/CheckIcon";
import { StyledAvatar } from "../styled";

const iconButtonLocationStyle: CSSProperties = {
  position: "absolute",
  bottom: "0",
  right: "0",
};

function Avatar({ size, imgSrc, withButton = false }: AvatarProps) {
  return (
    <StyledAvatar size={size}>
      <img
        src={imgSrc}
        style={{ width: "100%", height: "100%" }}
        alt="사용자 이미지"
      />
      {size === "large" && withButton && (
        <IconButton
          size="small"
          Icon={CheckIcon}
          style={iconButtonLocationStyle}
        />
      )}
    </StyledAvatar>
  );
}
export default Avatar;
