import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Fab,
  Fade,
} from "@mui/material";
import NavigationIcon from "@mui/icons-material/Menu";
import embdLogo from "../../images/embd-logo-black.png";
import { Rowing } from "@mui/icons-material";
import TeacherProfiles from "../AboutPages/TeacherProfiles";
import { Link as RouterLink } from "react-router-dom";

// const pages = ["Home", "About", "Services", "The Buzz", "Contact Us"];
// variable navMap that holds an array of objects
// onClick on each button. Sets the ref that the button is tied to

const navMap = [
  // {
  //   name: "Home",
  // },
  {
    name: "About",
    menuItems: [
      { name: "Teacher Profiles", to: "/Teacher-Profiles" },
      { name: "Benefits of Dance", to: "/Benefits-Of-Dance" },
      { name: "Styles of Dance", to: "/Styles-Of-Dance" },
      { name: "Studio Policy", to: "/Studio-Policy" },
    ],
  },
  {
    name: "Services",
    menuItems: [
      { name: "Social Dance", to: "/Social-Dance" },
      { name: "Private Dance", to: "/Private-Dance" },
      { name: "Wedding Dance", to: "/Wedding-Dance" },
    ],
  },
  {
    name: "The Buzz",
    menuItems: [{ name: "Testimonials", to: "/Testimonials" }],
  },
  // {
  //   name: "Contact Us",
  //   menuItems: [{ name: "Contact Us", to: "/Contact" }],
  // },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [subMenu, setSubMenu] = React.useState([]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", alignItems: "stretch" }} disableGutters>
          <Box
            // sx={{ display: { xs: "flex" } }}>
            sx={{ display: "flex", minWidth: "420px" }}
          >
            {/* How do I change the logo to a set width and height as sx prop isn't working */}
            <img src={embdLogo} alt="dance logo" />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Button component={RouterLink} to="/">
              <Typography sx={{ color: "black", fontSize: "22px" }}>
                Home
              </Typography>
            </Button>
            {navMap.map((obj) => (
              <Button
                size="large"
                key={obj.name}
                onClick={(event) => {
                  setAnchorElNav(event.currentTarget);
                  setSubMenu(obj.menuItems);
                }}
                sx={{
                  my: 2,
                  whiteSpace: "noWrap",
                  color: "black",
                  display: "block",
                  fontSize: "22px",
                }}
              >
                {obj.name}
              </Button>
            ))}
            <Button component={RouterLink} to="/Contact">
              <Typography
                sx={{ color: "black", fontSize: "22px", whiteSpace: "nowrap" }}
              >
                Contact Us
              </Typography>
            </Button>
            <Menu
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              size="large"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              TransitionComponent={Fade}
            >
              {subMenu.map((subObj) => {
                return (
                  <MenuItem
                    component={RouterLink}
                    to={subObj.to}
                    sx={{ fontFamily: "Poppins", fontWeight: "500" }}
                    size="large"
                  >
                    {subObj.name}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              width: "340px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Fab
              sx={{
                display: "flex",
                alignContent: "center",
                whiteSpace: "nowrap",
              }}
              variant="extended"
              size="medium"
              color="secondary"
              aria-label="add"
            >
              book your first lesson
            </Fab>
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar
        sx={{ height: "68.5px", justifyContent: "center" }}
        color="transparent"
        position="static"
      >
        <Typography
          sx={{
            fontFamily: "tangerine",
            fontWeight: "500",
          }}
          align="center"
          variant="h2"
          marginTop="8px"
        >
          Welcome to the world of Ballroom Dance
        </Typography>
      </AppBar>
    </Box>
  );
};
export default ResponsiveAppBar;
// TODO: Text black, background transparent, button grey/blue, link the nav buttons

// Dropdown TODO: enable scroll if onClick is enabled
