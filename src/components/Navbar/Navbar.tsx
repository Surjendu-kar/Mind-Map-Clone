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
  Business as BusinessIcon,
  AccountTree as MindMapIcon,
  Group as TeamIcon,
  Settings as ConfigureIcon,
} from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";

const drawerWidth = 240;

interface OpenProps {
  isOpen: boolean;
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

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  padding: "8px 20px",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: "Explore Chats", icon: <AssignmentReturnedIcon /> },
    { text: "Business Leads", icon: <BusinessIcon /> },
    { text: "View Mind Map", icon: <MindMapIcon /> },
    { text: "Manage Team", icon: <TeamIcon /> },
    { text: "Configure Chatbot", icon: <ConfigureIcon /> },
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

        {menuItems.map((item, index) => (
          <StyledListItem key={index} disablePadding>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 2 : "auto",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{ opacity: open ? 1 : 0, transition: "opacity 0.2s" }}
            />
          </StyledListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Navbar;
