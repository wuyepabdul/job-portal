import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import StatComponent from "../../components/StatComponent";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const UserDashboard = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
          Dashboard
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <StatComponent
            value="45621"
            icon={
              <CalendarMonthIcon sx={{ color: "#fafafa", fontSize: 30 }} />
            }
            description="Member since"
            money=""
          />

          <StatComponent
            value="450"
            icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Number of applied jobs"
            money=""
          />
        </Stack>
      </Box>
    </>
  );
};

export default UserDashboard;
