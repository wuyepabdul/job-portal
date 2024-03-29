import * as React from "react";
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
import WorkIcon from "@mui/icons-material/Work";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material";
import { userLogoutAction } from "../redux/actions/userActions";
import { themeModeAction } from "../redux/actions/themModeActions";
import { DarkMode, LightMode } from "@mui/icons-material";

const pages = ["Home"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { userInfo } = useSelector((state) => state.signin);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { palette } = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogoutUser = () => {
    dispatch(userLogoutAction());
    window.location.reload(true);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const settings = [
    {
      id: "1",
      title: "Admin Dashboard",
      url: "/admin/dashboard",
      onCLick: handleCloseUserMenu,
    },
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <WorkIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            JOB PORTAL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Job PORTAL
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/*  toggle dark mode */}
          <IconButton
            sx={{ mr: 4 }}
            onClick={() => dispatch(themeModeAction())}
          >
            {palette.mode === "dark" ? (
              <DarkMode sx={{ color: "#ffffff", fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: "#ffffff", fontSize: "25px" }} />
            )}
          </IconButton>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {userInfo &&
                userInfo.role === 1 &&
                settings.map((setting) => (
                  <MenuItem key={setting.id} onClick={setting.onCLick}>
                    <Typography textAlign="center">
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "blue",
                        }}
                        to={setting.url}
                      >
                        {setting.title}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}

              {userInfo && userInfo.role === 0 && (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    style={{
                      textDecoration: "none",
                      color: "blue",
                    }}
                    textAlign="center"
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "blue",
                      }}
                      to="/user/dashboard"
                    >
                      User Dashboard
                    </Link>
                  </Typography>
                </MenuItem>
              )}

              {/* {userInfo && userInfo.role === 0 && (
                
              )} */}

              {userInfo ? (
                <MenuItem onClick={handleLogoutUser}>
                  <Typography
                    style={{
                      textDecoration: "none",
                      color: "blue",
                    }}
                    textAlign="center"
                  >
                    Logout
                  </Typography>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    style={{
                      textDecoration: "none",
                      color: "blue",
                    }}
                    textAlign="center"
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "blue",
                      }}
                      to="/login"
                    >
                      Login
                    </Link>
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
