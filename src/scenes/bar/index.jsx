import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import { useState } from "react";

const Bar = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <>
    <Topbar setIsSidebar={setIsSidebar} />
    <div className="app">
    <Sidebar isSidebar={isSidebar} />
    <div className="content">
    <Box m="20px">
      <Header title="Attendance" subtitle="by month" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
    </div>
    </div>
    </>
  );
};

export default Bar;
