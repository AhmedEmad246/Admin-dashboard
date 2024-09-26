import React from "react";
import { Box } from "@mui/material";
import { rows, columns } from "./data.js";
import Header from "../../src/Header.jsx";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
export default function Invoice() {
  return (
    <Box sx={{ height: 800, width: "98%", mx: "auto" }}>
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <DataGrid checkboxSelection rows={rows} columns={columns} />
    </Box>
  );
}
