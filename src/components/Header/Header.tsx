import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Typography,
  Avatar,
  styled,
  Menu,
  ListItemIcon,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import { menuItems } from "../Sidebar/menuItems";

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(0, 2),
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  height: "65px",

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  width: "35%",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ActionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  lineHeight: 1.167,
  fontWeight: "bold",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "0.7813rem",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  padding: theme.spacing(0.7, 1.5),
  "&:hover": {
    backgroundColor: `${theme.palette.primary.main}0a`,
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0 },
  "&:hover .MuiOutlinedInput-notchedOutline": { border: 0 },
  "& .MuiSvgIcon-root": {
    fontSize: "20px",
    color: theme.palette.primary.main,
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  boxShadow: `0px 0px 0px 2px ${theme.palette.primary.main}`,
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const MenuItemBox = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0.8, 1.75),
  gap: theme.spacing(1),

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },

  "& .MuiListItemIcon-root": {
    minWidth: "0px",
  },

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const MenuItemText = styled(Typography)(({ theme }) => ({
  fontSize: "1.125rem",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    color: "black",
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

interface HeaderProps {
  heading: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ heading, title }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MainContainer>
      <InfoContainer>
        <Heading>{heading}</Heading>
        <Title>{title}</Title>
      </InfoContainer>

      <ActionsContainer>
        <StyledButton variant="outlined">GUIDED TOUR</StyledButton>
        <StyledSelect
          defaultValue="org"
          size="small"
          IconComponent={KeyboardArrowDownIcon}
        >
          <MenuItem value="org">SELECT ORG</MenuItem>
        </StyledSelect>

        <StyledAvatar
          src={
            "https://api.dicebear.com/5.x/micah/svg?seed=beyondchat@gmail.com"
          }
          alt="User Avatar"
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
        />
        <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <MenuItemBox key={index} to={item.path} onClick={handleClose}>
                <StyledListItemIcon>
                  <Icon />
                </StyledListItemIcon>
                <MenuItemText>{item.text}</MenuItemText>
              </MenuItemBox>
            );
          })}
        </StyledMenu>
      </ActionsContainer>
    </MainContainer>
  );
};

export default Header;
