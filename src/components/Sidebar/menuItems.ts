import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import GroupsIcon from "@mui/icons-material/Groups";
import TableChartIcon from "@mui/icons-material/TableChart";
import { Settings as ConfigureIcon } from "@mui/icons-material";

export const menuItems = [
  {
    text: "Explore Chats",
    icon: MoveToInboxIcon,
    path: "/explore",
  },
  { text: "Business Leads", icon: ContactPhoneIcon, path: "/leads" },
  { text: "View Mind Map", icon: TableChartIcon, path: "/mindmap" },
  { text: "Manage Team", icon: GroupsIcon, path: "/team" },
  { text: "Configure Chatbot", icon: ConfigureIcon, path: "/configure" },
];
