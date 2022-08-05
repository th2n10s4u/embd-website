import * as React from "react";
import { useState } from "react";
import { Paper, Card, CardContent, Typography, Box } from "@mui/material";
import ReadMore from "./ReadMore";
import Truncate from "react-truncate";

export default function Testimonials(props) {
  const [expanded, setExpanded] = useState(false);
  const [trunk, setTrunk] = useState(false);
  // const longText = ["array of text 1","array of text 1","array of text 1"];
  const toggleLines = (e) => {
    e.preventDefault();
    setExpanded((prev) => !prev);
  };
  const handleTruncate = (truncated) => {
    setTrunk(truncated);
  };

  return (
    <React.Fragment>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ fontFamily: "tangerine", fontWeight: "600" }}
          align="center"
          variant="h2"
        >
          Testimonials
        </Typography>
        <Typography
          sx={{
            fontFamily: "tangerine",
            fontWeight: "600",
            marginTop: "-20px",
          }}
          align="center"
          variant="h3"
        >
          from Clients:
        </Typography>
      </Paper>
      <Paper
        ClassName="TestimonialPaper"
        elevation={0}
        sx={{
          minWidth: "1200px",
          minHeight: "447px",
          border: "0",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "-20px",
          marginBottom: "20px",
        }}
      >
        <Card
          elevation={0}
          sx={{
            maxWidth: "400px",
            // maxHeight: "600px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "47px",
            boxShadow: "9px 9px 6px grey",
            borderRadius: 27,
            background: "#DEE2E9",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "390px",
              // height: "590px",
              alignItems: "center",
            }}
          >
            <ReadMore>
              “ I’ve taken several salsa classes and have enjoyed every one of
              them. I know she also teaches ball room dance as well. The
              instructor, Evelyn, is extremely warm and friendly. She’s a
              wonderful teacher who spends the time helping each student excel.
              I’ve only taken the group classes but Evelyn still takes the time
              to answer any questions about the proper dance moves and helped me
              along with doing them. The class vibe is also superb, everyone is
              friendly and there to learn and have fun. Sadly, I’m moving
              otherwise I’d continue taking her lessons. People, you won’t be
              disappointed with her classes! The salsa class cost $15 but she
              also has special pricing for people that take multiple classes.” —
              Frank H.
            </ReadMore>
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
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "390px",
              height: "590px",
              alignItems: "center",
            }}
          >
            <ReadMore>
              “My husband has NEVER danced and wanted to be able to get on the
              dance floor at our sons wedding. Evelyn was able to make us feel
              relaxed, overcome his inhibitions, and accomplish that goal.
              Surprisingly, we even had fun doing it and looked forward to our
              classes. I never thought I’d see the day. If you’re looking for
              similar results, search no further.” — Molly L. H.
            </ReadMore>
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
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "390px",
              height: "590px",
              alignItems: "center",
            }}
          >
            <ReadMore>
              “I’ve taken a good amount of dance lessons, and this is by far the
              most fun and educational dance class I have taken. Ms. Evelyn is
              not only a very good instructor, she’s really fun, warm, and
              generous with her time and knowledge.” — Ginger K.
            </ReadMore>
          </CardContent>
        </Card>
      </Paper>
    </React.Fragment>
  );
}

//TODO
// Done - Center the header above the cards.
// Layout cards evenly with enough room for all text
// For some reason dev tools align-Items: center works but nothing is working within <CardContent styling> or <Card styling>
