import * as React from "react";
import { Paper, Grid, Box, Card, CardContent, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Testimonials(props) {
  return (
    <Paper
      ClassName="TestimonialPaper"
      elevation={0}
      sx={{
        minWidth: "1200px",
        minHeight: "447px",
        border: "0",
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      {/* <Typography
        sx={{ fontFamily: "tangerine", fontWeight: "600" }}
        align="center"
        variant="h2"
        display="flex"
        flexDirection="column"
      >
        Testimonials from Clients:
      </Typography> */}
      <Card
        elevation={0}
        sx={{
          maxWidth: "400px",
          maxHeight: "600px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignText: "center",
          marginTop: "47px",
          boxShadow: "9px 9px 6px grey",
          borderRadius: 27,
          background: "#DEE2E9",
        }}
      >
        <CardContent sx={{ display: "flex" }}>
          <Typography
            ClassName="CardHeaderText"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              FontSize: "16px",
              lineHeight: "24.43px",
              letterSpacing: "0.05em",
              display: "flex",
              //   flexBasis: "center",
              textAlign: "center",
              letterSpacing: "5%",
              //   alignItems: "center",
              //   marginTop: "center",
            }}
          >
            “ I’ve taken several salsa classes and have enjoyed every one of
            them. I know she also teaches ball room dance as well. The
            instructor, Evelyn, is extremely warm and friendly. She’s a
            wonderful teacher who spends the time helping each student excel.
            I’ve only taken the group classes but Evelyn still takes the time to
            answer any questions about the proper dance moves and helped me
            along with doing them. The class vibe is also superb, everyone is
            friendly and there to learn and have fun. Sadly, I’m moving
            otherwise I’d continue taking her lessons. People, you won’t be
            disappointed with her classes! The salsa class cost $15 but she also
            has special pricing for people that take multiple classes.” — Frank
            H.
          </Typography>
        </CardContent>
      </Card>
      <Card
        elevation={0}
        sx={{
          maxWidth: 400,
          maxHeight: 600,
          display: "flex",
          flexDirection: "row",
          justifyContent: "spaceAround",
          marginTop: "47px",
          boxShadow: "9px 9px 6px grey",
          borderRadius: 27,
          background: "#DEE2E9",
        }}
      >
        <CardContent sx={{ display: "flex" }}>
          <Typography
            ClassName="CardHeaderText"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              FontSize: "16px",
              lineHeight: "24.43px",
            }}
            display="flex"
            textAlign="center"
            marginTop="center"
          >
            “My husband has NEVER danced and wanted to be able to get on the
            dance floor at our sons wedding. Evelyn was able to make us feel
            relaxed, overcome his inhibitions, and accomplish that goal.
            Surprisingly, we even had fun doing it and looked forward to our
            classes. I never thought I’d see the day. If you’re looking for
            similar results, search no further.” — Molly L. H.
          </Typography>
        </CardContent>
      </Card>

      <Card
        elevation={0}
        sx={{
          maxWidth: 400,
          maxHeight: 600,
          display: "flex",
          flexDirection: "row",
          justifyContent: "spaceAround",
          marginTop: "47px",
          boxShadow: "9px 9px 6px grey",
          borderRadius: 27,
          background: "#DEE2E9",
        }}
      >
        <CardContent sx={{ display: "flex" }}>
          <Typography
            ClassName="CardHeaderText"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              FontSize: "16px",
              lineHeight: "24.43px",
            }}
            display="flex"
            textAlign="center"
            marginTop="center"
          >
            “I’ve taken a good amount of dance lessons, and this is by far the
            most fun and educational dance class I have taken. Ms. Evelyn is not
            only a very good instructor, she’s really fun, warm, and generous
            with her time and knowledge.” — Ginger K.
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}

//TODO
// Center the header above the cards.
// Layout cards evenly with enough room for all text
