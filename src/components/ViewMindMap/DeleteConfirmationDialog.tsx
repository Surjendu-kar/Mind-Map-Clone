import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  styled,
  Box,
  Snackbar,
  SnackbarContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const StyledDialog = styled(Dialog)(() => ({
  "& .MuiDialog-paper": {
    width: "32em",
    padding: "0 0 1.25em",
    borderRadius: "5px",
    textAlign: "center",
    animation: "swal2-show 0.3s",
    boxShadow: "none",
    color: "#545454",

    "@keyframes swal2-show": {
      "0%": {
        transform: "scale(0.7)",
      },
      "45%": {
        transform: "scale(1.05)",
      },
      "80%": {
        transform: "scale(0.95)",
      },
      "100%": {
        transform: "scale(1)",
      },
    },
  },
}));

const IconCircle = styled("div")({
  width: "80px",
  height: "80px",
  borderColor: "#facea8",
  color: "#f8bb86",
  borderRadius: "50%",
  border: "4px solid",
  margin: "2.5em auto .6em",
  position: "relative",
});

const ExclamationMark = styled("div")({
  alignItems: "center",
  display: "flex",
  fontSize: "3.75em",
  justifyContent: "center",
  height: "100%",
  animation: "swal2-animate-i-mark 0.5s",
  "@keyframes swal2-animate-i-mark": {
    "0%": {
      opacity: 0,
      transform: "rotate(45deg)",
    },
    "25%": {
      opacity: 0.4,
      transform: "rotate(-25deg)",
    },
    "50%": {
      opacity: 0.8,
      transform: "rotate(15deg)",
    },
    "75%": {
      opacity: 1,
      transform: "rotate(-5deg)",
    },
    "100%": {
      opacity: 1,
      transform: "rotateX(0)",
    },
  },
});

const StyledDialogTitle = styled(DialogTitle)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "1.875em",
  padding: ".8em 1em 0",
  fontWeight: "600",
});

const StyledDialogContent = styled(DialogContent)({
  padding: "0",
  margin: "1em 1.6em .3em",
});

const StyledDialogContentText = styled(DialogContentText)({
  fontFamily: "Poppins, sans-serif",
  color: "#545454",
  fontSize: "1.125em",
});

const StyledDialogActions = styled(Box)({
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "flex-start",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "0 1em",
  margin: "1.25em 0 0",
});

const CancelButton = styled(Button)(({ theme }) => ({
  padding: ".625em 1.1em",
  marginRight: "0.625em",
  fontFamily: "Poppins, sans-serif",
  borderColor: theme.palette.secondary.main,
  color: theme.palette.secondary.main,
  ":hover": {
    background: `${theme.palette.secondary.main}0a`,
  },
}));

const OkButton = styled(Button)(({ theme }) => ({
  padding: ".625em 1.1em",
  fontFamily: "Poppins, sans-serif",
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  "&:hover": {
    background: "#333bc7",
  },
}));

const StyledSnackbar = styled(Snackbar)(() => ({
  "& .MuiSnackbarContent-root": {
    backgroundColor: "#f44336",
    color: "#fff",
    borderRadius: "4px",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.875rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0.5),
  color: "#fff",
}));

interface DeleteConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({
  open,
  onClose,
  onConfirm,
}) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setSnackbarOpen(true);
    onClose();
  };

  const handleSnackbarClose = (reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <StyledDialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconCircle>
          <ExclamationMark>!</ExclamationMark>
        </IconCircle>
        <StyledDialogTitle id="alert-dialog-title">
          {"Confirmation"}
        </StyledDialogTitle>

        <StyledDialogContent>
          <StyledDialogContentText id="alert-dialog-description">
            Are you sure you want to delete this data?
          </StyledDialogContentText>
        </StyledDialogContent>

        <StyledDialogActions>
          <OkButton onClick={handleConfirm} autoFocus>
            OK
          </OkButton>
          <CancelButton variant="outlined" onClick={onClose}>
            Cancel
          </CancelButton>
        </StyledDialogActions>
      </StyledDialog>

      <StyledSnackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={(_, reason) => handleSnackbarClose(reason)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <SnackbarContent
          message="Failed to delete data."
          action={
            <CloseButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => handleSnackbarClose()}
            >
              <CloseIcon fontSize="small" />
            </CloseButton>
          }
        />
      </StyledSnackbar>
    </>
  );
};

export default DeleteConfirmationDialog;
