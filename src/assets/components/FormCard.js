import React from "react";
import {
  Card,
  Divider,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import Main from "./Main";
import TemplateCard from "./TemplateCard";
import WoodsDance from "../images/Couple-woods-image.png";

export default function FormCard() {
  return (
    <Main>
      <div>
        <box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TemplateCard
            img={WoodsDance}
            buttonText="Submit"
            CardContentHeaderFirstLine="Schedule Your First Lesson Today! "
          />
        </box>
      </div>
    </Main>
  );
}
