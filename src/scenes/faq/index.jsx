import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Why Us?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Dining Halls for students has been an inconvenience. Currently there exists no system which can provide students data about the waiting time at various dining halls. 
          The distance between the various dining halls and tight schedules of students compounds the issue. Plenty of times, students have had to miss a meal just because of a long queue to get into a dining hall.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is our long-term idea?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our project idea is to design an online web application that will have components where Dining Hall Employees across UIUC could upload real-time data on the line sizes and food information to help students who are planning their schedules around specific meals to do so in a more efficient way.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            So, how does this work in the back-end?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The project takes in information such as time of day (from our website built in), menu items from the UIUC GitHub published API, and manual user-input through secure based login service integrated on the UI.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
