import React from "react";
import { StyledRoundButton } from "../styled";

function IconButton({ size, Icon }: IconButtonProps) {
  return (
    <StyledRoundButton size={size}>
      <Icon />
    </StyledRoundButton>
  );
}

export default IconButton;
