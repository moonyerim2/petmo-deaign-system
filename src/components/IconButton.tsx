import React from "react";
import { StyledRoundButton } from "../styled";

function IconButton({ size, Icon, ...rest }: IconButtonProps) {
  return (
    <StyledRoundButton size={size} {...rest}>
      <Icon />
    </StyledRoundButton>
  );
}

export default IconButton;
