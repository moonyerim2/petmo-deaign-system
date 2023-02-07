type AvatarSize = "small" | "medium" | "large";

interface AvatarProps {
  size: AvatarSize;
  imgSrc: string;
  withButton: boolean;
}

interface StyledAvatarProps {
  theme: DefaultTheme;
  size: AvatarSize;
}
