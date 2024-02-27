import  SvgIcon  from "@mui/material/SvgIcon";
import Button from "@mui/material/Button";
import { icon } from "../../../public/assets/Icons";

export default function Primary_Button(props) {
  const { starticon, color, label, onClick, fullWidth, variant } = props;
  return (
    <Button
      fullWidth = {fullWidth}
      onClick={onClick}
      style={{ textTransform: "none", padding: "9px 30px", fontSize: "small" }}
      color={color}
      variant={variant ? variant : "contained"}
      startIcon={starticon ? (<SvgIcon  component={icon.login}/> ): null}
    >
      {label}
      <SvgIcon >
     {icon.login}
      </SvgIcon>
    </Button>
  );
}
