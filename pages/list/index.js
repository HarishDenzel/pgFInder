import NavBar from "@/Components/NavBar/NavBar";
import Navigator from "@/Components/Ui/Navigator";
import SortButton from "@/Components/Ui/SortButton";
import {
  Box,
  Divider,
  Typography,
  IconButton,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
  SliderThumb,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import React, { useState } from "react";
import ListCard from "./Component/ListCard";
import { CheckBox, Widgets } from "@mui/icons-material";
import Footer from "@/Components/Footer";
const styles = {
  display: "flex",
  justifyContent: "space-between",
};
const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#E14E64",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(225, 78, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}
function list() {
  const [genderShow, setGenderShow] = useState(true);
  return (
    <>
      <div>
        <NavBar></NavBar>

        <div className="list-navigator">
          <Navigator />
        </div>
        <Stack
          position={"relative"}
          direction={"row"}
          spacing={2}
          justifyContent="space-around"
        >
          <Box sx={{display:{xs:'none',sm:'none',md:'block'}}} flex={2}>
            <Box
              position={"relative"}
              sx={{
                border: 1,
                borderRadius: 5,
                height: "100%",
                borderColor:'#CFD2D7',
                overflowY: "scroll",

                marginLeft: 2,
                maxHeight: "100%",
              }}
            >
            
              <div className="list-left-filter-heading">
                <p>Filter</p>
                <p>Reset</p>
              </div>
              <Divider />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
              >
                <Typography variant="h6"> PG/Hostel for</Typography>
                <IconButton onClick={() => setGenderShow(!genderShow)}>
                  {genderShow ? (
                    <ExpandMoreOutlinedIcon />
                  ) : (
                    <KeyboardArrowUpOutlinedIcon />
                  )}
                </IconButton>
              </Box>
              {genderShow && (
                <Box sx={{ px: 2 }}>
                  <Box sx={styles}>
                    <Box>
                      <Typography variant="body1">Male</Typography>
                    </Box>
                    <Radio overlay defaultChecked />
                  </Box>
                  <Box sx={styles}>
                    <Box sx={{ pt: 1 }}>
                      <Typography variant="body1">Female</Typography>
                    </Box>
                    <Radio overlay />
                  </Box>
                  <Box sx={styles}>
                    <Box sx={{ pt: 1 }}>
                      <Typography variant="body1">Others</Typography>
                    </Box>
                    <Radio overlay />
                  </Box>
                </Box>
              )}
              <Divider sx={{ m: 2 }} />
              <Box
                sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
              >
                <Typography variant="h6"> PG/Hostel for</Typography>
                <IconButton onClick={() => setGenderShow(!genderShow)}>
                  {genderShow ? (
                    <ExpandMoreOutlinedIcon />
                  ) : (
                    <KeyboardArrowUpOutlinedIcon />
                  )}
                </IconButton>
              </Box>
              {genderShow && (
                <Box sx={{ px: 2 }}>
                  <Box sx={styles}>
                    <Box sx={{ pt: 1 }}>
                      <Typography variant="body1">Private Room</Typography>
                    </Box>
                    <Box sx={{ px: 1 }}>
                      <CheckBox />
                    </Box>
                  </Box>
                  <Box sx={styles}>
                    <Box sx={{ pt: 1 }}>
                      <Typography variant="body1">2 Sharing</Typography>
                    </Box>
                    <Box sx={{ px: 1 }}>
                      <CheckBox />
                    </Box>
                  </Box>
                  <Box sx={styles}>
                    <Box sx={{ pt: 1 }}>
                      <Typography variant="body1">3 Sharing</Typography>
                    </Box>
                    <Box sx={{ px: 1 }}>
                      <CheckBox />
                    </Box>
                  </Box>
                  <Box sx={styles}>
                    <Box sx={{ pt: 1 }}>
                      <Typography variant="body1">4 Sharing</Typography>
                    </Box>
                    <Box sx={{ px: 1 }}>
                      <CheckBox />
                    </Box>
                  </Box>
                </Box>
              )}
              <Divider sx={{ m: 2 }} />
              <Box sx={{ px: 2 }}>
                <Typography variant="h6"> Price</Typography>
                <AirbnbSlider
                  slots={{ thumb: AirbnbThumbComponent }}
                  getAriaLabel={(index) =>
                    index === 0 ? "Minimum price" : "Maximum price"
                  }
                  defaultValue={[20, 40]}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ height: "1000vh", maxHeight: "100vh", overflowY: "scroll" }}
            flex={6}
  
          >
           <Box display={'flex'} sx={{justifyContent:'space-between',mb:2}}>
           <Typography variant='h6'>{"Mens PG"}</Typography>
              <SortButton />
           </Box>
            {/* <div className="list-right-header">
             
            </div> */}
            
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </Box>
          <Box sx={{display:{xs:'none',sm:'none',md:'block'}}} flex={2}>add</Box>
        </Stack>

        <Footer />
      </div>
    </>
  );
}

export default list;
