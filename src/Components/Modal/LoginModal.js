import * as React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Box,
  Typography,
  Modal,
  TextField,
  InputAdornment,
  MenuItem,
  IconButton,
  Select,
  Divider,
} from "@mui/material";
import Primary_Button from "../Ui/Primary_Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  display: "flex",
  flexDirection: "column",
  gap: 5,
  bgcolor: "background.paper",
  borderRadius: 2.5,
  boxShadow: 24,
  p: 3,
};

export default function LoginModal({ modal, setModal }) {
    
  const handleClose = () => setModal(false);

  return (
    <div>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <IconButton onClick={handleClose}>
                <CloseRoundedIcon />
              </IconButton>
            </Box>
            <Typography variant="h4">Login</Typography>
            <Typography variant="subtitle1">
              Please enter your mobile number to proceed
            </Typography>
          </Box>
          <Box>
            <TextField
              fullWidth
              label="Mobile Number"
              type="number"
              id="outlined-start-adornment"
              InputProps={{
                startAdornment: (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      justifyContent: "space-between",
                    }}
                  >
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      variant="standard"
                      disableUnderline
                      // value={age}
                      // onChange={handleChange}
                    >
                      <MenuItem defaultValue value="india">
                        {/* <img
                            alt="india_flag"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/UlEQVR4nO2VPQ6CQBCF51gUngV6Qi23IKHjGkqhDQewBCw8gLh0VFs/M1sZfzoQx7wveclkt5k3OzMrQgghhPwDqASWJDRQ8QXAFnpk7ZYAh7hav6rgGq0Mf2Tee1iSLGnAuQnbbYM0PQTleRPOTBhwbkKS1DifHdr2iq4bQhzH+1lNyFIGtPKacF1fUJanII37/hbuft5Amh7RtkNIPMuOQRrra+idEQPXNwYGGwbyvEHX3V5aSM/07ucNODchjneh57XqOsQa6xCPo4Eh9h/W6JzJ+6UNfEPyTFRsYElCAwVfAGyhR9ZuiYhDXKxf1YhrtDD8kRFCCCFikDtgAlonA0la6QAAAABJRU5ErkJggg=="
                          /> */}
                      </MenuItem>
                    </Select>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <InputAdornment position="start">+91</InputAdornment>
                  </Box>
                ),
              }}
            />
          </Box>
          <Box>
            <Primary_Button label="Continue" fullWidth={true} />
          </Box>
          <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
            <Typography variant="subtitle1">New to PG Rental?</Typography>
            <Typography
              color="primary"
              fontWeight={600}
              sx={{ cursor: "pointer" }}
            >
              Register
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
