import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import { useState } from "react";

const Pie = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
    <Topbar setIsSidebar={setIsSidebar} />
    <div className="app">
    <Sidebar isSidebar={isSidebar} />
    <div className="content">
    <Box m="20px">
      <Header title="Coaches Performance" subtitle="Per month" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
    </div>
    </div>
    </>
  );
};

export default Pie;
