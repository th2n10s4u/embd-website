/* Reusable layout for photos, buttons, words on a card or paper throughout the application */
import React from "react";
import {
  Card,
  Divider,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { grey } from "@mui/material/colors";

export default function TemplateCard(props) {
  //   console.log(props);
  return (
    <Grid
      container
      rowSpacing={5}
      ClassName="TemplatePaper"
      sx={{
        // minWidth: "50%", //"1200px", // Play with sizing (100% is too wide)
        minHeight: "447px",
        border: "0",
        display: "flex",
        // justifyContent: "space-between",
        // marginTop: "20px",
        marginBottom: "20px",
      }}
      alignItems="center"
      direction={props.reverse ? "row-reverse" : "row"} //conditional operator
      justifyContent="center"
    >
      {/* <Divider /> */}
      <Grid item>
        <Card
          elevation={0}
          sx={{
            alignItems: "center",
            minWidth: "522px",
            maxWidth: 400,
            maxHeight: 600,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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
                component={HashLink}
                to="/Contact"
                style={{
                  minWidth: "313px",
                  minHeight: "40px",
                  marginBottom: "40px",
                  boxShadow: "5px 5px 5px grey",
                }}
                color="secondary"
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
      </Grid>
      <Grid item>
        {(props.CardContentHeaderFirstLine ||
          props.CardContentBody ||
          props.CardContentBodySentenceOne) && (
          <Card
            elevation={0}
            sx={{
              maxWidth: 650,
              maxHeight: 550,

              flexBasis: "50%",
              alignSelf: "center",
              marginBottom: "25px",
              //(MAKE ALL OF THE BELOW STYLING CONDITIONAL WITH PROPS.BACKGROUND) you can use the same property for multiple styles.
              background: props.background ? "#eceff1" : null, // Searching for similar colors in mui:"#DEE2E9"
              boxShadow: props.background ? "9px 9px 6px grey" : null,
              borderRadius: props.background ? "12px" : null,
            }}
          >
            <CardContent>
              <Typography
                ClassName="CardHeaderText"
                sx={{
                  fontFamily: "Playfair Display",
                  fontWeight: props.boldHeader ? "600" : "400",
                  fontSize: "32px",
                  lineHeight: "20px",
                  textAlign: props.centerHeader ? "center" : "left",
                }}
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
                  minWidth: "510px",
                }}
                align="left"
              >
                {props.CardContentBody}
              </Typography>
              {/*  */}
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  lineHeight: "95.7%",
                  paragraphSpacing: "28",
                  letterSpacing: "0",
                  fontSize: "24px",
                  marginBottom: "20px",
                  textAlign: props.centerBodyOne ? "center" : "left", //conditional
                }}
                // align="left"
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
                  textAlign: props.centerBodyTwo ? "center" : "left", //conditional
                }}
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
                  textAlign: props.centerBodyThree ? "center" : "left", //conditional
                }}
                align="left"
              >
                {props.CardContentBodySentenceThree}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Grid>
      <Grid item>{props.children}</Grid>
    </Grid>
  );
}
