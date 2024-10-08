import { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import ExploreChats from "./components/ExploreChats/ExploreChats";
import BusinessLeads from "./components/BusinessLeads/BusinessLeads";
import ViewMindMap from "./components/ViewMindMap/ViewMindMap";
import ManageTeam from "./components/ManageTeam/ManageTeam";
import ConfigureChatbot from "./components/ConfigureChatbot/ConfigureChatbot";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/mindmap");
    }
  }, [location, navigate]);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" width={"100%"}>
        <Routes>
          <Route path="/explore" element={<ExploreChats />} />
          <Route path="/leads" element={<BusinessLeads />} />
          <Route path="/mindmap" element={<ViewMindMap />} />
          <Route path="/team" element={<ManageTeam />} />
          <Route path="/configure" element={<ConfigureChatbot />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
