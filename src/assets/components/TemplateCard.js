/* Reusable layout for photos, buttons, words on a card or paper throughout the application */
import * as React from "react";
import {
  Card,
  Divider,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { grey } from "@mui/material/colors";

export default function TemplateCard(props) {
  //   console.log(props);
  return (
    <Paper
      ClassName="TemplatePaper"
      elevation={0}
      sx={{
        minWidth: "50%", //"1200px", // Play with sizing (100% is too wide)
        minHeight: "447px",
        border: "0",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
        marginBottom: "20px",
        flexDirection: props.reverse ? "row-reverse" : "row",
      }}
    >
      {/* <Divider /> */}
      <Card
        elevation={0}
        sx={{
          maxWidth: 400,
          maxHeight: 600,
          display: "flex",
          flexDirection: "column",
          justifyContent: "spaceBetween",
          marginTop: "40px",
        }}
      >
        <CardMedia
          elevation={0}
          sx={{
            component: "img",
            border: "0",
            height: "350px",
            width: "350px",
            margin: "12px",
            marginTop: "0px",
            marginBottom: "16px",
            boxShadow: "9px 9px 6px grey",
            borderRadius: 12,
          }}
          image={props.img}
          alt="image-goes-here"
        />

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {props.buttonText && (
            <Button
              style={{
                minWidth: "313px",
                minHeight: "40px",
                marginBottom: "40px",
                boxShadow: "5px 5px 5px grey",
              }}
              variant="contained"
              borderRadius="12"
              size="extraLarge"
              display="flex"
            >
              {props.buttonText}
            </Button>
          )}
        </CardActions>
      </Card>

      <Card
        elevation={0}
        sx={{
          maxWidth: 650,
          maxHeight: 550,
          flexBasis: "50%",
          alignSelf: "center",
        }}
      >
        <CardContent>
          <Typography
            ClassName="CardHeaderText"
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: "400",
              fontSize: "32px",
              lineHeight: "20px",
            }}
            align="left"
          >
            {props.CardContentHeaderFirstLine}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              lineHeight: "95.7%",
              paragraphSpacing: "28",
              letterSpacing: "0",
              fontSize: "24px",
              marginTop: "10px",
            }}
            align="left"
          >
            {props.CardContentBody}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              lineHeight: "95.7%",
              paragraphSpacing: "28",
              letterSpacing: "0",
              fontSize: "24px",
              marginBottom: "20px",
            }}
            align="left"
          >
            {props.CardContentBodySentenceOne}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              lineHeight: "95.7%",
              paragraphSpacing: "28",
              letterSpacing: "0",
              fontSize: "24px",
              marginBottom: "20px",
            }}
            align="left"
          >
            {props.CardContentBodySentenceTwo}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              lineHeight: "95.7%",
              paragraphSpacing: "28",
              letterSpacing: "0",
              fontSize: "24px",
              marginBottom: "20px",
            }}
            align="left"
          >
            {props.CardContentBodySentenceThree}
          </Typography>
        </CardContent>
      </Card>
      {props.children}
    </Paper>
  );
}
