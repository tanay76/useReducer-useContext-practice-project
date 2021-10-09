import React from "react";
import ReactDOM from "react-dom";

import { theme } from "./theme/theme";

import App from "./App";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ThemeProvider>,
  document.getElementById("root")
);
