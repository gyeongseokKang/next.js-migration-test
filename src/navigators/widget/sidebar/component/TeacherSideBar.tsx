import React from "react";

import MenuItem from "./MenuItem";

import { useRecoilState } from "recoil";
import { teacherLoginState } from "src/stores";

const TeacherSideBar = () => {
  const [teacherLogin, setTeacherLogin] = useRecoilState(teacherLoginState);

  return (
    <div style={{ marginTop: "2.5rem" }}>
      <MenuItem to={"/teacher/lesson"} title={"레슨 요청 목록"} icon="list" />
      <MenuItem to={"/teacher/profile/modify"} title={"프로필 관리"} icon="editProfile" />
    </div>
  );
};

export default TeacherSideBar;
