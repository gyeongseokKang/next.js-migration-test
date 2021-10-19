/**
 * - owner: @kmc
 * - contributor: @kmc @강경석
 * - function: 프로의 로그인 상태 저장
 * - reference: https://recoiljs.org/ko/docs/guides/atom-effects#local-storage-persistence-%EB%A1%9C%EC%BB%AC-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EC%A7%80%EC%86%8D%EC%84%B1
 */

import { atom, DefaultValue, selector } from "recoil";
import { LoginDO } from "src/service";

const ISSERVER = typeof window === "undefined";

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }) => {
    if (!ISSERVER) {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
    }

    onSet((newValue: any) => {
      if (!ISSERVER) {
        if (newValue instanceof DefaultValue) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, JSON.stringify(newValue));
        }
      }
    });
  };

export const teacherLoginState = atom<LoginDO>({
  key: "teacherLogin",
  default: {
    token: "",
    logIn: false,
    qualified: false,
    qualificationPending: false,
  },
  effects_UNSTABLE: [localStorageEffect("current_teacher")],
});

// const loginSelector = selector({
//   key: 'loginSelector',
//   set: ({ set, get }, newValue) => {
//     if ( newValue === undefined )
//     {
//       if ( get( teacherLoginState ).login )
//       {

//      };
//     }

//     if (newValue === 'logout') {
//       set(teacherLoginState, { token: '', login: false });
//     }
//   },
//   get: ({ get }) => {
//     if ( get( teacherLoginState ).login ) return true;
//     else
//     {
//       // 카카오 로그인

//     }
//     return false;
//   },
// });

// export default loginSelector;
