import React from "react";

import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../src/Header.jsx";
import { rows, columns } from "./data.js";
export default function Contacts() {
  return (
    <Box sx={{ height: 800, width: "98%", mx: "auto" }}>
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
}
