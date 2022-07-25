import React from "react";
import { Typography, Box, Card, Paper, CardMedia } from "@mui/material";
import RobotDance from "../images/Robot-dance-image.png";
import TemplateTextCard from "./TemplateTextCard";

export default function StudioPolicy() {
  return (
    <React.Fragment>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Card
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "800px",
            maxHeight: "500px",
          }}
        >
          <CardMedia
            component="img"
            image={RobotDance}
            alt="robot image"
          ></CardMedia>
        </Card>
      </Paper>

      <TemplateTextCard
        TextCardHeader="Etiquette for dancing with other humans"
        ListText={[
          "Human interaction is one of the best parts of learning to dance with a partner. It's social and an all around blast! Here are some unspoken rules for dancing with a partner:",
          "Cleanliness is never underrated. Since you are in close personal quarters your nose is often quite aware of your partner. Fresh breathe and clean bodies are always appreciated. As dancing takes us back to the good old days of gentlemen and ladies please remember your manners. Always ask your partner to dance, never leave the floor in the middle of a song and always thank your partner after the song has ended. ",
        ]}
        background
        shadow
        centered
      />

      <TemplateTextCard
        TextCardHeader="Attire"
        ListText={[
          "Please wear comfortable attire to class. Low heeled shoes that fit securely are best for your first lesson. Please avoid sandals and sky high heels. After your first few lessons, we encourage you to purchase dance shoes. These shoes are designed specifically for dance and prevent injuries.  If you are in the local LA area, you can print out this coupon to purchase a 2-1 deal. ",
        ]}
        background
        shadow
        centered
      />
      <TemplateTextCard
        TextCardHeader="Disclaimer & Waiver"
        ListText={[
          "Dancing, just like any physical activity comes with an inherent risk. Consult a physician before participating. It is your responsibility to evaluate your own medical and physical condition, or that of your clients, and to independently determine whether to perform, use or adapt any of the instructional exercises. Any exercise program may result in injury. By voluntarily undertaking any exercise instruction online or in person, you assume the risk of any resulting injury. ",
        ]}
        background
        shadow
        centered
      />
      <TemplateTextCard
        TextCardHeader="Coupon Use"
        ListText={[
          "Coupons and vouchers cannot be used with in conjunction with any other promotional discount or lesson package.  Discounts will be taken off of original single lesson/class prices.  ",
        ]}
        background
        shadow
        centered
      />
      <TemplateTextCard
        TextCardHeader="Cancellation Policy"
        ListText={[
          "24 hour cancellation period is required for all private lesson and consultations. Cancellation notices received after the 24 hour window are subject to a charge of 1/2 of the lesson rate in order to cover studio rental time and instructor time. ",
        ]}
        background
        shadow
        centered
      />
      <TemplateTextCard
        TextCardHeader="Refund Policy"
        ListText={[
          "Refunds are available for unused private lessons and group classes up to 1 year after the purchase date. Your group class pass must be presented for a refund on all unused group classes. Unused private lesson packages and group class packages will be refunded at the non discounted price.",
        ]}
        background
        shadow
        centered
      />

      <TemplateTextCard
        TextCardHeader="Covid-19 Protocall"
        ListText={[
          "In accordance with current guidelines:",
          "Masks are required for all students. If you are experiencing any COVID related symptoms, please do not enter. Thank you for continuing to keep Evelyn Meinz Ballroom Dance a safe space for our community.",
        ]}
        background
        shadow
        centered
        bodyBold
      />
    </React.Fragment>
  );
}

//Props should require ={false} for templatetext?
