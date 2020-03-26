import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styled from "styled-components";

const PanelHeading = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: #0b72c2;
`;

const Accordion = ({ data, handleAccordionChange }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => {
    setExpanded(expanded === panel ? false : panel);
  };

  const elements =
    data &&
    data.map(item => {
      return (
        <ExpansionPanel
          key={item._id}
          expanded={expanded === item._id}
          onClick={() => {
            handleChange(item._id);
            handleAccordionChange(item._id);
          }}
        >
          <ExpansionPanelSummary
            aria-controls={`panel1a-content${item._id}`}
            id={`panel1a-header${item._id}`}
            expandIcon={<ExpandMoreIcon />}
          >
            <PanelHeading>{item.name}</PanelHeading>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>{item.description}</ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });
  return <>{elements}</>;
};

export default Accordion;
