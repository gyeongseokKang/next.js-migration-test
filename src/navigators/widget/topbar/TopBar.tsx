/**
- owner: @강경석
- contributor: @강경석
- function: App 공통 Top bar
**/

import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Badge, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "white",
    boxShadow: "",
    color: "#212529",
    display: "flex",
    maxWidth: "500px",
    width: "100vw",
    margin: "auto",
    "& > div": {
      padding: "0px 0.25rem",
    },
  },
  title: {
    flexGrow: 1,
    textAlign: "start",
    cursor: "pointer",
    fontWeight: "bold",
  },
  notiIcon: {
    margin: "0.25rem",
    padding: "0.25rem",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  menuButton: {
    margin: "0.25rem",
    padding: "0.25rem",
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
        <Typography
          variant="h6"
          className={classes.title}
          onClick={() => {
            goHome();
          }}
        >
          Roundin
        </Typography>
        <Badge className={classes.notiIcon} variant="dot" color="secondary">
          <NotificationsNoneIcon />
        </Badge>
        <IconButton
          onClick={() => {
            openSideBar();
          }}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
