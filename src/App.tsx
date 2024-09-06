import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <Box component="main">
        <h1>Main Contents</h1>
      </Box>
    </Box>
  );
};

export default App;
