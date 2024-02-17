import { Typography } from "@mui/material";
import React from "react";

function DualColorText(props) {
  const { label1, label2 } = props;
  return (
    <div className="dual-color-Text-con">
      <Typography variant="title" fontSize={'30px'} color={"#000"} noWrap>{label1}</Typography>
      <Typography  variant="title" color="inherit" noWrap>
        &nbsp;
      </Typography>
      <Typography fontSize={'30px'} variant="title"  color="primary">{label2}</Typography>
    </div>
  );
}

export default DualColorText;
