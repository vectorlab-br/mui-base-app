import { Box, Button, Stack } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Centralbar from "./components/Centralbar";

// From https://youtu.be/fzxEECHnsvU

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction={"row"} spacing={2} justifyContent="space-between">
        <Sidebar />
        <Centralbar />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
