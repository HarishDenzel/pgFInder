import Button from "@mui/material/Button";

export default function Primary_Button(props) {
  const { starticon, color, label, onClick, fullWidth, variant } = props;
  return (
    <Button
      fullWidth = {fullWidth}
      onClick={onClick}
      style={{ textTransform: "none", padding: "9px 30px", fontSize: "small" }}
      color={color}
      variant={variant ? variant : "contained"}
      startIcon={starticon ? starticon : null}
    >
      {label}
    </Button>
  );
}
