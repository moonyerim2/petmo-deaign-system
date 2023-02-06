interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  children: ReactNode;
}

interface StyledTextareaProps {
  theme: DefaultTheme;
}
