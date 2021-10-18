/**
- owner: @강경석
- contributor: @강경석
- function: App Side bar (유저별로 정보 다름)
**/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import TeacherSideBar from "./component/TeacherSideBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "sticky",
    top: 0,
    zIndex: 500,
  },

  title: {
    flexGrow: 1,
    textAlign: "start",
    cursor: "pointer",
  },
  notiIcon: {
    margin: "0.25rem",
    padding: "0.25rem",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  sideMenu: {
    "& .MuiDrawer-paper": {
      borderRadius: "20px 0px 0px 20px / 20px 0px 0px 20px",
    },
  },
  menuButton: {
    margin: "0.25rem",
    padding: "0.25rem",
  },
  menuBottomItem: {
    position: "fixed",
    bottom: "10px",
    margin: "1rem",
    fontSize: "0.75rem",
  },
}));

interface SideBarProp {
  sideBarOpen: boolean;
  closeSideBar: () => void;
}

const SideBar = ({ sideBarOpen, closeSideBar }: SideBarProp) => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.sideMenu}
      anchor={"right"}
      open={sideBarOpen}
      onClose={() => {
        closeSideBar();
      }}
    >
      <div
        onClick={() => {
          closeSideBar();
        }}
      >
        <TeacherSideBar />
      </div>
      <div className={classes.menuBottomItem}>
        <div>서비스 이용문의</div>
        <a href="mailto: team.roundin@gmail.com">team.roundin@gmail.com</a>
      </div>
    </Drawer>
  );
};

export default SideBar;
