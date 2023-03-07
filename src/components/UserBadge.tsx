import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import UserBadgeText from "./UserBadgeText";
import { StyledWrapperFlexCenter } from "../styled";

const StyledWrapper = styled(StyledWrapperFlexCenter)<{ size: UserBadgeSize }>`
  display: inline-flex;
  gap: ${({ size }) => (size === "large" ? "16px" : "8px")};
`;

function UserBadge({
  size,
  withButton = false,
  imgSrc,
  userName,
  address,
  elapsedTime = null,
}: UserBadgeProps) {
  return (
    <StyledWrapper size={size}>
      {imgSrc && <Avatar {...{ size, withButton, imgSrc }} />}
      <UserBadgeText {...{ size, userName, address, elapsedTime }} />
    </StyledWrapper>
  );
}

export default UserBadge;
