import React, { useState } from "react";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
//import "./Carousel.css";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const room = require("../../../public/assets/Images/room.png");
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "30vw",
        height: "30vh",
        position: "relative",
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          width: "2rem",
          height: "2rem",
          color: "white",
          left: "1rem",
        }}
        onClick={prevSlide}
      >
        <ChevronLeftOutlinedIcon />
      </IconButton>

      {data.map((item, idx) => {
        return (
          <Image
            style={
              slide === idx
                ? { width: "100%", height: "100%" }
                : { display: "none" }
            }
            src={item.src}
            alt={item.alt}
            key={idx}
          />
        );
      })}
      <IconButton
        sx={{
          position: "absolute",
          width: "2rem",
          height: "2rem",
          color: "white",
          right: "1rem",
        }}
        onClick={nextSlide}
      >
        <ChevronRightOutlinedIcon />
      </IconButton>
      <Box sx={{ display: "flex", position: "absolute", bottom: 1,justifyContent:'center' }}>
        {data.map((_, idx) => {
          return (
           
            <IconButton
              sx={{ bottom: "1rem", }}
              onClick={() => setSlide(idx)}
              key={idx}
            >
              {slide === idx ? <CircleIcon style={{fontSize:'10'}} /> : <CircleOutlinedIcon style={{fontSize:'10'}} />}
            </IconButton>
          );
        })}
      </Box>
    </Box>
  );
};
