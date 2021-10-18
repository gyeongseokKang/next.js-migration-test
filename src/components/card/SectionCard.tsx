import React from "react";
import { styled } from "@mui/material/styles";

const StyledSection = styled("section")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "auto",
  marginBlockEnd: "1rem",
  "& > h3, h4, h5": {
    padding: "0.25rem 0.25rem 0.25rem 0px",
    margin: "0.25rem 0.25rem 0.25rem 0px",
  },
  "& > p": {
    fontSize: "0.825rem",
    marginBlock: "0rem",
  },
});

interface SectionCardProp {
  width?: React.CSSProperties["width"];
  sectionTitle?: string;
  children?: React.ReactNode;
  className?: string;
}

const SectionCard = ({ width, sectionTitle, className, children }: SectionCardProp) => {
  return (
    <StyledSection className={className} style={{ width: width }}>
      {sectionTitle && <h4>{sectionTitle}</h4>}
      {children}
    </StyledSection>
  );
};

export default SectionCard;
