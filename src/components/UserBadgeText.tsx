import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { StyledWrapperFlexCenter, StyledDot } from "../styled";
import { userBadgeTheme } from "../theme";

const Wrapper = styled.div<{ hasAddress: boolean }>`
  display: flex;
  flex-direction: ${({ hasAddress }) => (hasAddress ? "column" : "row")};
`;

const Name = styled.span`
  ${({ theme, size }: { theme: DefaultTheme; size: UserBadgeSize }) => {
    const { name } = userBadgeTheme(theme);
    return css`
      ${{
        display: "inline-block",
        color: theme.color.black,
        marginRight: "7px",
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
    <Wrapper hasAddress={!!address}>
      <Name size={size}>{userName}</Name>
      <StyledWrapperFlexCenter>
        {address && (
          <>
            <Info size={size}>{address}</Info>
            <StyledDot />
          </>
        )}
        <Info size={size}>{elapsedTime}</Info>
      </StyledWrapperFlexCenter>
    </Wrapper>
  );
}

export default UserBadgeTextSmall;
