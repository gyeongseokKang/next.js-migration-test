import React from "react";
import { styled } from "@mui/material/styles";

const StyledPageItem = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
});

interface PageItemProp {
  className?: string;
  children?: React.ReactNode;
}

export const PageItem = ({ children, className }: PageItemProp) => {
  return <StyledPageItem className={className}>{children}</StyledPageItem>;
};
