import * as React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Box,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import Primary_Button from "../Ui/Primary_Button";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import OtpInput from "react-otp-input";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  display: "flex",
  flexDirection: "column",
  gap: 4,
  bgcolor: "background.paper",
  borderRadius: 2.5,
  boxShadow: 24,
  py: 2,
  px: 4,
  textAlign: "center",
};

const OTPModal = ({ modal, setModal, otp, setOTP }) => {
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
            <Typography variant="h4">Verification Code</Typography>
            <Typography variant="subtitle1">
              we sent an 4 digit code to {1234567890}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <OtpInput
              value={otp}
              onChange={setOTP}
              numInputs={4}
              containerStyle={{
                display: "flex",
                justifyContent: "center",
                gap: 10,
              }}
              inputStyle={{
                height: 50,
                width: 50,
                fontSize: 20,
                padding: 15,
              }}
              skipDefaultStyles
              renderInput={(props) => <input {...props} />}
            />
            <Box>time</Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
            <Typography>Didn’t receive the code?</Typography>
            <Typography
              color="primary"
              sx={{ cursor: "pointer", fontWeight: 600 }}
            >
              Resend
            </Typography>
          </Box>
          <Box>
            <Primary_Button label="Verify OTP" fullWidth={true} />
          </Box>
          <Box>
            <Primary_Button label="Back" variant="text" starticon={<ArrowBackRoundedIcon />} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default OTPModal;
