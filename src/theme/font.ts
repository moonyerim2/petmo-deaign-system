const pixelToRem = (size: number) => `${size / 16}rem`;

export type FontWeightTypes = typeof fontWeight;
export type FontSizeTypes = typeof fontSize;

export const fontWeight = {
  bold: 700,
  medium: 500,
  regular: 400,
};

export const fontSize = {
  h1: pixelToRem(44),
  h2: pixelToRem(36),
  h3: pixelToRem(32),
  h4: pixelToRem(28),
  h5: pixelToRem(24),
  subtitle1: pixelToRem(20),
  subtitle2: pixelToRem(18),
  body1: pixelToRem(16),
  body2: pixelToRem(14),
  caption: pixelToRem(12),
};
