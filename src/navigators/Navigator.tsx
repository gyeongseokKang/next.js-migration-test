/**
- owner: @강경석
- contributor: @강경석
- function: App navigator ( topBar + sideBar)
**/

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "./widget/topbar/TopBar";
import SideBar from "./widget/sidebar/Sidebar";

const useStyles = makeStyles((theme) => ({
  navigator: {
    flexGrow: 1,
    position: "sticky",
    top: 0,
    zIndex: 500,
  },
}));

const Navigator = () => {
  const classes = useStyles();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const openSideBar = () => {
    setSideBarOpen(true);
  };
  const closeSideBar = () => {
    setSideBarOpen(false);
  };

  return (
    <div className={classes.navigator}>
      <TopBar openSideBar={openSideBar} />
      <SideBar sideBarOpen={sideBarOpen} closeSideBar={closeSideBar} />
    </div>
  );
};

export default Navigator;
