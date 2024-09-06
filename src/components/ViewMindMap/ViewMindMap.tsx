import { Box, Stack } from "@mui/material";
import Header from "../Header/Header";
import ActionButtons from "./ActionButtons";
import SearchBar from "./SearchBar";

function ViewMindMap() {
  return (
    <Box>
      <Header
        heading={"Chatbot Mind Map"}
        title={`This is the brain and the memory of the chatbot. You can add, edit and
          analyse the source data being used to answer user queries from here`}
      />
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          margin: "16px auto ",
          maxWidth: "1200px",
        }}
      >
        <ActionButtons />
        <hr
          style={{
            width: "80%",
            margin: "10px 0px",
            borderWidth: "0.01rem",
            borderColor: "grey",
            borderStyle: "solid",
          }}
        />
        <SearchBar />
      </Stack>
    </Box>
  );
}

export default ViewMindMap;
