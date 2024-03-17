import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

function Counter(props) {
  const { img, number } = props;
  return (
    <Box display={"flex"}>
      <Image src={img} width={100} height={100} alt="home" />
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          ml: 2,
        }}
      >
        <CountUp
          scrollSpyOnce={true}
          enableScrollSpy={true}
          style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}
          duration={10}
          end={number}
        />
        <Typography variant="h6" color={"#fff"}>
          Popular Cities
        </Typography>
      </Box>
    </Box>
  );
}

export default Counter;
