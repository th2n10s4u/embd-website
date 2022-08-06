import React from "react";
import {
  Paper,
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@mui/material";

export default function TemplateTextCard(props) {
  return (
    <Paper
      ClassName="TemplateText"
      elevation={0}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",    Not changing the styling
        // alignItems: "center",        Not changing the styling
        // background: "#DEE2E9",       Not changing the styling
      }}
    >
      <Card
        elevation={0}
        sx={{
          maxWidth: 1000, // Had it set to 700, Made it wider for Wedding Dance package pricing.
          maxHeight: 475,
          flexBasis: "50%",
          alignSelf: "center",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: props.stylescard ? "250px" : null,
          minHeight: props.stylescard ? "520px" : null,
          // wordSpacing: props.stylescard ? "100px" : null,
          background: props.background ? null : "#DEE2E9",
          marginBottom: "25px",
          boxShadow: props.shadow ? null : "9px 9px 6px grey",
          borderRadius: "12px",
        }}
      >
        {props.TextCardHeader && (
          <CardContent>
            <Typography
              ClassName="TextCardHeader"
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: "400",
                fontSize: "32px",
                lineHeight: "20px",
                marginBottom: "-40px",
              }}
              // align="left"     Not changing the styling
            >
              {props.TextCardHeader}
            </Typography>
          </CardContent>
        )}
        <CardContent>
          <Typography
            ClassName="ListText"
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: props.bodyBold ? "600" : "400",
              fontSize: "24px",
              lineHeight: "24px",
              // display: "flex",
              // flexDirection: "row",
              // justifyContent: "center",
              // alignText: "center",
            }}
          >
            <List
            // sx={{
            //   display: "flex",
            //   flexDirection: "column",
            //   justifyContent: "center",
            //   alignText: "center",
            // }}
            >
              {props.ListText.map((text) => (
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: props.centered ? "center" : "left", //conditional
                    marginBottom: "-10px",
                  }}
                >
                  {text}
                </ListItem>
              ))}
            </List>
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}

//TODO Change minW minH of paper
//     add card and cardmedia with proper styling
// HOW TO MAKE THE LIST ITEMS WORK WITH PROPS
