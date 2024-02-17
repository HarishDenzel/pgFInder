import { SvgIcon } from "@mui/material";
import { icon } from "../../public/assets/Icons/index";
import Button from "@mui/material/Button";

export default function Secondary_Button(props) {
  const { starticon, color,label,contained } = props;
 
  return (
    <Button
style={{ textTransform: "none", padding: "9px 30px",fontSize:'small' ,borderWidth:1,borderColor:color}}
     
      variant={contained?'outlined':'outlined'}
      startIcon={starticon ? <SvgIcon component={icon.login} /> : null}
    >
      
      {label}
    </Button>
  );
}
