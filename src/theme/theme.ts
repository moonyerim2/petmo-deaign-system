import { DefaultTheme } from "styled-components";

import { borderRadius, BorderRadiusTypes } from "./borderRadius";
import { color, ColorTypes } from "./color";
import { fontSize, fontWeight, FontSizeTypes, FontWeightTypes } from "./font";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: BorderRadiusTypes;
    color: ColorTypes;
    fontSize: FontSizeTypes;
    fontWeight: FontWeightTypes;
  }
}

const theme: DefaultTheme = {
  borderRadius,
  color,
  fontSize,
  fontWeight,
};

export default theme;
