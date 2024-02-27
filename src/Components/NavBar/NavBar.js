import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";
import Primary_Button from "@/Components/Ui/Primary_Button";
import { icon } from "../../../public/assets/Icons";
import { Button, SvgIcon } from "@mui/material";
import Image from "next/image";

function NavBar({ setModal }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawerWidth = 240;
  const navItems = ["Home", "About", "Contact"];
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav" sx={{ background: "#2C3546" }}>
          <Toolbar>
          <Box sx={{display:{sm:'block',}}}>
          <Image 
             height={'20'}
             width={'20'}
             
             src={require('../../../public/assets/Images/logo.png')} 
             />
          </Box>
            
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              PG Finder
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: {xs:'100%', sm: "80%", md: "65vw", lg: "30vw" },
                justifyContent:{xs:'flex-end',lg: "space-around"},
                height: "15%",
                gap:1
              }}
            >
              <Button
                variant="text"
                color="secondary"
                sx={{
                  alignItems: "center",
                  justifyItems: "center",
                  display: { xs: "none", sm: 'flex', md: "flex", xl: "flex" },
                  gap: 0.5,
                }}
              >
                <FavoriteTwoToneIcon />
                <Typography variant="body1" component="div">
                  Saved
                </Typography>
              </Button>

              <Box
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: { xs: "none", sm: 'flex', md: "flex", xl: "flex" },
                  backgroundColor: "#3B475C",
                  width: "45%",
                  borderRadius: 1,
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 0.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CottageTwoToneIcon />
                  <Typography variant="body1">Advertise property</Typography>
                </Box>

                <Box
                  sx={{
                    bgcolor: "red",
                    height: 22,
                    width: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Typography variant="body2">free</Typography>
                </Box>
              </Box>
              <Box sx={{ gap: 3,  display:{xs:'flex'}}}>
                <Primary_Button
                  label="Login"
                  color="secondary"
                  starticon={<SvgIcon component={icon.login} />}
                  onClick={() => setModal(true)}
                />

                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            //container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </div>
  );
}

export default NavBar;
