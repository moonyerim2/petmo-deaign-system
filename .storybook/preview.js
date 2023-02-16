import React from "react";
import { PetmoStyleProvider } from "../src/theme";

export const decorators = [
  (Story) => (
    <PetmoStyleProvider>
      <Story />
    </PetmoStyleProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
