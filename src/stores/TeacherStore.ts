import { TeacherProfileDO } from "@src/service/teacher/getTeacherProfile";
import { atom } from "recoil";

export const teacherLoginState = atom({
  key: "teacherLoginState",
  default: {
    token: "",
    loginIn: false,
  },
});

export const teacherProfileState = atom<TeacherProfileDO | undefined>({
  key: "teacherProfileState",
  default: undefined,
});
