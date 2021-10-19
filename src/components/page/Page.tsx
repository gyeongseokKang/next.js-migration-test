import React from "react";
import { styled } from "@mui/material/styles";

const StyledPage = styled("div")({
  height: "calc( 100vh - 60px )",
  maxWidth: "500px",
  margin: "auto",
  padding: "0rem 1rem",
  position: "relative",
  // margin: "auto",
  // display: "flex",
  // flexDirection: "column",
  // flexGrow: 1,
  // alignItems: "flex-start",
  // maxWidth: "500px",
});

interface PageProp {
  className?: string;
  children?: React.ReactNode;
}

export const Page = ({ children, className }: PageProp) => {
  return <StyledPage className={className}>{children}</StyledPage>;
};
