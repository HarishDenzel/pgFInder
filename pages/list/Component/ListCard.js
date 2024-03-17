import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import room from "../../../public/assets/Images/room.png";
import {
  Card,
  Divider,
  SvgIcon,
  Typography,
  Box,
  CardContent,
  IconButton,
} from "@mui/material";
import { icon } from "../../../public/assets/Icons";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import food from "../../../public/assets/Images/food.png";
import Image from "next/image";
import Primary_Button from "@/Components/Ui/Primary_Button";
import Secondary_Button from "@/Components/Secondary_Button";
import { Carousel } from "@/Components/Ui/Carousel";

function listCard() {
  const logo = require("../../../public/assets/Images/food.png");
  const room = require("../../../public/assets/Images/room.png");

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        mb: 5,
        overflow: "hidden",
        width: "100%",
        height:'30vh' ,
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <Box display={"flex"} sx={{flexDirection:{xs:'column',sm:'column',md:'row',lg:'row',xl:'row'}}}>
        <Box  sx={{ width: "30vw",  }}>
        <Carousel data={[{src:room},{src:logo}]}></Carousel>
          {/* <Carousel dynamicHeight={false} showArrows={true} autoPlay>
            <Box sx={{ width: "90%", height: "90%",alignItems:'center' }}>
              <Image
                style={{ height: "100%", width: "100%" }}
                alt="food"
                src={room}
              ></Image>
            </Box>
            <div>
              <Image
                style={{ height: "100%", width: "100%" }}
                alt="food"
                src={room}
              ></Image>
            </div>
          </Carousel> */}
        </Box>
        <CardContent
          sx={{
            width: "70%",
          
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
            <Box>
              <Typography variant="h6">boys hostel</Typography>
              <Typography variant="body2">
                {"Aziz Muluk street, Chennai South"}
              </Typography>
            </Box>

            <Box mx={2}>
              <IconButton>
                <SvgIcon sx={{ fontSize: "20px" }} component={ShareIcon} />
              </IconButton>
              <IconButton>
                <SvgIcon
                  sx={{ fontSize: "20px" }}
                  component={FavoriteBorderIcon}
                />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">Facilities</Typography>
            <Box display={"flex"} gap={2}>
              <Box display={"flex"} gap={2} sx={{ alignItems: "center" }}>
                <Image
                  style={{ height: 25, width: 25 }}
                  alt="food"
                  src={logo}
                />
                <Typography variant="body2">4 Sharing</Typography>
                <Divider
                  sx={{
                    bgcolor: "#EBECF0",
                    height: 20,
                    alignItems: "center",
                    justifyItems: "center",
                    alignSelf: "center",
                  }}
                  orientation="vertical"
                  flexItem
                />
              </Box>
              <Box display={"flex"} gap={2} sx={{ alignItems: "center" }}>
                <Image
                  style={{ height: 25, width: 25 }}
                  alt="food"
                  src={logo}
                />
                <Typography variant="body2">4 Sharing</Typography>
                <Divider
                  sx={{
                    bgcolor: "#EBECF0",
                    height: 20,
                    alignItems: "center",
                    justifyItems: "center",
                    alignSelf: "center",
                  }}
                  orientation="vertical"
                  flexItem
                />
              </Box>
              <Box display={"flex"} gap={2} sx={{ alignItems: "center" }}>
                <Image
                  style={{ height: 25, width: 25 }}
                  alt="food"
                  src={logo}
                />
                <Typography variant="body2">4 Sharing</Typography>
                <Divider
                  sx={{
                    bgcolor: "#EBECF0",
                    height: 20,
                    alignItems: "center",
                    justifyItems: "center",
                    alignSelf: "center",
                  }}
                  orientation="vertical"
                  flexItem
                />
              </Box>
              <Box display={"flex"} gap={2} sx={{ alignItems: "center" }}>
                <Image
                  style={{ height: 25, width: 25 }}
                  alt="food"
                  src={logo}
                />
                <Typography variant="body2">4 Sharing</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 8,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Box display={"flex"} sx={{ alignItems: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: "600" }}>
                  {" "}
                  {"19,000"}
                </Typography>
                <Typography variant="body1"> {"/per month"}</Typography>
              </Box>
              <Typography variant="caption"> {"Deposit $200"}</Typography>
            </Box>

            <Box display={"flex"} gap={2}>
              <Secondary_Button contained={false} label={"View Details"} />
              <Primary_Button label={"Contact owner"} />
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>

    // {/* <div className="list-card-con">
    //   <div className="list-card-left">
    //     <Carousel showArrows={true} autoPlay>
    //       <div>
    //         <Image
    //           style={{ height: "100%", width: "100%" }}
    //           alt="food"
    //           src={room}
    //         ></Image>
    //       </div>
    //       <div>
    //         <Image
    //           style={{ height: "100%", width: "100%" }}
    //           alt="food"
    //           src={room}
    //         ></Image>
    //       </div>
    //     </Carousel>
    //   </div>
    //   <div className="list-card-right">

    //       <div className="list-card-header">
    //         <div className="list-card-header-title">
    //           <Typography typography={"p"}>boys hostel</Typography>
    //           <h3>{"Aziz Muluk street, Chennai South"}</h3>
    //         </div>

    //         <div className="list-card-header-icon">
    //           <SvgIcon sx={{ fontSize: "20px" }} component={ShareIcon} />
    //           <SvgIcon
    //             sx={{ fontSize: "20px" }}
    //             component={FavoriteBorderIcon}
    //           />
    //         </div>
    //       </div>
    //       <div className="list-card-facilities-con">
    //         <div className="list-card-facilities">
    //           <div className="list-card-amenities">
    //             <Image
    //               style={{ height: 25, width: 25 }}
    //               alt="food"
    //               src={logo}
    //             />
    //             <p>Facilities</p>
    //             <Divider
    //               style={{
    //                 backgroundColor: "#EBECF0",
    //                 height: 20,
    //                 alignItems: "center",
    //                 justifyItems: "center",
    //                 alignSelf: "center",
    //               }}
    //               orientation="vertical"
    //               flexItem
    //               textAlign="center"
    //             />
    //           </div>
    //         </div>
    //         <div className="list-card-facilities">
    //           <div className="list-card-amenities">
    //             <Image
    //               style={{ height: 25, width: 25 }}
    //               alt="food"
    //               src={logo}
    //             />
    //             <p>Facilities</p>
    //             <Divider
    //               style={{
    //                 backgroundColor: "#EBECF0",
    //                 height: 20,
    //                 alignItems: "center",
    //                 justifyItems: "center",
    //                 alignSelf: "center",
    //               }}
    //               orientation="vertical"
    //               flexItem
    //               textAlign="center"
    //             />
    //           </div>
    //         </div>
    //         <div className="list-card-facilities">
    //           <div className="list-card-amenities">
    //             <Image
    //               style={{ height: 25, width: 25 }}
    //               alt="food"
    //               src={logo}
    //             />
    //             <p>Facilities</p>
    //             <Divider
    //               style={{
    //                 backgroundColor: "#EBECF0",
    //                 height: 20,
    //                 alignItems: "center",
    //                 justifyItems: "center",
    //                 alignSelf: "center",
    //               }}
    //               orientation="vertical"
    //               flexItem
    //               textAlign="center"
    //             />
    //           </div>
    //         </div>
    //         <div className="list-card-facilities">
    //           <div className="list-card-amenities">
    //             <Image
    //               style={{ height: 25, width: 25 }}
    //               alt="food"
    //               src={logo}
    //             />
    //             <p>Facilities</p>
    //             <Divider
    //               style={{
    //                 backgroundColor: "#EBECF0",
    //                 height: 20,
    //                 alignItems: "center",
    //                 justifyItems: "center",
    //                 alignSelf: "center",
    //               }}
    //               orientation="vertical"
    //               flexItem
    //               textAlign="center"
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="list-card-amount-con">
    //         <div className="list-card-amount-rent-con">
    //         <div className="list-card-amount-rent-single-line">
    //         <h3>
    //             {"19,000"}

    //           </h3>
    //           <p>{"/per month"}</p>
    //         </div>

    //           <p>{"Deposit $200"}</p>
    //         </div>
    //         <div className="list-card-button-con">
    //         <div className="list-card-button">
    //         <Secondary_Button contained={false} label={"View Details"}/>
    //         </div>

    //         <div className="list-card-button">
    //         <Primary_Button label={"Contact owner"}/>
    //         </div>
    //         </div>

    //         </div>

    //   </div>

    // </div> */}
  );
}

export default listCard;
