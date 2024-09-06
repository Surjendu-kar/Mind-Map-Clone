import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  styled,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Settings as ConfigureIcon,
} from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import GroupsIcon from "@mui/icons-material/Groups";
import TableChartIcon from "@mui/icons-material/TableChart";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

interface OpenProps {
  isOpen: boolean;
}
interface ActiveProps {
  active: boolean;
}

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<OpenProps>(({ theme, isOpen }) => ({
  width: isOpen ? drawerWidth : 60,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: isOpen ? drawerWidth : 60,
    transition: "width 0.3s",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Menu = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<OpenProps>(({ theme, isOpen }) => ({
  display: "flex",
  minHeight: "64px",
  padding: "0px 8px",
  justifyContent: isOpen ? "flex-end" : "center",

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: "8px",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const StyledListItem = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})<ActiveProps>(({ theme, active }) => ({
  display: "flex",
  alignItems: "center",
  padding: "8px 20px",
  textDecoration: "none",
  color: theme.palette.text.primary,
  backgroundColor: active ? `#e3f2ff` : "transparent",
  "&:hover": {
    backgroundColor: active
      ? `${theme.palette.primary.main}0a`
      : "rgba(0, 0, 0, 0.04)",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const menuItems = [
    {
      text: "Explore Chats",
      icon: <MoveToInboxIcon />,
      path: "/explore",
    },
    { text: "Business Leads", icon: <ContactPhoneIcon />, path: "/leads" },
    { text: "View Mind Map", icon: <TableChartIcon />, path: "/mindmap" },
    { text: "Manage Team", icon: <GroupsIcon />, path: "/team" },
    { text: "Configure Chatbot", icon: <ConfigureIcon />, path: "/configure" },
  ];

  return (
    <StyledDrawer variant="permanent" isOpen={open}>
      <List>
        <Menu disablePadding isOpen={open}>
          <StyledIconButton onClick={handleDrawerToggle}>
            {open ? (
              <ArrowBackIosNewIcon sx={{ fontSize: "15px" }} />
            ) : (
              <MenuIcon />
            )}
          </StyledIconButton>
        </Menu>

        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <StyledListItem active={isActive} key={index} to={item.path}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                  color: isActive
                    ? (theme) => theme.palette.primary.main
                    : "#0000008a",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0, transition: "opacity 0.2s" }}
              />
            </StyledListItem>
          );
        })}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
