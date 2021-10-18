import React from "react";

import MenuItem from "./MenuItem";
import ListIcon from "@mui/icons-material/List";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { useRecoilState } from "recoil";
import { teacherLoginState } from "src/stores/TeacherStore";

const TeacherSideBar = () => {
  const [teacherLogin, setTeacherLogin] = useRecoilState(teacherLoginState);

  const logout = () => {
    if (teacherLogin.loginIn) {
      setTeacherLogin({
        loginIn: false,
        token: "",
      });
    }
  };

  return (
    <>
      <MenuItem icon={<ListIcon />} to={"/teacher/lesson"} title={"레슨 요청 목록"} />
      <MenuItem icon={<ConfirmationNumberIcon />} to={"/teacher/profile/modify"} title={"프로필 관리"} />
      <div
        onClick={() => {
          logout();
        }}
      >
        {teacherLogin.loginIn && <MenuItem to={"/teacher"} title={"로그아웃"} />}
      </div>
    </>
  );
};

export default TeacherSideBar;
