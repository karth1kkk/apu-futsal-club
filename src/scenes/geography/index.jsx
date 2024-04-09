import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import { useState } from "react";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
    <Topbar setIsSidebar={setIsSidebar} />
    <div className="app">
    <Sidebar isSidebar={isSidebar} />
    <div className="content">
    <Box m="20px">
      <Header title="Countries" subtitle="Student from various countries" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
    </div>
    </div>
    </>
  );
};

export default Geography;
