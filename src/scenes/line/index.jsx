import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import { useState } from "react";

const Line = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
    <Topbar setIsSidebar={setIsSidebar} />
    <div className="app">
    <Sidebar isSidebar={isSidebar} />
    <div className="content">
    <Box m="20px">
      <Header title="Training Performance" subtitle="Weekly analysis" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
    </div>
    </div>
    </>
  );
};

export default Line;
