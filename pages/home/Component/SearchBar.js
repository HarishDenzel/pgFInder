import React, { useState } from "react";
import Primary_Button from "@/Components/Ui/Primary_Button";
import { Divider, Typography, Box, Select, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import { theme } from "@/utils/theme";

function SearchBar(props) {
   const {onClick} =props
  const [cityOpen, setCityOpen] = useState(false);
  const [selectCity, setSelectCity] = useState("");

  const _selectTrigger = (value) => {
    setCityOpen(value);
  };
  const handleChange = (event) => {
    setSelectCity(event.target.value);
  };
  return (
    <Box
      mt={3}
      sx={{
        width: { xs: "90vw", sm: "60vw", lg: "40vw" },
        height: "8vh",
        bgcolor: "#f4f4f4",
        display: "flex",
        borderRadius: 1,
      }}
    >
      <Box
        sx={{
          width: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       
          <Typography>{'Chennai'}</Typography>
       
        {/* <Select
          variant="standard"
          sx={{ margin: 0, borderColor: "transparent", border: 0 }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={cityOpen}
          onClose={() => _selectTrigger(false)}
          onOpen={() => _selectTrigger(true)}
          value={selectCity}
          label="selct City"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
      </Box>
      <Divider
        style={{ backgroundColor: "#EBECF0" }}
        orientation="vertical"
        flexItem
      />
      <Box sx={{ width: "80%", display: "flex", alignItems: "center" }}>
        <Box sx={{ width: { xs: "80%", lg: "70%" } }}>
          <div className="home-search-city">
            <input
              {...props}
              type='search'
              style={{ width: "100%", height: "100%" }}
              placeholder="Search location or PG / Hoster name"
            />
          </div>
        </Box>
        <Box
          display={{ xs: "none", lg: "flex" }}
          sx={{
            width: "30%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Primary_Button
            label={"Search"}
            color={"primary"}
            starticon={false}
            onClick={onClick}
          />
        </Box>
        <Box
          display={{ lg: "none", xs: "flex" }}
          bgcolor={theme.palette.primary.main}
          sx={{
            width: { xs: "15%" },
            borderRadius: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton>
            <SearchIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default SearchBar;
