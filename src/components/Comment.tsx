import React from "react";
import styled, { css } from "styled-components";
import UserBadge from "./UserBadge";

const CommentText = styled.p`
  ${({ theme: { fontSize, color } }) => {
    return css`
      ${{
        paddingLeft: "36px",
        fontSize: fontSize.body2,
        color: color.black,
      }}
    `;
  }}
`;

const ReplyButton = styled.button`
  ${({ theme: { fontSize, fontWeight, color } }) => {
    return css`
      ${{
        display: "block",
        paddingLeft: "36px",
        fontSize: fontSize.caption,
        fontWeight: fontWeight.medium,
        color: color.gray700,
      }}
    `;
  }}
`;

function Comment({ userBadgeData, content, depth }: CommentProps) {
  return (
    <>
      <UserBadge {...userBadgeData} size="small" />
      <CommentText>{content}</CommentText>
      {depth === 1 && <ReplyButton>답글달기</ReplyButton>}
    </>
  );
}

export default Comment;
