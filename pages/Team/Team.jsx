import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data.js";
import { Box, Typography, useTheme } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../src/Header.jsx";
function Team() {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      width: 33,
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      align: "center",
      headerAlign: "center",
      flex: 1,

      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : access === "User"
                  ? theme.palette.success.main
                  : null,
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlinedIcon sx={{ color: "white" }} />
            )}
            {access === "Manager" && (
              <LockOpenOutlinedIcon sx={{ color: "white" }} />
            )}
            {access === "User" && (
              <SecurityOutlinedIcon sx={{ color: "white" }} />
            )}
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", color: "white" }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header title={"TEAM"} subtitle={"Managing the Team Members"} />
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}
export default Team;
