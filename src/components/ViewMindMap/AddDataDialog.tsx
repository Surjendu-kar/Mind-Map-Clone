import React, { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
  Box,
  Typography,
  IconButton,
  styled,
  Theme,
  useTheme,
  Link,
  ButtonProps,
  Snackbar,
  SnackbarContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PublishIcon from "@mui/icons-material/Publish";
import DeleteIcon from "@mui/icons-material/Delete";

interface AddDataDialogProps {
  open: boolean;
  onClose: () => void;
  editData?: string | null;
}

const StyledDialog = styled(Dialog)(({ theme }: { theme: Theme }) => ({
  "& .MuiDialog-paper": {
    maxWidth: "730px",
    borderRadius: "16px",
    padding: theme.spacing(0.5),
  },

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    "& .MuiDialog-paper": {
      width: "100%",
      margin: "10px",
    },
  },
}));

const StyledDialogTitle = styled(DialogTitle)(
  ({ theme }: { theme: Theme }) => ({
    fontSize: "18px",
    fontWeight: "bold",

    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  })
);

const StyledDialogContent = styled(DialogContent)(
  ({ theme }: { theme: Theme }) => ({
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",

    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  })
);

const TabBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  paddingTop: theme.spacing(1.6),

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

const TabBtn = styled(Button)<{ isActive: boolean }>(({ theme, isActive }) => ({
  color: isActive ? "white" : "black",
  padding: theme.spacing(1, 2),
  border: `2px solid ${theme.palette.primary.main}`,
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const StyledTextField = styled(TextField)(({ theme }: { theme: Theme }) => ({
  margin: "16px 0px 8px",

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const ButtonBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: theme.spacing(0.8),
  padding: theme.spacing(0.8),

  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const UploadButtonContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

const UploadButton = styled(Button)<
  ButtonProps & { component?: React.ElementType }
>(({ theme }: { theme: Theme }) => ({
  margin: theme.spacing(2, 0),
  width: "auto",
}));

const CSVBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const Text = styled(Typography)(() => ({
  fontSize: "0.625rem",
}));

const FileDisplayBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: theme.spacing(2),
}));

const FileNameTypography = styled(Typography)(
  ({ theme }: { theme: Theme }) => ({
    fontSize: "1rem",
    marginRight: theme.spacing(1),
  })
);

const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  "& .MuiSnackbarContent-root": {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0.5),
  color: theme.palette.error.contrastText,
}));

const AddDataDialog: React.FC<AddDataDialogProps> = ({
  open,
  onClose,
  editData,
}) => {
  const [activeTab, setActiveTab] = useState<string>("Text");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [sourceLink, setSourceLink] = useState<string>("");
  const [linkUrl, setLinkUrl] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    if (editData) {
      setActiveTab("Text");
      setTitle(editData);
      setDescription("");
      setSourceLink("");
    }
  }, [editData]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSave = () => {
    // console.log(title, description, sourceLink, linkUrl, file);
    setSnackbarOpen(true);
    resetState();
    onClose();
  };

  const resetState = () => {
    setActiveTab("Text");
    setTitle("");
    setDescription("");
    setSourceLink("");
    setLinkUrl("");
    setFile(null);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };
  const handleDeleteFile = () => {
    setFile(null);
  };

  const handleSnackbarClose = (reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const isSaveDisabled = useMemo(() => {
    switch (activeTab) {
      case "Text":
        return !title;
      case "Link":
        return !linkUrl;
      case "PDF":
      case "EPUB":
      case "CSV":
        return !file;
      default:
        return true;
    }
  }, [activeTab, title, linkUrl, file]);

  const renderContent = () => {
    switch (activeTab) {
      case "Text":
        return (
          <>
            <StyledTextField
              fullWidth
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <StyledTextField
              fullWidth
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </>
        );

      case "PDF":
      case "EPUB":
      case "CSV":
        return (
          <>
            {file ? (
              <FileDisplayBox>
                <FileNameTypography variant="body2">
                  {file.name}
                </FileNameTypography>
                <IconButton
                  onClick={handleDeleteFile}
                  size="small"
                  color="error"
                >
                  <DeleteIcon sx={{ color: theme.palette.secondary.main }} />
                </IconButton>
              </FileDisplayBox>
            ) : (
              <>
                <UploadButtonContainer>
                  <UploadButton
                    variant="contained"
                    endIcon={<PublishIcon />}
                    component="label"
                  >
                    {`UPLOAD ${activeTab}`}
                    <input
                      type="file"
                      hidden
                      accept={
                        activeTab === "CSV"
                          ? ".csv"
                          : activeTab === "PDF"
                          ? ".pdf"
                          : ".epub"
                      }
                      onChange={handleFileUpload}
                    />
                  </UploadButton>
                </UploadButtonContainer>
                {activeTab === "CSV" && (
                  <CSVBox>
                    <Text>
                      Please upload your CSV file in the following format:{" "}
                      <Link href="#" underline="always">
                        Download CSV
                      </Link>
                      .
                    </Text>
                    <Text>Make sure the header is present</Text>
                  </CSVBox>
                )}
              </>
            )}
          </>
        );

      case "Link":
        return (
          <StyledTextField
            fullWidth
            label="Link URL"
            variant="outlined"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <StyledDialog open={open} onClose={onClose} fullWidth>
        <StyledDialogTitle>
          Add Data
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </StyledDialogTitle>

        <StyledDialogContent>
          <TabBox>
            {["Text", "PDF", "EPUB", "Link", "CSV"].map((tab) => (
              <TabBtn
                key={tab}
                isActive={activeTab === tab}
                variant={activeTab === tab ? "contained" : "outlined"}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </TabBtn>
            ))}
          </TabBox>

          {renderContent()}

          <StyledTextField
            fullWidth
            label="Read More/Source Link"
            variant="outlined"
            value={sourceLink}
            onChange={(e) => setSourceLink(e.target.value)}
            sx={{ marginBottom: 0, marginTop: theme.spacing(2) }}
          />
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ margin: "3px 14px 0px" }}
          >
            The Source or Read More link user gets at the end of the message
          </Typography>
        </StyledDialogContent>

        <ButtonBox>
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              borderColor: theme.palette.secondary.main,
              color: theme.palette.secondary.main,
              ":hover": {
                background: `${theme.palette.secondary.main}0a`,
              },
            }}
          >
            CANCEL
          </Button>
          <Button
            variant="contained"
            onClick={handleSave}
            disabled={isSaveDisabled}
          >
            SAVE
          </Button>
        </ButtonBox>
      </StyledDialog>

      <StyledSnackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={(_, reason) => handleSnackbarClose(reason)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <SnackbarContent
          message="unauthenticated"
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

export default AddDataDialog;
