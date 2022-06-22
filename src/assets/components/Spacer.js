import React from "react";
import { Paper, Card, Box } from "@mui/material";

export default function Spacer() {
  return (
    <Paper sx={{ display: "flex", flexDirection: "row" }}>
      <card
        sx={{ display: "flex", flexDirection: "row", justfiyContent: "center" }}
      >
        <box>
          <h1>Spacer</h1>
          <h1>Spacer</h1>
          <h1>Spacer</h1>
          <h1>Spacer</h1>
          <h1>Spacer</h1>
          <h1>Spacer</h1>
          <h1>Spacer</h1>
          <h1>Spacer</h1>
          <h1>Spacer</h1>
        </box>
      </card>
    </Paper>
  );
}
