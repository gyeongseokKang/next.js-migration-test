import React from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import WavyText from "../text/WavyText";
import brandLogo from "public/images/roundin_logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    height: "70vh",
    justifyContent: "center",
  },
}));

interface LandingPageProp {
  landingTitle?: string;
  wavtText?: boolean;
}

const LandingPage = ({ landingTitle = "페이지를 로딩중입니다...", wavtText = false }: LandingPageProp) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Image src={brandLogo} alt="brandLogo" />
      <WavyText text={landingTitle} wavy={wavtText} addPeroid={0} />
    </div>
  );
};

export default LandingPage;
