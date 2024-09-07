import React from "react";
import {
  Dialog,
  DialogTitle,
  Button,
  Typography,
  IconButton,
  styled,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface GroundTruthsDialogProps {
  open: boolean;
  onClose: () => void;
}

const StyledDialog = styled(Dialog)(() => ({
  "& .MuiDialog-paper": {
    maxWidth: "730px",
    borderRadius: "16px",
    padding: "5px",
  },
}));

const StyledDialogTitle = styled(DialogTitle)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 24px",
  fontFamily: "Poppins, sans-serif",
  fontSize: "18px",
}));

const StyledDialogContent = styled(Stack)(({ theme }) => ({
  padding: "16px 24px !important",
  gap: theme.spacing(1.2),
}));

const AddButton = styled(Button)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",
  width: "100%",
  padding: theme.spacing(0.5, 1.5),
  textTransform: "none",
  fontWeight: "500",
}));

const StyledDivider = styled(Divider)(() => ({
  margin: 0,
}));

const GroundTruthsDialog: React.FC<GroundTruthsDialogProps> = ({
  open,
  onClose,
}) => {
  return (
    <StyledDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
      maxWidth={false}
    >
      <StyledDialogTitle id="customized-dialog-title">
        Ground Truths
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 20,
            top: 20,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      <StyledDivider />
      <StyledDialogContent>
        <AddButton
          variant="outlined"
          color="primary"
          endIcon={<AddCircleIcon />}
        >
          ADD GROUND TRUTH
        </AddButton>
        <Typography
          variant="body1"
          align="center"
          fontSize={"1.125rem"}
          fontFamily={"Poppins, sans-serif"}
        >
          No Ground Truths Added
        </Typography>
      </StyledDialogContent>
      <Box sx={{ height: "16px" }} />
    </StyledDialog>
  );
};

export default GroundTruthsDialog;
