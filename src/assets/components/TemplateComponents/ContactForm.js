import React, { Form } from "react";
import { Box, TextField, Button } from "@mui/material";

export default function ContactForm() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "313px",
      }}
    >
      <Form action="https://www.actionforms.io/e/r/evelyn-meinz-ballroom-dance">
        <TextField
          label={"NAME"}
          id="FormName"
          name="FormName"
          margin="normal"
          variant="filled"
          autoComplete="none"
        />
        <TextField
          label={"EMAIL"}
          id="FormEmail"
          name="FormEmail"
          margin="normal"
          variant="filled"
          autoComplete="none"
        />
        <TextField
          label={"PHONE"}
          id="FormPhone"
          name="FormPhone"
          margin="normal"
          variant="filled"
          autoComplete="none"
        />
        <Button
          type="submit"
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
        >
          Submit
        </Button>
      </Form>
    </Box>
  );
}

//TODO: dropshadow, give the container around the form and the header a fixed width, then text-align: centering the header. Other option is to give the container align-items: center, but then the box won’t be left aligned.
