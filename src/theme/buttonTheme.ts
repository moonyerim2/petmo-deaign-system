import { DefaultTheme } from "styled-components";

export type ButtonThemeTypes = typeof buttonTheme;

export const buttonTheme = (theme: DefaultTheme) => {
  const { color, borderRadius } = theme;

  return {
    size: {
      large: "56px",
      medium: "46px",
      small: "36px",
      xSmall: "26px",
    },
    color: {
      primary: {
        backgroundColor: color["main"],
        color: color["white"],
      },
      secondary: {
        backgroundColor: color["white"],
        color: color["main"],
        border: `1px solid ${color["main"]}`,
      },
      disabled: {
        backgroundColor: color["bgDark"],
        color: color["disable"],
      },
    },
    shape: {
      round: borderRadius["round"],
      angled: "0",
      default: borderRadius["small"],
    },
  };
};
