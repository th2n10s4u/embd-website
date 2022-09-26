import React from "react";
import {
  Paper,
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
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap-reverse",
      }}
    >
      <Card
        elevation={0}
        sx={{
          minWidth: "320px",
          alignSelf: "center",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: props.stylescard ? "250px" : null,
          minHeight: props.stylescard ? "520px" : null,
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
                lineHeight: "30px",
                marginBottom: "-40px",
              }}
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
            }}
          >
            <List>
              {props.ListText.map((text) => (
                <ListItem
                  sx={{
                    display: "flex",
                    whiteSpace: props.wrapped ? "wrap" : "nowrap",
                    flexDirection: "column",
                    padding: "10px",
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
