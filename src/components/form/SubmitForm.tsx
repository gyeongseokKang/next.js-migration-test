import React from "react";
import { styled } from "@mui/material/styles";
import { CustomPalette } from "src/theme";

const StyledInput = styled("input")({
  marginTop: "1rem",
  marginBottom: "2rem",
  width: "100%",
  height: "3.5rem",
  background: CustomPalette.primary5,
  cursor: "pointer",
  fontSize: "1rem",
  color: CustomPalette.white,
  border: "none",
  borderRadius: "0.75rem",
  "&:hover": {
    backgroundColor: CustomPalette.primary5,
  },
});

interface SubmitFormProp {
  text?: string;
  className?: string;
}

const SubmitForm = ({ text, className }: SubmitFormProp) => {
  return <StyledInput className={className} type="submit" value={text} />;
};

export default SubmitForm;
