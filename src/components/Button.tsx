import React, { ReactNode } from "react";
import { buttonTheme } from "../theme/buttonTheme";
import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "large" | "medium" | "small" | "xSmall";
  color: "primary" | "secondary" | "disabled";
  shape: "round" | "angled" | "default";
  children: ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  ${({ theme, size, color, shape }) => {
    const {
      size: buttonSize,
      color: buttonColor,
      shape: buttonShape,
    } = buttonTheme(theme);

    return css`
      ${{
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: "0 24px",
        height: buttonSize[size],
        borderRadius: buttonShape[shape],
        ...buttonColor[color],
      }}
    `;
  }}
`;

function Button({ size, color, shape, children }: ButtonProps) {
  return (
    <StyledButton size={size} color={color} shape={shape}>
      {children}
    </StyledButton>
  );
}

export default Button;
