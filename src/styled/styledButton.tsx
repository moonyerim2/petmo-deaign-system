import styled, { css, DefaultTheme } from "styled-components";
import { buttonTheme } from "../theme";

const StyledButton = styled.button<ButtonProps>`
  ${({ theme, size, color, shape }: { theme: DefaultTheme } & ButtonProps) => {
    const {
      size: buttonSize,
      color: buttonColor,
      shape: buttonShape,
    } = buttonTheme(theme);

    return css`
      ${{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        width: "100%",
        padding: "0 24px",
        height: buttonSize[size],
        borderRadius: buttonShape[shape],
        ...buttonColor[color],
      }}
    `;
  }}
`;

export default StyledButton;
