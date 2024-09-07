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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Heading = styled(TableCell)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(0, 1),
  height: "56px",
  width: "100px",
  fontSize: "1.125rem",
  color: "#000000de",
  fontFamily: "Poppins, sans-serif",
}));

const ShowMoreTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: "pointer",
  fontSize: "0.875rem",
}));

const TableCellStyle = styled(Heading)(({ theme }) => ({
  fontWeight: "inherit",
  padding: theme.spacing(1.6, 1.8),
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const DataTable = () => {
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
    <TableContainer
      component={Paper}
      sx={{
        minWidth: "960px",
        padding: "10px",
        overflow: "hidden",
      }}
    >
      <Table
        aria-label="simple table"
        sx={{ border: "1px solid rgb(224, 224, 224)", borderRadius: "8px" }}
      >
        <TableHead>
          <TableRow>
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
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCellStyle
                component="th"
                scope="row"
                sx={{ textAlign: "left" }}
              >
                {row.data.length > 250 ? (
                  <>
                    {row.data.slice(0, 250)}...
                    <ShowMoreTypography>SHOW MORE</ShowMoreTypography>
                  </>
                ) : (
                  row.data
                )}
              </TableCellStyle>

              <TableCellStyle>{row.source}</TableCellStyle>

              <TableCellStyle>
                <Chip label={row.type} variant="outlined" color="primary" />
              </TableCellStyle>

              <TableCellStyle>{row.created}</TableCellStyle>

              <TableCellStyle>
                <IconButton aria-label="edit" sx={{ padding: 0 }}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" sx={{ padding: 0 }}>
                  <DeleteIcon />
                </IconButton>
              </TableCellStyle>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
