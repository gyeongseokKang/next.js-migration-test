import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import WavyText from "../text/WavyText";
import { CustomPalette, CustomColor } from "src/theme";

const StyledButton = styled(Button)({
  display: "flex",
  width: "90vw",
  maxWidth: "500px",
  fontFamily: "inherit",
  background: CustomColor.button.background,
  color: CustomColor.button.text,
  "&:hover": {
    color: CustomColor.text,
    background: CustomPalette.grey6,
  },
});

interface WavyTextButtonProp {
  text: string;
  wavyOn?: boolean;
  onClick?: () => void;
  className?: string;
}

const WavyTextButton = ({ text, wavyOn = false, className, onClick }: WavyTextButtonProp) => {
  return (
    <StyledButton
      className={className}
      variant="contained"
      onClick={() => {
        onClick && onClick();
      }}
    >
      <WavyText text={text} wavy={wavyOn} addPeroid={5} />
    </StyledButton>
  );
};

export default WavyTextButton;
