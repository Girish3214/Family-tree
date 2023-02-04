import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";

import { store } from "./store";
const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
  </Provider>
);
