import { SvgIcon } from "@mui/material";
import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function SortButton() {
  return (
    <div className="sort-button">
      <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
        <SvgIcon sx={{fontSize:'20px'}} style={{marginLeft:'5px'}} component={FilterListIcon}></SvgIcon>
        <p>Sory by</p>
      </div>

      <SvgIcon sx={{fontSize:'20px'}} style={{marginLeft:'15px'}} component={KeyboardArrowDownOutlinedIcon}></SvgIcon>
    </div>
  );
}

export default SortButton;
