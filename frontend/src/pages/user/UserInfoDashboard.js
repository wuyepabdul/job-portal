import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import React from "react";

const UserInfoDashboard = () => {
  const { palette } = useTheme();

  return (
    <Box sx={{ maxWidth: "50%", margin: "auto", pt: 10 }}>
      <Card sx={{ minWidth: 275, bgcolor: palette.midNightBlue }}>
        <CardContent>
          <Typography sx={{ fontSize: 16, color: "#fafafa" }} gutterBottom>
            Personal info
          </Typography>
          <hr style={{ marginBottom: "30px" }} />
          <Typography variant="h6" component="div" sx={{ color: "#fafafa" }}>
            First Name: John
          </Typography>
          <Typography variant="h6" component="div" sx={{ color: "#fafafa" }}>
            Last Name: Doe
          </Typography>
          <Typography variant="h6" component="div" sx={{ color: "#fafafa" }}>
            Email: johndoe@gmail.com
          </Typography>
          <Typography
            sx={{ mb: 1.5, color: "grey", pt: 2 }}
            color="text.secondary"
          >
            Status: Regular User
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserInfoDashboard;
