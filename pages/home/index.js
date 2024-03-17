import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import NavBar from "@/Components/NavBar/NavBar";
import { Divider, Grid, Typography, Box } from "@mui/material";
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

export default function Home() {
  const theme = useTheme();
  const [modal, setModal] = useState(false);
  const [otp, setOTP] = useState("");
  const [registerInfo, setRegisterInfo] = useState({
    fullName: "",
    email: "",
    gender: "",
    dob: "",
    terms: false,
  });

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

        <div className="home-header-bg">
          <div className="home-header-title">
            <h1>Simple way to find </h1>
            <h1>the your perfect PG/Hostel</h1>
          </div>

          <div className="home-search-container">
            <div className="home-select-city">
              <span>{"Select City"}</span>
              <KeyboardArrowDownIcon />
            </div>
            <Divider
              style={{ backgroundColor: "#EBECF0" }}
              orientation="vertical"
              flexItem
            />
            <div className="home-search-city">
              <input placeholder="Search location or PG / Hoster name" />
            </div>
            <div className="home-search-button">
              <Primary_Button
                label={"Search"}
                color={"primary"}
                starticon={false}
              />
            </div>
          </div>
        </div>

        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "45px",
          }}
        >
          <Box
            sx={{
              height: { md: "40vh", sm: "35vh" },
              width: { md: "90vw", sm: "90vw" },
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
              <Typography>
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
        <Box sx={{ bgcolor: "#F3ECED", height: "40vh", width: "100%" }}>
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
        <div className="home-pg-count">
          <div
            style={{ flex: 1, display: "flex", justifyContent: "space-around" }}
          >
            <Counter img={home} number={100} />
            <Counter img={sofa} number={100} />
            <Counter img={man} number={100} />
          </div>
        </div>
        <div className="home-details">
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
        </div>
      </>
    </Box>
  );
}
