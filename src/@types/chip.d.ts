interface ChipStyle {
  backgroundColor: "pink50" | "blue50" | "gray100";
  color: "main" | "sub" | "black";
}

interface ChipProps extends ChipStyle {
  children: ReactNode;
}

interface StyledChipProps extends ChipStyle {
  theme: DefaultTheme;
}

interface ChipsProps {
  mainTag: string;
  subTags: string[];
}
