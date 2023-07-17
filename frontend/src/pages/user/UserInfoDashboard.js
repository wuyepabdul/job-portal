import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import LoadingBox from "../../components/LoadingBox";

const UserInfoDashboard = () => {
  const { user } = useSelector((state) => state.userProfile);
  const { palette } = useTheme();

  return (
    <Box sx={{ maxWidth: "50%", margin: "auto", pt: 10 }}>
      {console.log("usr", user)}
      {user ? (
        <Card sx={{ minWidth: 275, bgcolor: palette.midNightBlue }}>
          <CardContent>
            <Typography sx={{ fontSize: 16, color: "#fafafa" }} gutterBottom>
              Personal info
            </Typography>
            <hr style={{ marginBottom: "30px" }} />
            <Typography variant="h6" component="div" sx={{ color: "#fafafa" }}>
              First Name: {user.firstName}
            </Typography>
            <Typography variant="h6" component="div" sx={{ color: "#fafafa" }}>
              Last Name: {user.lastName}
            </Typography>
            <Typography variant="h6" component="div" sx={{ color: "#fafafa" }}>
              Email: {user.email}
            </Typography>
            <Typography
              sx={{ mb: 1.5, color: "grey", pt: 2 }}
              color="text.secondary"
            >
              Status: {user.role === 1 ? "Admin User" : "Regular User"}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <>
          <LoadingBox />
        </>
      )}
    </Box>
  );
};

export default UserInfoDashboard;
