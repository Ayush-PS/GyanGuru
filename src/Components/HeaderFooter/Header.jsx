import React from "react";
import logo from "./logo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
const pages = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "Session", to: "/AppointmentForm" },
  { id: 3, name: "Doubts", to: "/ScheduleMeeting" },
  { id: 4, name: "Pomodoro", to: "/Pomodoro" },
  { id: 5, name: "Exams Schedule", to: "/ExamScheduler" },
  
];

function Header() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "rgba(8, 32, 50, 0.3)" }}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip>
                <IconButton href={pages[0].to}>
                  <Avatar
                    src={logo}
                    style={{ height: "60px", width: "60px" }}
                  />
                </IconButton>
              </Tooltip>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 6,
                mr: 14,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 800,
                fontSize: "1.5rem",
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Gyanguru
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                ml: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Gyanguru
            </Typography>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    href={page.to}
                    key={page}
                    onClick={handleCloseNavMenu}
                  >
                    <Button
                      href={page.to}
                      key={page.name}
                      sx={{ my: 2, mr: 3, color: "#082032", display: "block" }}
                    >
                      {page.name}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  href={page.to}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mr: 7,
                    color: "white",
                    display: "block",
                    fontWeight: "500",
                    borderRadius: 2,
                    pl: "1.3rem",
                    pr: "1.3rem",
                    "&:hover": {
                      color: "orange", // 50% transparency
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}              
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
