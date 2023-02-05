export type ColorTypes = typeof color;

const colorsPalette = {
  black: "#111",
  white: "#fff",
  gray50: "#F7F7FB",
  gray100: "#F1F1F5",
  gray200: "#F0F0F6",
  gray300: "#E9E9ED",
  gray400: "#E5E5EC",
  gray600: "#999999",
  gray700: "#767676",
  gray800: "#505050",
  pink50: "#FFE0EB",
  pink100: "#FFB1CD",
  pink200: "#FF7BAC",
  pink300: "#FA3C89",
  pink400: "#F3006E",
  pink500: "#ED0054",
  pink600: "#DD0052",
  pink700: "#C7004F",
  pink800: "#B2004C",
  pink900: "#8C0048",
  blue50: "#E2F2FF",
  blue100: "#B8DEFF",
  blue200: "#86CBFF",
  blue300: "#47B5FF",
  blue400: "#00A4FF",
  blue500: "#0093FF",
  blue600: "#0084FF",
  blue700: "#0070FF",
  blue800: "#0D5DF1",
  blue900: "#2537D2",
  red: "#D32F2F",
  yellow: "#FEEB00",
  green: "#1EC800",
};

export const color = (() => {
  return {
    ...colorsPalette,
    main: colorsPalette.pink300,
    sub: colorsPalette.blue800,
    disable: colorsPalette.gray600,
    lineDark: colorsPalette.black,
    lineMedium: colorsPalette.gray400,
    lineLight: colorsPalette.gray200,
    bgDark: colorsPalette.gray300,
    bgMedium: colorsPalette.gray100,
    bgLight: colorsPalette.gray50,
    fontDefault: colorsPalette.black,
    fontMedium: colorsPalette.gray800,
    fontLight: colorsPalette.gray700,
    error: colorsPalette.red,
    kakao: colorsPalette.yellow,
    naver: colorsPalette.green,
  };
})();