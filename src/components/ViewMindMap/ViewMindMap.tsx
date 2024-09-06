import { Box } from "@mui/material";
import Header from "../Header/Header";

function ViewMindMap() {
  return (
    <Box>
      <Header
        heading={"Chatbot Mind Map"}
        title={`This is the brain and the memory of the chatbot. You can add, edit and
          analyse the source data being used to answer user queries from here`}
      />
    </Box>
  );
}

export default ViewMindMap;
