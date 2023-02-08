import { DefaultTheme } from "styled-components";

export type userBadgeThemeTypes = typeof userBadgeTheme;

export const userBadgeTheme = ({ fontSize }: DefaultTheme) => {
  const theme = {
    name: {
      small: {
        fontSize: fontSize.caption,
      },
      medium: {
        fontSize: fontSize.caption,
      },
      large: {
        fontSize: fontSize.subtitle1,
      },
    },
    info: {
      small: {
        fontSize: fontSize.caption,
      },
      medium: {
        fontSize: fontSize.caption,
      },
      large: {
        fontSize: fontSize.body2,
      },
    },
  };

  return theme;
};
