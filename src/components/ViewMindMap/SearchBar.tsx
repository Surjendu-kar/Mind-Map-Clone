import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  styled,
} from "@mui/material";

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  marginTop: theme.spacing(0.8),
  
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: "8.5px 14px",
  },
  "& .MuiInputLabel-root": {
    fontSize: "1.1rem",
    transform: "translate(14px, 8px) scale(1)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8789rem",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    transform: "translate(12px, -6px) scale(0.75)",
  },

  [theme.breakpoints.down("sm")]: { width: "60%" },
}));

const CustomFormControl = styled(FormControl)(() => ({
  minWidth: "120px",
  "& .MuiOutlinedInput-input": {
    padding: "8.5px 14px",
  },
  "& .MuiInputLabel-root": {
    fontSize: "0.8789rem",
  },
}));

const BtnStyle = styled(Button)(() => ({
  padding: "9px 28px",
  fontSize: "0.8rem",
  fontWeight: "bold",
  ":hover": {
    background: "#333bc7",
  },
}));

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [resultsCount, setResultsCount] = useState<string>("3");

  const handleSearch = (): void => {
    console.log(
      "Searching for:",
      searchTerm,
      "with results count:",
      parseInt(resultsCount, 10)
    );
  };

  const handleResultsChange = (event: SelectChangeEvent<string>): void => {
    setResultsCount(event.target.value);
  };

  return (
    <MainContainer>
      <CustomTextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CustomFormControl variant="outlined">
        <InputLabel id="results-label">Results</InputLabel>
        <Select
          labelId="results"
          value={resultsCount.toString()}
          onChange={handleResultsChange}
          label="Results"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 50].map((number) => (
            <MenuItem key={number} value={number}>
              {number}
            </MenuItem>
          ))}
        </Select>
      </CustomFormControl>
      <BtnStyle variant="contained" color="primary" onClick={handleSearch}>
        Search
      </BtnStyle>
    </MainContainer>
  );
};

export default SearchBar;
