import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "./common/theme";

function PetmoStyleProvider({ children }: { children: ReactNode }) {
  console.log(children);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default PetmoStyleProvider;
