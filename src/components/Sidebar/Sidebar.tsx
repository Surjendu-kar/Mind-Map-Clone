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
  useMediaQuery,
  useTheme,
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
    [theme.breakpoints.down("sm")]: {
      width: isOpen ? 270 : 0,
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: isOpen ? 270 : 0,
  },
}));

const StyledList = styled(List)(() => ({
  padding: "2px 0",
}));

const Menu = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<OpenProps>(({ theme, isOpen }) => ({
  display: "flex",
  minHeight: "64px",
  padding: theme.spacing(0, 0.8),
  justifyContent: isOpen ? "flex-end" : "center",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const SmallScreenMenuIcon = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  top: 10,
  left: 10,
  zIndex: theme.zIndex.drawer + 1,
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0.8),
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

const StyledListItem = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "isOpen",
})<ActiveProps>(({ theme, active, isOpen }) => ({
  display: "flex",
  alignItems: "center",
  padding: isOpen ? theme.spacing(0.8, 2) : theme.spacing(0, 2),
  textDecoration: "none",
  color: theme.palette.text.primary,
  backgroundColor: active ? `#e3f2ff` : "transparent",
  "&:hover": {
    backgroundColor: active
      ? `${theme.palette.primary.main}0a`
      : "rgba(0, 0, 0, 0.04)",
  },
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  "& .MuiTypography-root": {
    fontFamily: "Poppins, sans-serif",
    fontSize: "1rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8789rem",
    },
  },
}));

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {isSmallScreen && (
        <SmallScreenMenuIcon onClick={handleDrawerToggle}>
          <MenuIcon />
        </SmallScreenMenuIcon>
      )}
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
                  <StyledListItemText
                    primary={item.text}
                    sx={{
                      opacity: open ? 1 : 0,
                      transition: "opacity 0.2s",
                    }}
                  />
                </StyledListItem>
              </Tooltip>
            );
          })}
        </StyledList>
      </StyledDrawer>
    </>
  );
};

export default Sidebar;
