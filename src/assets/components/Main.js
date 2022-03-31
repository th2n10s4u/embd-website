import React from "react"
import { Box } from "@mui/material"

export default function Main() {
    return (
        <div>
            {/* I need to add either cards or some sort of flex in order to place a photo on one side and text on the other.  */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>

                <h1>This is a Header</h1>;
            
            </Box>
        </div>
    )
}