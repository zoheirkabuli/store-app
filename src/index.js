import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

//
const theme = {
  color: {
    primary: "#b31106",
    secondary: "#f69406",
    body: "#212121",
    headerBg: "white",
    footerBg: "#2b2b2b",
  },

  borderRadius: "1rem",
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
