import { SvgIcon } from "@mui/material";
import { icon } from "../../../public/assets/Icons";
import Button from "@mui/material/Button";
SvgIcon;
export default function Primary_Button(props) {
  const { starticon, color,label } = props;
  return (
    <Button
style={{ textTransform: "none", padding: "9px 30px",fontSize:'small' }}
      color={color}
      variant="contained"
      startIcon={starticon ? <SvgIcon component={icon.login} /> : null}
    >
      
      {label}
    </Button>
  );
}
