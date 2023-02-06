interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "large" | "medium" | "small" | "xSmall";
  color: "primary" | "secondary" | "disabled";
  shape: "round" | "angled" | "default";
  children: ReactNode;
}

interface IconTextButtonProps extends ButtonProps {
  iconLocation: string;
  Icon: () => JSX.Element;
}

interface StyledRoundButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "large" | "small";
}

interface IconButtonProps extends StyledRoundButtonProps {
  size: StyledRoundButtonSize;
  Icon: () => JSX.Element;
}
