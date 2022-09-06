import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import SnackBarAlert from "../TemplateComponents/SnackBarAlert";

export default function ContactForm() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // alert(
    //   "You're information has been sent and you will be contacted within 1-2 business days."
    // );
    console.log(inputs);
    ///
    var formdata = new FormData();
    formdata.append("name", inputs.name);
    formdata.append("email", inputs.email);
    formdata.append("phone", inputs.phone);

    var requestOptions = {
      method: "POST",
      body: JSON.stringify(inputs),
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    fetch(
      "https://www.actionforms.io/e/r/evelyn-meinz-ballroom-dance",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  ///
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        maxWidth: "313px",
      }}
    >
      <form
        autoComplete="new-password"
        action="https://www.actionforms.io/e/r/evelyn-meinz-ballroom-dance"
        onSubmit={handleSubmit}
      >
        <TextField
          sx={{ minWidth: "100%" }}
          value={inputs.name}
          label={"NAME"}
          onChange={handleInputChange}
          id="FormName"
          name="name"
          margin="normal"
          variant="filled"
          autoComplete="off"
        />
        <TextField
          sx={{ minWidth: "100%" }}
          value={inputs.email}
          label={"EMAIL"}
          onChange={handleInputChange}
          id="FormEmail"
          name="email"
          margin="normal"
          variant="filled"
          autoComplete="off"
        />
        <TextField
          sx={{ minWidth: "100%" }}
          value={inputs.phone}
          label={"PHONE"}
          onChange={handleInputChange}
          id="FormPhone"
          name="phone"
          margin="normal"
          variant="filled"
          autoComplete="off"
        />
        {/* <Button
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
        </Button> */}
        <SnackBarAlert />
      </form>
    </Box>
  );
}
