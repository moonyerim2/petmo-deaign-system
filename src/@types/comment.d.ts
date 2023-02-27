interface CommentProps {
  isMyComment: boolean;
  userBadgeData: UserBadgeProps;
  content: string;
  depth: 1 | 2;
  onClickReply: MouseEvent<HTMLButtonElement>;
  onClickIndicator: MouseEvent<HTMLButtonElement>;
}
