import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import { useState } from "react";

const FAQ = () => {
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
      <Header title="Chat" subtitle="Recent Chats" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Jon Snow
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            When can I register myself for 2024 intake?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Cersei Lannister
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          When can I register myself for 2024 intake?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Anya Stark
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          When can I register myself for 2024 intake?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Harvey Roxie
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          When can I register myself for 2024 intake?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Rossini Frances
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          When can I register myself for 2024 intake?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    </div>
    </div>
    </>
  );
};

export default FAQ;
