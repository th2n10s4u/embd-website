import { createTheme } from "@mui/material/styles";

const Colors = {
  primary: "#DEE2E9",
  secondary: "#C34AC2",
  // success:
  // info:
  // danger:
  // warning:
  // dark:
  // light:
  // muted:
  // border:
  // inverse:
  //////////////
  //Solid Color
  //////////////
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: Colors.primary,
  },
  secondary: Colors.secondary,
});

export default theme;
