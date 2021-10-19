/**
- owner: @강경석
- contributor: @강경석
- function: App 공통 Top bar
**/

import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { CustomPalette } from "src/theme";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "white",
    boxShadow: "",
    color: CustomPalette.grey9,
    display: "flex",
    maxWidth: "500px",
    margin: "auto",
  },
  title: {
    width: "6rem",
    display: "flex",
    cursor: "pointer",
  },
  titleImage: {
    width: "6rem",
    height: "1.5rem",
    objectFit: "contain",
  },
  titleContainer: {
    flexGrow: 1,
    textAlign: "start",
    fontWeight: "bold",
  },
  menuButton: {
    padding: 0,
    "&:hover": {
      backgroundColor: "inherit",
    },
  },
}));

interface TopBarProp {
  openSideBar: () => void;
}

const TopBar = ({ openSideBar }: TopBarProp) => {
  const classes = useStyles();
  const router = useRouter();

  const goHome = () => {
    router.push(`/`);
  };

  return (
    <AppBar className={classes.appbar} position="static" elevation={0}>
      <Toolbar>
        <div className={classes.titleContainer}>
          <div onClick={() => goHome()} className={classes.title}>
            <img src={"/images/roundin_logo_text.png"} className={classes.titleImage} />
          </div>
        </div>
        <IconButton
          disableRipple
          edge="start"
          aria-label="menu"
          onClick={() => {
            openSideBar();
          }}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
