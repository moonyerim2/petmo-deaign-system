import styled, { css, DefaultTheme } from "styled-components";
import { roundButtonTheme } from "../theme";

const StyledRoundButton = styled.button<StyledRoundButtonProps>`
  ${({ theme, size }: { theme: DefaultTheme } & StyledRoundButtonProps) => {
    const { size: roundButtonSize } = roundButtonTheme;

    return css`
      ${{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.color.white,
        borderRadius: theme.borderRadius.round,
        backgroundColor: theme.color.main,
        ...roundButtonSize[size],
      }}
    `;
  }}
`;

export default StyledRoundButton;
