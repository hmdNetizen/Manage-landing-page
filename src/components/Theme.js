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
    subtitle2: {
      fontSize: "1rem",
      fontWeight: 300,
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
