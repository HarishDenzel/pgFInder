import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Review_card() {
  return (
    <Box sx={{ minWidth:{xs:'100vw',sm:'30vw',xl:'20vw'},maxWidth:{sm:'40vw',xl:"20vw"},display:'inline-block' }}>
      <Box
        sx={{
          bgcolor: "#FFF",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
          height: "14vh",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          p: 2,
        }}
      >
        <Typography variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. has been the industry's standard dummy text ever since the
          1500s,
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, pt: 2 }}>
        <Image
          src={require("../../../public/assets/Images/profile.png")}
          width={50}
          height={50}
          style={{ borderRadius: "20px" }}
        />
        <Typography variant="subtitle2">{"Victor Murphy"}</Typography>
      </Box>
    </Box>
  );
}

export default Review_card;
