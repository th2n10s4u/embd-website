import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBarAlert() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={10} sx={{ width: "100%" }}>
      <Button
        onClick={handleClick}
        style={{
          minWidth: "313px",
          minHeight: "40px",
          marginTop: "20px",
          boxShadow: "5px 5px 5px grey",
        }}
        color="secondary"
        variant="contained"
        borderRadius="12"
        size="extraLarge"
        display="flex"
        boxShadow="9px 9px 6px grey"
        background="#fffff"
        type="submit"
      >
        Submit
      </Button>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", fontSize: "XLarge" }}
        >
          Your form has been submitted successfully!
        </Alert>
      </Snackbar>
      {/* <Alert severity="success">This is a success message!</Alert> */}
    </Stack>
  );
}
