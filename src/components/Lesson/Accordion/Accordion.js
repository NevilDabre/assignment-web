import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import styled from "styled-components";

const PanelHeading = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: #ed2553;
`;

const Accordion = ({ data }) => {
  const elements =
    data &&
    data.map(item => {
      return (
        <ExpansionPanel>
          <ExpansionPanelSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
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
