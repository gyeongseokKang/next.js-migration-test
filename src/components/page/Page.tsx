import React from "react";
import { styled } from "@mui/material/styles";

const StyledPage = styled("div")({
  width: "95vw",
  height: "calc( 100vh - 60px )",
  maxWidth: "500px",
  margin: "auto",
  position: "relative",
});

interface PageProp {
  className?: string;
  children?: React.ReactNode;
}

const Page = ({ children, className }: PageProp) => {
  return <StyledPage className={className}>{children}</StyledPage>;
};

export default Page;
