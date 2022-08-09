import React, { useState } from "react";
import Truncate from "react-truncate";
import { Typography } from "@mui/material";

export default function ReadMore(props) {
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
    <Typography
      ClassName="CardHeaderText"
      sx={{
        fontFamily: "Poppins",
        fontWeight: "400",
        FontSize: "16px",
        lineHeight: "24.43px",
        letterSpacing: "0.05em",
        letterSpacing: "5%",
        textAlign: "center",
        // marginTop: "20px", lowers the bottom margin of the card but allows the text to fit properly.
      }}
    >
      <Truncate
        lines={!expanded && 2}
        ellipsis={
          <span>
            ...{" "}
            <a href="#" onClick={toggleLines}>
              Read more
            </a>
          </span>
        }
        onTruncate={handleTruncate}
      >
        {props.children}
      </Truncate>
      {!trunk && expanded && (
        <span>
          {" "}
          <a href="#" onClick={toggleLines}>
            Show less
          </a>
        </span>
      )}
    </Typography>
  );
}
