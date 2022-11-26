import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";

import { Header } from "./components/Header";
import { Banner } from "./components/Banner";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>
      <Banner/>
    </ThemeProvider>
  )
}
