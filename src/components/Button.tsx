import React from "react";
import { StyledButton } from "../styled";

function Button({ size, color, shape, children }: ButtonProps) {
  return (
    <StyledButton size={size} color={color} shape={shape}>
      {children}
    </StyledButton>
  );
}

export default Button;
