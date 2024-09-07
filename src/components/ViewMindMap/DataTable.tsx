import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Chip,
  styled,
  TableContainerProps,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const StyledTableContainer = styled(TableContainer)<
  TableContainerProps & { component?: React.ElementType }
>(({ theme }) => ({
  minWidth: "960px",
  padding: theme.spacing(1),
  overflow: "hidden",
  boxShadow: "none",
}));

const StyledTable = styled(Table)(() => ({
  border: "1px solid rgb(224, 224, 224)",
  borderRadius: "8px",
}));

const Heading = styled(TableCell)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(0, 1),
  height: "56px",
  width: "100px",
  fontSize: "1rem",
  color: "#000000de",
  fontFamily: "Poppins, sans-serif",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:not(:last-child)": {
    border: `1px solid ${theme.palette.divider}`,
  },
  "&:hover": {
    background: "rgba(0, 0, 0, 0.04)",
  },
}));

const ShowMoreTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: "pointer",
  fontSize: "0.875rem",
  display: "inline-flex",
  alignItems: "center",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  padding: theme.spacing(0.6, 0.8),
}));

const DataCellStyle = styled(Heading)<{ isSelected?: boolean }>(
  ({ theme, isSelected }) => ({
    fontWeight: "inherit",
    padding: theme.spacing(1.6, 1.8),
    textAlign: "left",
    border: isSelected ? `rgb(40, 114, 250) solid 1px` : "none",

    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  })
);

const TableCellStyle = styled(Heading)<{ isSelected?: boolean }>(
  ({ theme, isSelected }) => ({
    fontWeight: "inherit",
    padding: theme.spacing(0, 1),
    border: isSelected ? `rgb(40, 114, 250) solid 1px` : "none",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  })
);

const StyledChip = styled(Chip)(() => ({
  height: "24px",
  "& .MuiChip-label": {
    padding: "0 7px",
    fontFamily: "Poppins, sans-serif",
  },
}));

const DateTableCell = styled(TableCellStyle)(({ theme }) => ({
  fontSize: "0.7813rem",
  fontWeight: 500,
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: 0,
  color: theme.palette.primary.main,
  "&.delete": {
    color: theme.palette.secondary.main,
  },
}));

const DataTable = () => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [selectedCell, setSelectedCell] = useState<string | null>(null);

  const toggleRowExpansion = (index: number) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleCellClick = (cellId: string) => {
    setSelectedCell(cellId);
  };

  const rows = [
    {
      data: "Do you work on whatsapp? Yes, we do offer our services on WhatsApp!",
      source: "--",
      type: "TEXT",
      created: "8/3/2024",
    },
    {
      data: "I want to test your chatbot That's great to hear! You can continue chatting with me to test BeyondChats AI responses! I am one of the AIs! 😊 Else, you can also book a demo call with my team: https://calendly.com/beyondchats/15min",
      source: "--",
      type: "TEXT",
      created: "3/28/2024",
    },
    {
      data: "Will the Startup Plan address the concern I mentioned earlier? Yes, the Startup Plan will definitely help address your concerns! With this plan, you'll have access to advanced analytics and features that can enhance customer interactions while ensuring data security.",
      source: "--",
      type: "TEXT",
      created: "7/31/2024",
    },
    {
      data: "What is the cost of IVF? I can't provide specific information on IVF costs, but I can tell you about how our chatbot services can enhance your business by generating high-quality leads and providing 24/7 support to your customers.",
      source: "--",
      type: "TEXT",
      created: "7/31/2024",
    },
    {
      data: "Will the Startup Plan address the concern I mentioned earlier? Yes, the Startup Plan will definitely help address your concerns! With this plan, you'll have access to advanced analytics and features that can enhance customer interactions while ensuring data security.",
      source: "--",
      type: "TEXT",
      created: "7/31/2024",
    },
    {
      data: "Which languages can you talk in? Multilingual support is the core of my AI!  I can speak many popular languages.  Just talk in the language you are comfortable in! Supported languages include: Regional Indian languages like Hindi, Marathi, Bengali, Tamil, etc. International languages I can speak fluently: German, French, Portuguese, etc.",
      source: "--",
      type: "TEXT",
      created: "3/13/2024",
    },
  ];

  return (
    <StyledTableContainer component={Paper}>
      <StyledTable aria-label="simple table">
        <TableHead>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <Heading sx={{ textAlign: "left", width: "1050.4px" }}>
              Data
            </Heading>
            <Heading>Source</Heading>
            <Heading>Type</Heading>
            <Heading>Created</Heading>
            <Heading>Actions</Heading>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <DataCellStyle
                component="th"
                scope="row"
                isSelected={selectedCell === `data-${index}`}
                onClick={() => handleCellClick(`data-${index}`)}
              >
                <>
                  {expandedRows.includes(index)
                    ? row.data
                    : row.data.slice(0, 237)}
                  {row.data.length > 237 && (
                    <Box>
                      <ShowMoreTypography
                        onClick={() => toggleRowExpansion(index)}
                      >
                        {expandedRows.includes(index) ? (
                          <>
                            SHOW LESS
                            <KeyboardArrowUpIcon fontSize="small" />
                          </>
                        ) : (
                          <>
                            SHOW MORE
                            <KeyboardArrowDownIcon fontSize="small" />
                          </>
                        )}
                      </ShowMoreTypography>
                    </Box>
                  )}
                </>
              </DataCellStyle>

              <TableCellStyle
                isSelected={selectedCell === `source-${index}`}
                onClick={() => handleCellClick(`source-${index}`)}
              >
                {row.source}
              </TableCellStyle>

              <TableCellStyle
                isSelected={selectedCell === `type-${index}`}
                onClick={() => handleCellClick(`type-${index}`)}
              >
                <StyledChip
                  label={row.type}
                  variant="outlined"
                  color="primary"
                />
              </TableCellStyle>

              <DateTableCell
                isSelected={selectedCell === `date-${index}`}
                onClick={() => handleCellClick(`date-${index}`)}
              >
                {row.created}
              </DateTableCell>

              <TableCellStyle
                isSelected={selectedCell === `actions-${index}`}
                onClick={() => handleCellClick(`actions-${index}`)}
              >
                <StyledIconButton
                  aria-label="edit"
                  sx={{ paddingRight: "8px" }}
                >
                  <EditIcon />
                </StyledIconButton>
                <StyledIconButton aria-label="delete" className="delete">
                  <DeleteIcon />
                </StyledIconButton>
              </TableCellStyle>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default DataTable;
