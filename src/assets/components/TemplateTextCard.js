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
          maxWidth: 700,
          maxHeight: 475,
          flexBasis: "50%",
          alignSelf: "center",
          textAlign: "center",
          background: "#DEE2E9",
          marginBottom: "16px",
          boxShadow: "9px 9px 6px grey",
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
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "18px",
              display: "flex",
              flexDirection: "row",
              alignText: "right",
            }}
          >
            <List>
              {props.ListText.map((text) => (
                <ListItem>{text}</ListItem>
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
