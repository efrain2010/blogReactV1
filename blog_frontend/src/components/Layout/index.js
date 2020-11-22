import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Routes from "../Routes";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

import { darkTheme } from "./styles";

const Layout = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <BrowserRouter>
      <Header></Header>
      <main>
        <Routes />
      </main>
      <Footer></Footer>
    </BrowserRouter>
  </ThemeProvider>
);

export default Layout;
