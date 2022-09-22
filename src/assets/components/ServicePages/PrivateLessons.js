import React from "react";
import { Box } from "@mui/material";
import TemplateCard from "../TemplateComponents/TemplateCard";
import TemplateTextCard from "../TemplateComponents/TemplateTextCard";
import LatinCorte from "../../images/Latin-corte-image.png";

export default function SocialDance() {
  return (
    <React.Fragment>
      <Box
        id="privatedance"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TemplateCard
          img={LatinCorte} // Fix the latin-corte-image.png file There is white on the right side.
          buttonText="Learn More"
          CardContentHeaderFirstLine="Private Lessons"
          CardContentBodySentenceOne="The most effective way to achieve your dancing goals is through taking private lessons. Although group classes are great for learning patterns and trying out new dances, private lesson focus on footwork, foot placement, timing, body movement, musicality, posture, styling, lead/follow technique and floor craft.  Whether you are preparing for a special event or you want stand out on the dance floor taking private lessons will give you the essential techniques and confidence to reach your dancing goals."
          CardContentBodySentenceTwo="Each private lesson is 45 minutes in duration  and is custom tailored to the each student unique needs and goals. Private lessons will get you out on the dance floor in the shortest amount of time possible while having a blast!"
          boldHeader={true}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "1080px",
        }}
      >
        <TemplateTextCard
          TextCardHeader="Pricing & Packaging"
          ListText={[
            "Amount is the same for an individual or a couple",
            "Current prices are for the Santa Rosa location.",
            "Additional charges may apply for drive time and floor rates at other studios. ",
          ]}
          wrapped
          centered
        />
        <TemplateTextCard
          ListText={[
            "Introduction Consultation: $35",
            "45 Minute Private Lesson: $123",
            "5 Pack of Lessons: $500",
            "10 Pack of Lessons: $1000",
          ]}
          wrapped
          centered
        />
      </Box>
    </React.Fragment>
  );
}
