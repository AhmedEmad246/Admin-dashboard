import { Row1 } from "./Row1.jsx";
import { Row2 } from "./Row2.jsx";
import { Row3 } from "./Row3.jsx";
import { Button, Box, Stack, useTheme } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../src/Header.jsx";

function Dashboard() {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title={"Dashboard"} subtitle={"Welcome to Your dashboard"} />
        <Box sx={{ textAlign: "right", textTransform: "capitalize" }}>
          <Button variant="contained">
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </>
  );
}
export default Dashboard;
