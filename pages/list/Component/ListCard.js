import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import room from "../../../public/assets/Images/room.png";
import { Divider, SvgIcon, Typography } from "@mui/material";
import { icon } from "../../../public/assets/Icons";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import food from "../../../public/assets/Images/food.png";
import Image from "next/image";
import Primary_Button from "@/Components/Ui/Primary_Button";
import Secondary_Button from "@/Components/Secondary_Button";
function listCard() {
  const logo = require("../../../public/assets/Images/food.png");
  const room = require("../../../public/assets/Images/room.png");
  return (
    <div className="list-card-con">
      <div className="list-card-left">
        <Carousel showArrows={true} autoPlay>
          <div>
            <Image
              style={{ height: "100%", width: "100%" }}
              alt="food"
              src={room}
            ></Image>
          </div>
          <div>
            <Image
              style={{ height: "100%", width: "100%" }}
              alt="food"
              src={room}
            ></Image>
          </div>
        </Carousel>
      </div>
      <div className="list-card-right">
       
          <div className="list-card-header">
            <div className="list-card-header-title">
              <Typography typography={"p"}>boys hostel</Typography>
              <h3>{"Aziz Muluk street, Chennai South"}</h3>
            </div>

            <div className="list-card-header-icon">
              <SvgIcon sx={{ fontSize: "20px" }} component={ShareIcon} />
              <SvgIcon
                sx={{ fontSize: "20px" }}
                component={FavoriteBorderIcon}
              />
            </div>
          </div>
          <div className="list-card-facilities-con">
            <div className="list-card-facilities">
              <div className="list-card-amenities">
                <Image
                  style={{ height: 25, width: 25 }}
                  alt="food"
                  src={logo}
                />
                <p>Facilities</p>
                <Divider
                  style={{
                    backgroundColor: "#EBECF0",
                    height: 20,
                    alignItems: "center",
                    justifyItems: "center",
                    alignSelf: "center",
                  }}
                  orientation="vertical"
                  flexItem
                  textAlign="center"
                />
              </div>
            </div>
            <div className="list-card-facilities">
              <div className="list-card-amenities">
                <Image
                  style={{ height: 25, width: 25 }}
                  alt="food"
                  src={logo}
                />
                <p>Facilities</p>
                <Divider
                  style={{
                    backgroundColor: "#EBECF0",
                    height: 20,
                    alignItems: "center",
                    justifyItems: "center",
                    alignSelf: "center",
                  }}
                  orientation="vertical"
                  flexItem
                  textAlign="center"
                />
              </div>
            </div>
            <div className="list-card-facilities">
              <div className="list-card-amenities">
                <Image
                  style={{ height: 25, width: 25 }}
                  alt="food"
                  src={logo}
                />
                <p>Facilities</p>
                <Divider
                  style={{
                    backgroundColor: "#EBECF0",
                    height: 20,
                    alignItems: "center",
                    justifyItems: "center",
                    alignSelf: "center",
                  }}
                  orientation="vertical"
                  flexItem
                  textAlign="center"
                />
              </div>
            </div>
            <div className="list-card-facilities">
              <div className="list-card-amenities">
                <Image
                  style={{ height: 25, width: 25 }}
                  alt="food"
                  src={logo}
                />
                <p>Facilities</p>
                <Divider
                  style={{
                    backgroundColor: "#EBECF0",
                    height: 20,
                    alignItems: "center",
                    justifyItems: "center",
                    alignSelf: "center",
                  }}
                  orientation="vertical"
                  flexItem
                  textAlign="center"
                />
              </div>
            </div>
          </div>

          <div className="list-card-amount-con">
            <div className="list-card-amount-rent-con">
            <div className="list-card-amount-rent-single-line">
            <h3>
                {"19,000"}
                
              </h3>
              <p>{"/per month"}</p>
            </div>
             
              <p>{"Deposit $200"}</p>
            </div>
            <div className="list-card-button-con">
            <div className="list-card-button">
            <Secondary_Button contained={false} label={"View Details"}/>
            </div>
              
            <div className="list-card-button">
            <Primary_Button label={"Contact owner"}/>
            </div>
            </div>
            
            </div>
         
       
      </div>
    </div>
  );
}

export default listCard;
