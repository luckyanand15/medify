import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&::before": {
    display: "none",
  },
  "&:not(:last-child)": {
    marginBottom: 24,
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon sx={{ color: "primary.main" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: false,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(45deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: 0,
  },
  padding: 0,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
}));

const CustomAccordion = ({ data }) => {
  const [expanded, setExpanded] = useState("");
  const handleChange = (p) => (e, newExpanded) => {
    setExpanded(newExpanded ? p : false);
  };
  return (
    <div>
      {data.map((item, idx) => {
        return (
          <Accordion
            key={idx}
            expanded={expanded === `p${idx}`}
            onChange={handleChange(`p${idx}`)}
          >
            <AccordionSummary
              aria-controls={`p${idx}d-content`}
              id={`pf${idx}d-header`}
            >
              <Typography
                fontSize={18}
                fontWeight={700}
                color="#1B3C74"
                lineHeight={1.2}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography fontSize={14}>
                    {item.answer}
                </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default CustomAccordion;