import React from "react";
import { Stack, Paper, Typography, useTheme } from "@mui/material";
import Pie from "../pie/Pie.jsx";
import Bar from "../bar/Bar.jsx";
import Geography from '../geography/Geography.jsx'

export function Row3() {
  const theme = useTheme();
  return (
    <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={1.4}>
      <Paper sx={{ minWidth: "400px", flexGrow: 1, width: "28%" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>

        <Pie isDashboard={true} />

        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ minWidth: "400px", flexGrow: 1, width: "33%" }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <Bar isDashboard={true} />
      </Paper>

      <Paper sx={{ minWidth: "400px", flexGrow: 1, width: "33%" }}>


        <Geography isDashbord={ true} />
      </Paper>
    </Stack>
  );
}
