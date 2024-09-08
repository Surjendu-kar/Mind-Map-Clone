import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  styled,
  Tooltip,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./menuItems";

const drawerWidth = 240;

interface OpenProps {
  isOpen: boolean;
}
interface ActiveProps extends OpenProps {
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

const StyledList = styled(List)(() => ({
  padding: "2px 0",
}));

const Menu = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<OpenProps>(({ theme, isOpen }) => ({
  display: "flex",
  minHeight: "64px",
  padding: "0px 8px",
  justifyContent: isOpen ? "flex-end" : "center",
  borderBottom: `1px solid ${theme.palette.divider}`,

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
  shouldForwardProp: (prop) => prop !== "active" && prop !== "isOpen",
})<ActiveProps>(({ theme, active, isOpen }) => ({
  display: "flex",
  alignItems: "center",
  padding: isOpen ? "8px 20px" : "0px 20px",
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

  return (
    <StyledDrawer variant="permanent" isOpen={open}>
      <StyledList>
        <Menu disablePadding isOpen={open}>
          <Tooltip
            title={open ? "Close Left Drawer" : "Open Left Drawer"}
            placement="bottom"
            arrow
          >
            <StyledIconButton onClick={handleDrawerToggle}>
              {open ? (
                <ArrowBackIosNewIcon sx={{ fontSize: "15px" }} />
              ) : (
                <MenuIcon />
              )}
            </StyledIconButton>
          </Tooltip>
        </Menu>

        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Tooltip
              key={index}
              title={item.text}
              placement="right"
              arrow
              disableHoverListener={open}
            >
              <StyledListItem active={isActive} isOpen={open} to={item.path}>
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
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0, transition: "opacity 0.2s" }}
                />
              </StyledListItem>
            </Tooltip>
          );
        })}
      </StyledList>
    </StyledDrawer>
  );
};

export default Sidebar;
