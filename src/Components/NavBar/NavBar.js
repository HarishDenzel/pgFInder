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
import { SvgIcon } from "@mui/material";

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
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
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
                width: "25%",
                justifyContent: "space-around",
                height: "15%",
              }}
            >
              <Box
                sx={{
                  alignItems: "center",
                  justifyItems: "center",
                  display: "flex",
                }}
              >
                <FavoriteTwoToneIcon />
                <Typography variant="body1" component="div">
                  Saved
                </Typography>
              </Box>

              <Box
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  backgroundColor: "#3B475C",
                  width: 215,
                  borderRadius: 1,
                }}
              >
                <CottageTwoToneIcon />
                <Typography variant="body1" component="div">
                  Advertise property
                </Typography>
                <Typography
                  sx={{
                    backgroundColor: "red",
                    width: 40,
                    height: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 0.5,
                  }}
                  variant="p"
                  component="label"
                >
                  free
                </Typography>
              </Box>
              <Primary_Button
                label="Login"
                color="secondary"
                starticon={<SvgIcon component={icon.login} />}
                onClick={() => setModal(true)}
              />
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
