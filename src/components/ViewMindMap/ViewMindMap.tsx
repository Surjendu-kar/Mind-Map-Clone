import { Stack, styled } from "@mui/material";
import Header from "../Header/Header";
import ActionButtons from "./ActionButtons";
import SearchBar from "./SearchBar";

const Container = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  margin: "16px auto ",
  maxWidth: "1200px",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const HrStyle = styled("hr")(({ theme }) => ({
  width: "80%",
  margin: "10px 0px",
  borderWidth: "0.01rem",
  borderColor: "grey",
  borderStyle: "solid",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

function ViewMindMap() {
  return (
    <>
      <Header
        heading={"Chatbot Mind Map"}
        title={`This is the brain and the memory of the chatbot. You can add, edit and
          analyse the source data being used to answer user queries from here`}
      />
      <Container>
        <ActionButtons />
        <HrStyle />
        <SearchBar />
      </Container>
    </>
  );
}

export default ViewMindMap;
