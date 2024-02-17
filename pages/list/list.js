import NavBar from "@/Components/NavBar/NavBar";
import Navigator from "@/Components/Ui/Navigator";
import SortButton from "@/Components/Ui/SortButton";
import { Divider, Typography } from "@mui/material";

import React from "react";
import ListCard from "./Component/ListCard";

function list() {
  return (
    <div>
      <NavBar></NavBar>

      <div className="list-navigator">
        <Navigator />
      </div>
      <div className="list-home-con">
        <div className="list-left-filter-con">
        <div className="list-left-filter-heading">
        <p>
            Filter
        </p>
        <p>
            Reset
        </p>
        </div>
        <Divider />
        </div>
        <div className="list-right-con">
          <div className="list-right-header">
            <Typography>{"mens PG"}</Typography>
            <SortButton />
          </div>

         
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
         
        </div>
      </div>
    </div>
  );
}

export default list;
