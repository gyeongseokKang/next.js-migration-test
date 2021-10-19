/**
- owner: @강경석
- contributor: @강경석
- function: App Side bar (유저별로 정보 다름)
**/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import TeacherSideBar from "./component/TeacherSideBar";
import { Text } from "src/components";

import { CustomPalette } from "src/theme";

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
  sideMenu: { height: "100%", display: "flex", flexDirection: "column" },
  menuBottomContainer: {
    position: "fixed",
    bottom: "3rem",
  },
}));

interface SideBarProp {
  sideBarOpen: boolean;
  closeSideBar: () => void;
}

const SideBar = ({ sideBarOpen, closeSideBar }: SideBarProp) => {
  const classes = useStyles();

  const logout = () => {
    console.log("프로 로그아웃");
    // if (teacherLogin.loginIn) {
    //   setTeacherLogin({
    //     loginIn: false,
    //     token: "",
    //   });
    // }
  };

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
      <div className={classes.menuBottomContainer}>
        <div
          onClick={() => {
            logout();
          }}
          style={{
            marginLeft: "1.5rem",
            marginBottom: "2rem",
            cursor: "pointer",
          }}
        >
          <Text preset="body_500" color={CustomPalette.grey9}>
            로그아웃
          </Text>
        </div>
        <div style={{ marginLeft: "1.5rem" }}>
          <Text preset="small_300" color={CustomPalette.grey6}>
            서비스 이용문의
          </Text>
          <a href="mailto: team.roundin@gmail.com">
            <Text preset="small_400" color={CustomPalette.grey6}>
              team.roundin@gmail.com
            </Text>
          </a>
        </div>
      </div>
    </Drawer>
  );
};

export default SideBar;
