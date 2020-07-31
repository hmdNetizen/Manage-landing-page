import { createMuiTheme } from "@material-ui/core/styles";

const brightRed = "hsl(12, 88%, 59%)";
const darkBlue = "hsl(228, 39%, 23%)";
const greyishBlue = "hsl(227, 12%, 61%)";
const vDarkBlue = "hsl(233, 12%, 13%)";
const paleRed = "hsl(13, 100%, 96%)";
const lightGrey = "hsl(0, 0%, 98%)";

export const theme = createMuiTheme({
  palette: {
    common: {
      blue: darkBlue,
      red: brightRed,
      greyishBlue: greyishBlue,
      darkBlue: vDarkBlue,
      paleRed: paleRed,
      lightGrey: lightGrey,
    },
    primary: {
      main: darkBlue,
    },
    secondary: {
      main: brightRed,
    },
  },
  typography: {
    fontFamily: "Be Vietnam, sans-serif",
    h1: {
      fontSize: "3em",
      color: darkBlue,
      fontWeight: 500,
    },
    h2: {
      fontSize: "2.5em",
      color: darkBlue,
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.7rem",
    },
    h5: {
      fontSize: "1.2rem",
      fontWeight: 500,
      color: darkBlue,
    },
    h6: {
      color: darkBlue,
    },
    subtitle1: {
      fontSize: "1.2rem",
      color: greyishBlue,
      fontWeight: 300,
    },
    subtitle2: {
      fontSize: "1rem",
      fontWeight: 300,
      color: greyishBlue,
    },
    btn: {
      padding: ".5em 1.5em",
      borderRadius: "50px",
      color: lightGrey,
      background: brightRed,
      textTransform: "none",
    },
  },
});
