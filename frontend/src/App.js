import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import Login from "./pages/Login";
import "./App.css";
import UserDashboard from "./pages/user/UserDashboard";
import UserRoute from "./components/UserRoute";
import Layout from "./pages/global/Layout";
import UserJobsHistory from "./pages/user/UserJobsHistory";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserInfoDashboard from "./pages/user/UserInfoDashboard";

const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const AdminUserDashboardHOC = Layout(AdminDashboard);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);

const App = () => {
  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/user/dashboard"
                element={
                  <UserRoute>
                    {" "}
                    <UserDashboardHOC />
                  </UserRoute>
                }
              />
              <Route
                path="/admin/dashboard"
                element={
                  <UserRoute>
                    {" "}
                    <AdminUserDashboardHOC />
                  </UserRoute>
                }
              />
              <Route
                path="/user/info"
                element={
                  <UserRoute>
                    {" "}
                    <UserInfoDashboardHOC />
                  </UserRoute>
                }
              />
              <Route
                path="/user/jobs"
                element={
                  <UserRoute>
                    {" "}
                    <UserJobsHistoryHOC />
                  </UserRoute>
                }
              />
              <Route path="/search/location/:location" element={<Home />} />
              <Route path="/search/:keyword" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
