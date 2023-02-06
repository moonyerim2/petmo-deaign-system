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
