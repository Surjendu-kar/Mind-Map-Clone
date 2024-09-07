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
import { useDemoData } from "./DemoData";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

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
     whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    maxWidth: "400px",

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
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const toggleRowExpansion = (index: number) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleCellClick = (cellId: string) => {
    setSelectedCell(cellId);
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    setDeleteDialogOpen(false);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
  };

  const rows = useDemoData();

  return (
    <>
      <StyledTableContainer component={Paper}>
        <StyledTable aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
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

                  <StyledIconButton
                    aria-label="delete"
                    className="delete"
                    onClick={handleDeleteClick}
                  >
                    <DeleteIcon />
                  </StyledIconButton>
                </TableCellStyle>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>

      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
};

export default DataTable;
