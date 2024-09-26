import List from "@mui/material/List";
import { styled, useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MuiDrawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Typography, Tooltip } from "@mui/material";
import { useLocation } from "react-router-dom";
import { grey } from "@mui/material/colors";
function openedMixin(theme) {
  return {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  };
}

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),

  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Array1 = [
  { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
  { text: "Manage team", icon: <PeopleAltOutlinedIcon />, path: "/team" },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
];
const Array2 = [
  { text: "Profile Form", icon: <Person2OutlinedIcon />, path: "/form" },
  { text: "Calendar", icon: <CalendarMonthOutlinedIcon />, path: "/calendar" },
  { text: "FAQ Page ", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
];
const Array3 = [
  { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
  { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
  { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
  { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
];

const drawerWidth = 240;
function SideBar({ open, handleDrawerClose }) {
  let location = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Avatar
          sx={{
            mx: "auto",
            height: open ? 88 : 42,
            width: open ? 88 : 42,
            transition: "0.5s",
            my: 1,
            border: "1px solid grey ",
          }}
          alt="Remy Sharp"
          src="../images\Snapchat-540069440.jpg"
        ></Avatar>
        <Typography
          align="center"
          sx={{ fontSize: open ? 18 : 0, transition: "0.5s" }}
        >
          Ahmed
        </Typography>
        <Typography
          align="center"
          sx={{ fontSize: open ? 15 : 0, transition: "0.5s" }}
          color={theme.palette.info.main}
        >
          Admin
        </Typography>

        <Divider />
        <List>
          {Array1.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <Tooltip title={open ? null : item.text} placement="left">
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[300]
                        : null,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Array2.map((text) => (
            <ListItem key={text.path} disablePadding sx={{ display: "block" }}>
              <Tooltip title={open ? null : text.text} placement="left">
                <ListItemButton
                  onClick={() => {
                    navigate(text.path);
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor: location.pathname === text.path ? "gray" : null,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={text.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Array3.map((item2) => (
            <ListItem key={item2.path} disablePadding sx={{ display: "block" }}>
              <Tooltip title={open ? null : item2.text} placement="left">
                <ListItemButton
                  onClick={() => {
                    navigate(item2.path);
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor: location.pathname === item2.path ? "gray" : null,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item2.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item2.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
export default SideBar;
