import { Box } from "@mui/material";
import Header from "../Header/Header";

function ManageTeam() {
  return (
    <Box>
      <Header
        heading={"Manage your Team"}
        title={`View team, Add new members, remove members, etc`}
      />
    </Box>
  );
}

export default ManageTeam;
