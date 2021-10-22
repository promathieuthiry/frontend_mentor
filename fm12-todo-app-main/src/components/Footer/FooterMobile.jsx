import React from "react";
import { Container, Paragraph } from "../../styles/StyledFooterMobile";

function FooterMobile({ caseFilter, setCaseFilter }) {
  return (
    <Container>
      <p
        onClick={() => setCaseFilter(0)}
        style={{ color: caseFilter === 0 && "#3A7CFD", cursor: "pointer" }}
      >
        All
      </p>
      <p
        onClick={() => setCaseFilter(1)}
        style={{ color: caseFilter === 1 && "#3A7CFD", cursor: "pointer" }}
      >
        Active
      </p>
      <p
        onClick={() => setCaseFilter(2)}
        style={{ color: caseFilter === 2 && "#3A7CFD", cursor: "pointer" }}
      >
        Completed
      </p>
    </Container>
  );
}

export default FooterMobile;
