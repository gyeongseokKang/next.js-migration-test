/**
 * - owner: @kmc
 * - contributor: @kmc @강경석
 * - function: 프로의 로그인 상태 저장
 * - reference: https://recoiljs.org/ko/docs/guides/atom-effects#local-storage-persistence-%EB%A1%9C%EC%BB%AC-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EC%A7%80%EC%86%8D%EC%84%B1
 */

import { atom, DefaultValue } from "recoil";
import { TeacherProfileDO } from "src/service/teacher/getTeacherProfile";

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

export const teacherProfileState = atom<TeacherProfileDO | undefined>({
  key: "teacherProfileState",
  default: undefined,
});
