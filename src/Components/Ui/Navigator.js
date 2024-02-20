import { Box, Typography } from "@mui/material";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
function Navigator() {
  const styles = {
    p: 2,
    alignItems: "center",
    pl: 3,
    mb: 2,
    display: "flex",
  };
  return (
    <Box display={"flex"} sx={styles}>
      <Typography variant="body2">{"Home"}</Typography>
      <NavigateNextIcon></NavigateNextIcon>
      <Typography variant="body2">{"Chennai"}</Typography>
    </Box>
  );
}

export default Navigator;
