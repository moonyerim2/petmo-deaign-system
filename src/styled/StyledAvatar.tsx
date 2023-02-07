import styled, { css } from "styled-components";
import { avatarTheme } from "../theme";

const StyledAvatar = styled.div<StyledAvatarProps>`
  ${({ theme: { color }, size }) => {
    const { size: avatarSize } = avatarTheme;

    return css`
      ${{
        position: "relative",
        borderRadius: "50%",
        backgroundColor: color.bgDark,
        ...avatarSize[size],
      }}
    `;
  }}
`;

export default StyledAvatar;
