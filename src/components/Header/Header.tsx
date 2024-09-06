import React from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Typography,
  Avatar,
  styled,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px",
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
  gap: theme.spacing(1),
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

const StyledSelect = styled(Select)(({ theme }) => ({
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0 },
  "&:hover .MuiOutlinedInput-notchedOutline": { border: 0 },
  ".MuiSelect-select": { paddingRight: theme.spacing(4) },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  boxShadow: "0px 0px 0px 2px #2872fa",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

interface HeaderProps {
  heading: string;
  title: string;
  avatarSrc?: string;
}

const Header: React.FC<HeaderProps> = ({ heading, title, avatarSrc }) => {
  return (
    <MainContainer>
      <InfoContainer>
        <Heading>{heading}</Heading>
        <Title>{title}</Title>
      </InfoContainer>

      <ActionsContainer>
        <Button variant="outlined" color="primary">
          GUIDED TOUR
        </Button>
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
        />
      </ActionsContainer>
    </MainContainer>
  );
};

export default Header;
