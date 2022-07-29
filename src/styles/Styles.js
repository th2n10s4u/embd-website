import { createTheme } from "@mui/material/styles";

const Colors = {
  primary: "#DEE2E9",
  secondary: "#C34AC2",
  // success:
  info: "#000",
  // danger:
  // warning:
  // dark:
  light: "#aaa",
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
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: false,
      },
    },
    MuiFab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
