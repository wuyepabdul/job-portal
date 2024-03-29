import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import StatComponent from "../../components/StatComponent";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import CategoryIcon from "@mui/icons-material/Category";
import { Chart } from "react-google-charts";
import { data, options } from "./data/data";
import ChartComponent from "../../components/ChartComponent";
const AdminDashboard = () => {
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
            value="45674"
            icon={
              <SupervisorAccountIcon sx={{ color: "#fafafa", fontSize: 30 }} />
            }
            description="Administrations"
            money=""
          />

          <StatComponent
            value="454"
            icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Jobs"
            money=""
          />

          <StatComponent
            value="6454"
            icon={<CategoryIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Jobs Catgegories"
            money=""
          />
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ mt: 3 }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <ChartComponent>
            <Chart
              chartType="Bar"
              data={data}
              options={options}
              width="100%"
              height="300px"
              legendToggle
            />
          </ChartComponent>
        </Stack>
      </Box>
    </>
  );
};

export default AdminDashboard;
