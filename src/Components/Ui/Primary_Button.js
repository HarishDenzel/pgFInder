import  SvgIcon  from "@mui/material/SvgIcon";
import Button from "@mui/material/Button";
import { icon } from "../../../public/assets/Icons";
import Image from "next/image";
import UserIcon from '@mui/icons-material/AccountCircle';
import { Typography } from "@mui/material";

export default function Primary_Button(props) {
  const { starticon, color, label, onClick, fullWidth, variant } = props;
  return (
    
    <Button
      fullWidth = {fullWidth}
      onClick={onClick}
      style={{ textTransform: "none", padding: "9px 30px", fontSize: "small" }}
      color={color}
      variant={variant ? variant : "contained"}
      startIcon={starticon ? <UserIcon/> : null}
    >
    <Typography variant="h6" sx={{fontSize:''}}>
      {label}
    </Typography>
     
      {/* <SvgIcon >
     {icon.login}
      </SvgIcon> */}
    </Button>
  );
}
