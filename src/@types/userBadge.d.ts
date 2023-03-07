type UserBadgeSize = "small" | "medium" | "large";

interface UserBadgeTextProps {
  size: UserBadgeSize;
  userName: string;
  address?: string;
  elapsedTime?: string | null;
}

interface UserBadgeProps extends AvatarProps, UserBadgeTextProps {
  withButton: boolean;
  imgSrc?: string;
}
