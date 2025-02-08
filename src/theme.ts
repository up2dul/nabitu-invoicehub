"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  typography: {
    fontFamily: "var(--open-sans)",
  },
  palette: {
    primary: {
      main: "#3C50E0",
      dark: "#1C2434",
      light: "#F1F5F9",
      contrastText: "#F4F4F4",
    },
  },
});

export default theme;
