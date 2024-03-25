import React, { useState } from "react";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
//import "./Carousel.css";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";

export const Carousel = (props) => {
  const { data, style } = props;
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
      sx={[
        style,
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        },
      ]}
    >
      <IconButton
        sx={{
          position: "absolute",
          width: "2rem",
          height: "2rem",
          color: "white",
          left: "0.5rem",
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
          right: "0.5rem",
        }}
        onClick={nextSlide}
      >
        <ChevronRightOutlinedIcon />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          bottom:2,
          justifyContent: "center",
        
          
        }}
      >
        {data.map((_, idx) => {
          return (
            <Box sx={{width:12}}>
            <IconButton
             
              onClick={() => setSlide(idx)}
              key={idx}
            >
              {slide === idx ? (
                <CircleIcon style={{ fontSize: "10", }}  />
              ) : (
                <CircleOutlinedIcon style={{ fontSize: "10" }} />
              )}
            </IconButton>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
