import React from "react";
import { Typography, Paper, Box } from "@mui/material";
import TemplateCard from "../TemplateComponents/TemplateCard";
import EvHeadshot from "../../images/Evelyn-headshot.png";
import TimHeadshot from "../../images/Tim-headshot.png";
import { HashLink } from "react-router-hash-link";

export default function TeacherProfiles() {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Paper
          elevation={0}
          sx={{
            minWidth: "100%", //"1200px", // Play with sizing (100% is too wide)
            minHeight: "447px",
            border: "0",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
            flexDirection: "row", //conditional operator
          }}
        >
          <Typography
            id="teacherprofiles"
            sx={{
              maxWidth: 800,
              fontFamily: "Poppins",
              fontWeight: "400",
              lineHeight: "100%",

              letterSpacing: "2px",
              fontSize: "34px",
              marginTop: "10px",
              marginBottom: "50px",
            }}
            align="center"
          >
            Our team of highly trained independent dance instructors are here to
            help you achieve your dancing goals while smiling to avoiding your
            partner's toes. We strive to deliver quality technique and style in
            a fun easy to learn fashion. This takes lots of practice and is why
            we have professionals on our team who have been teaching for years.
            We have many years of teaching experience in the social,
            performance, and competitive dance world and love to teach even the
            most unruly two left feet.
          </Typography>
        </Paper>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <React.Fragment>
          <TemplateCard
            img={EvHeadshot}
            CardContentHeaderFirstLine="Evelyn Meinz, Owner & Instructor"
            CardContentBodySentenceOne='Evelyn has been teaching dance in the Southern California are since2003. Originally starting in the world of Ballet she realized years later that partnership dancing is "where it&apos;s at" and quickly joined the world of Salsa dancing. Soon after followed Swing then Waltz. Pretty soon a full blown addiction had developed and she now teaches over 30 different partnership dance styles. Whether you want something classic, sultry, dramatic or fun Evelyn can teach you. Having had experienced working in large studios for years she eventually left in order to bring her own dance philosophy to life. She believes that proper high quality technique and style can be taught in a fun environment to beginning and advanced dancers.'
            boldHeader={true}
            centerHeader
            centerBodyOne
            centerBodyTwo
            background
            shadow
            radius
          />
        </React.Fragment>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TemplateCard
          img={TimHeadshot}
          CardContentHeaderFirstLine="Tim Hughes, Instructor"
          CardContentBodySentenceOne="Tim first fell in love with dancing when he was 18 years old. He loves the structure, elegance, and movement that ballroom dance brings to the floor and is inspired to teach quality technique and styling to his students.  He enjoys working with both beginner and advanced students to help them take their dancing to the next level. "
          boldHeader={true}
          centerHeader={true}
          centerBodyOne
          reverse
          background
          shadow
          radius
        />
      </Box>
    </React.Fragment>
  );
}
