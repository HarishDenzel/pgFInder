import { Typography, Box, CardMedia } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

function Card() {
  return (
    <Box component={"div"} className={"home-review-card"}>
      
        <Box sx={{ mt: 30, p: 7 }}>
          <Typography variant="h5" sx={{ fontWeight: "Bold" }}>
            {"Trusted By Thousands"}
          </Typography>
          <Typography variant="body1">
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
            }
          </Typography>
        </Box>
      
    </Box>
  );
}

export default Card;
