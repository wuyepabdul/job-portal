import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  menuClasses,
  useProSidebar,
} from "react-pro-sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import WorkIcon from "@mui/icons-material/Work";
import CategoryIcon from "@mui/icons-material/Category";
import Avatar from "@mui/material/Avatar";
import logoDashboard from "../../images/hr-project.png";
import LoginIcon from "@mui/icons-material/Login";
import { Box, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogoutAction } from "../../redux/actions/userActions";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
// import logo from '../../images/hr-project.png'

const SidebarAdmin = () => {
  const { userInfo } = useSelector((state) => state.signin);
  const { palette } = useTheme();
  const { collapsed } = useProSidebar();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(userLogoutAction());
    window.location.reload(true);
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };
  return (
    <Sidebar backgroundColor="#003366" style={{ borderRightStyle: "none" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box>
          <Box sx={{ pt: 3, pb: 5, display: "flex", justifyContent: "center" }}>
            {collapsed ? (
              <Avatar alt="logo dashboard" src={logoDashboard} />
            ) : (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <img
                  alt="avatar"
                  style={{
                    width: "100px",
                    height: "100%",
                    textAlign: "center",
                  }}
                  src={logoDashboard}
                />{" "}
              </Box>
            )}
          </Box>
        </Box>
        <Menu
          menuItemStyles={{
            button: {
              [`&.${menuClasses.button}`]: { color: "#fafafa" },
              [`&.${menuClasses.disabled}`]: { color: "green" },
              "&:hover": {
                backgroundColor: "rgba(23,105,170,1)",
                color: "#fafafa",
              },
            },

            icon: {
              [`&.${menuClasses.icon}`]: { color: palette.primary.main },
            },
          }}
        >
          {userInfo && userInfo.role === 1 ? (
            <>
              <MenuItem
                component={<Link to="/admin/dashboard" />}
                icon={<DashboardIcon />}
              >
                Dashboard
              </MenuItem>
              <MenuItem
                component={<Link to="/admin/users" />}
                icon={<GroupAddIcon />}
              >
                Users
              </MenuItem>
              <MenuItem
                component={<Link to="/admin/jobs" />}
                icon={<WorkIcon />}
              >
                Jobs
              </MenuItem>
              <MenuItem
                component={<Link to="/admin/category" />}
                icon={<CategoryIcon />}
              >
                Category
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem
                component={<Link to="/user/dashboard" />}
                icon={<DashboardIcon />}
              >
                Dashboard
              </MenuItem>
              <MenuItem
                component={<Link to="/user/jobs" />}
                icon={<WorkHistoryIcon />}
              >
                Applied Jobs
              </MenuItem>
            </>
          )}
        </Menu>
      </Box>
      <Box sx={{ pb: 2 }}>
        <Menu
          menuItemStyles={{
            button: {
              [`&.${menuClasses.button}`]: { color: "#fafafa" },
              "&:hover": {
                backgroundColor: "rgba(23,105,170,1)",
                color: "#fafafa",
              },
            },

            icon: {
              [`&.${menuClasses.icon}`]: { color: palette.primary.main },
            },
          }}
        >
          <MenuItem onClick={logOut} icon={<LoginIcon />}>
            Log out
          </MenuItem>
        </Menu>
      </Box>
    </Sidebar>
  );
};

export default SidebarAdmin;
