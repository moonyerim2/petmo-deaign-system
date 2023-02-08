import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import {
  StyledWrapperFlexCenter,
  StyledWrapperFlexCoulmn,
  StyledDot,
} from "../styled";
import { userBadgeTheme } from "../theme";

const Name = styled.span`
  ${({ theme, size }: { theme: DefaultTheme; size: UserBadgeSize }) => {
    const { name } = userBadgeTheme(theme);
    return css`
      ${{
        display: "inline-block",
        color: theme.color.black,
        ...name[size],
      }}
    `;
  }}
`;

const Info = styled.span`
  ${({ theme, size }: { theme: DefaultTheme; size: UserBadgeSize }) => {
    const { info } = userBadgeTheme(theme);

    return css`
      ${{
        color: theme.color.gray700,
        ...info[size],
      }}
    `;
  }}
`;

function UserBadgeTextSmall({
  size,
  userName,
  address,
  elapsedTime,
}: UserBadgeTextProps) {
  return (
    <StyledWrapperFlexCoulmn>
      <Name size={size}>{userName}</Name>
      <StyledWrapperFlexCenter>
        <Info size={size}>{address}</Info>
        {elapsedTime && <StyledDot />}
        <Info size={size}>{elapsedTime}</Info>
      </StyledWrapperFlexCenter>
    </StyledWrapperFlexCoulmn>
  );
}

export default UserBadgeTextSmall;
