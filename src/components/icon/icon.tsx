import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { icons } from ".";
import { IconProps } from "./icon.props";

const useStyles = makeStyles((theme) => ({
  root: {
    objectFit: "contain",
  },
}));

export function Icon(props: IconProps) {
  const { style: styleOverride, icon, containerStyle, size } = props;
  const classes = useStyles();
  const iconSize = {
    width: size ? size : 24,
    height: size ? size : 24,
  };

  return (
    <div className={classes.root}>
      <img src={icons[icon]} style={{ ...iconSize, ...styleOverride }} />
    </div>
  );
}
