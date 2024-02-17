import * as React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Box,
  Typography,
  Modal,
  TextField,
  MenuItem,
  IconButton,
  Select,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
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
  gap: 3,
  bgcolor: "background.paper",
  borderRadius: 2.5,
  boxShadow: 24,
  p:4,
  textAlign: "center",
};

const RegisterModal = ({ modal, setModal, setRegisterInfo, registerInfo }) => {
  const handleClose = () => setModal(false);

  const handleChange = (event) => {
    if(event.target.name === "terms"){
      setRegisterInfo((prev)=> ({...prev, terms: !prev.terms}))
    }
    else{
      setRegisterInfo((prev)=> ({...prev, [event.target.name] : event.target.value}))
    }
  };

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
            <Typography variant="h4">Register</Typography>
            <Typography variant="subtitle1">
              Please enter your information to proceed
            </Typography>
          </Box>
          <Box>
            <TextField
              label="Full Name"
              name="fullName"
              value={registerInfo?.fullName}
              margin="normal"
              onChange={handleChange}
              type="text"
              fullWidth
              placeholder="Enter your full name"
            />
            <TextField
              label="Email Address"
              name="email"
              value={registerInfo?.email}
              margin="normal"
              onChange={handleChange}
              type="email"
              fullWidth
              placeholder="Enter your email address"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                name="gender"
                fullWidth
                margin="normal"
                label="Gender"
                value={registerInfo?.gender}
                onChange={handleChange}
                placeholder="Choose your gender"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Date of Birth"
              name="dob"
              value={registerInfo?.dob}
              margin="normal"
              onChange={handleChange}
              type="date"
              fullWidth
              placeholder="Select your date of birth"
              InputLabelProps={{ shrink: true }}
            />
            <FormControlLabel
              sx={{ display: "flex", justifyContent: "start" }}
              checked={registerInfo?.terms}
              onChange={handleChange}
              control={<Checkbox />}
              labelPlacement="end"
              name="terms"
              label={
                <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                  <Typography>I agree with</Typography>
                  <Typography
                    color="primary"
                    sx={{ fontWeight: 600, cursor: "pointer" }}
                  >
                    Terms & Conditions
                  </Typography>
                </Box>
              }
            />
          </Box>
          <Box>
            <Primary_Button label="Register" fullWidth={true} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <Typography>I have an account</Typography>
            <Typography
              color="primary"
              sx={{ fontWeight: 600, cursor: "pointer" }}
            >
              Login
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default RegisterModal;
