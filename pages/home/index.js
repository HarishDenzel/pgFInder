import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import NavBar from "@/Components/NavBar/NavBar";
import {
  Grid,
  Typography,
  Box,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";

import Primary_Button from "@/Components/Ui/Primary_Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Review_card from "@/Components/Ui/Review_card";
import Image from "next/image";
import sofa from "../../public/assets/Images/sofa.png";
import man from "../../public/assets/Images/man.png";
import home from "../../public/assets/Images/home.png";
import logo from "../../public/assets/Images/logo.png";
import DualColorText from "@/Components/Ui/DualColorText";
import Card from "@/Components/Ui/Card";
import LoginModal from "@/Components/Modal/LoginModal";
import OTPModal from "@/Components/Modal/OTPModal";
import RegisterModal from "@/Components/Modal/RegisterModal";
import Head from "next/head";

import Counter from "@/Components/Ui/Counter";
import { theme } from "@/utils/theme";
import SearchBar from "./Component/SearchBar";
import {  toast } from 'react-toastify';
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  const [modal, setModal] = useState(false);
  const [otp, setOTP] = useState("");
  const [searchPlace,setSearchPlace] = useState('')

  const [personName, setPersonName] = React.useState([]);
  const [registerInfo, setRegisterInfo] = useState({
    fullName: "",
    email: "",
    gender: "",
    dob: "",
    terms: false,
  });

const _searchTrigger =()=>{
  if(searchPlace == ''){
    toast('please enter proper value')
  }else{
router.push('/list')
  }
 
}
let handleChange = (e) => {
  setSearchPlace(e.target.value);
 
};
  return (
    <Box sx={{ width: "100vw" }}>
      {/* <LoginModal modal={modal} setModal={setModal} /> */}
      {/* <OTPModal modal={modal} setModal={setModal} otp={otp} setOTP={setOTP} /> */}
      <RegisterModal
        modal={modal}
        setModal={setModal}
        registerInfo={registerInfo}
        setRegisterInfo={setRegisterInfo}
      />

      <NavBar setModal={setModal} />
      <>
        <Head>
          <title>PG Finder - Home</title>
        </Head>

        <Grid className="home-header-bg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              color={"#fff"}
              sx={{ typography: { xs: "h5", sm: "h3", md: "h4" } }}
              textAlign={"center"}
            >
              Simple way to find{" "}
            </Typography>
            <Typography
              color={"#fff"}
              sx={{ typography: { xs: "h5", sm: "h3", md: "h4" } }}
              textAlign={"center"}
            >
              the your perfect PG/Hostel
            </Typography>

           <SearchBar 
            onChange={handleChange}
            value={searchPlace}
           onClick={()=>_searchTrigger()}
            />
          </Box>
        </Grid>
    

        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px",
           
          }}
        >
          <Box
            sx={{
              height: {xs:'35vh', md: "40vh", sm: "35vh" },
              width: {xs:'95vw', md: "90vw", sm: "90vw" },
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
            className="home-body-image-container"
          >
            <Box
              sx={{
                height: { sm: "20vh" },
                width: { sm: "50vw" },
                ml: { sm: "30vw" },
              }}
            >
              <Typography variant="h6" color={"secondary"}>
                {"Register to Post your "}
                <Typography color={"primary"} variant="body1">
                  {"property for free"}
                </Typography>
              </Typography>
              <Typography variant='caption'>
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
                <br /> has been the industry's standard dummy text ever since
                the 1500s"
              </Typography>
              <Box sx={{ py: 2 }}>
                <Primary_Button color={"secondary"} label={"Post Now "} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Box sx={{ bgcolor: "#F3ECED", height: "50vh", width: "100%" }}>
          <Box
            sx={{
              textAlign: "center",
              alignSelf: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <DualColorText label1={"What our"} label2={"Customer say"} />

            <Typography variant="body2" style={{ width: "100%" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. has been the industry's standard dummy text ever since
              the 1500s,
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              mt: 3,
              width: "100%",

              overflowY: "auto",
            }}
          >
            {
              <>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    gap: 2,
                    p: 1,
                    mr: 2,
                    justifyContent: "space-around",
                  }}
                >
                  <Review_card />
                  <Review_card />
                  <Review_card />
                  <Review_card />
                </Box>
              </>
            }
          </Box>
        </Box>
        {/* <div className="home-pg-count">
          <div
            style={{ flex: 1, display: "flex", justifyContent: "space-around" }}
          >
            <Counter img={home} number={100} />
            <Counter img={sofa} number={100} />
            <Counter img={man} number={100} />
          </div>
        </div> */}
        {/* <div className="home-details">
          <div className="home-review-header">
            <DualColorText label1={"What our"} label2={"Customer say"} />

            <Typography style={{ width: "60%" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. has been the industry's standard dummy text ever since
              the 1500s,
            </Typography>
          </div>

          <div className="home-details-card-container">
            <Card />
            <Card />
            <Card />
          </div>
        </div> */}
      </>
    </Box>
  );
}
