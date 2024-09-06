import { Box, Button, styled, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HistoryIcon from "@mui/icons-material/History";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(0.8),
  marginBottom: "0.5rem",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: "0.95rem",
  textTransform: "none",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ActionButtons = () => {
  const theme = useTheme();

  return (
    <ButtonsContainer>
      <StyledButton
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        sx={{
          ":hover": {
            background: "#333bc7",
          },
        }}
      >
        ADD DATA
      </StyledButton>
      <StyledButton
        variant="contained"
        color="secondary"
        startIcon={<HistoryIcon />}
      >
        DATA TRAINING STATUS
      </StyledButton>
      <StyledButton
        variant="outlined"
        startIcon={<QuestionAnswerIcon />}
        sx={{
          borderColor: theme.palette.secondary.main,
          color: theme.palette.secondary.main,
          ":hover": {
            background: `${theme.palette.secondary.main}0a`,
          },
        }}
      >
        GROUND TRUTHS
      </StyledButton>
    </ButtonsContainer>
  );
};

export default ActionButtons;
