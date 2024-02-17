import { Typography } from "@mui/material";
import React from "react";

function Card() {
  return (
    <div className="home-review-card">
    <div className="home-review-card-heading"> 
    <h2>{"Trusted By Thousands"}</h2>
    </div>
     <div>
     <Typography>
        {
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        }
      </Typography>
     </div>
     
    </div>
  );
}

export default Card;
