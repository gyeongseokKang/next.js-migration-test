import React from "react";
import { styled } from "@mui/material/styles";
import { CustomColor, CustomPalette } from "src/theme";

const StyledInput = styled("input")({
  display: "flex",
  width: "90%",
  maxWidth: "500px",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  padding: "0.625rem",
  margin: "0.25rem",
  justifyContent: "center",
  fontSize: "0.875rem",
  fontFamily: "inherit",
  background: CustomColor.button.background,
  color: CustomColor.button.text,
  "&:hover": {
    color: CustomColor.text,
    background: CustomPalette.grey6,
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
