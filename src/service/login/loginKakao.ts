import axios from "axios";

import { SERVER_URL, serviceOnOff, sleep } from "../serviceSetting";

import { useRecoilState } from "recoil";
import { teacherLoginState } from "src/stores";

export interface LoginDO {
  token: string;
  logIn: boolean;
  qualified: boolean;
  qualificationPending: boolean;
}

export async function loginKakao(): Promise<LoginDO | false> {
  const [teacherLogin, setTeacherLogin] = useRecoilState(teacherLoginState);
  const kakaoCode = new URL(window.location.href).searchParams.get("code");
  let result: LoginDO | boolean = false;

  if (kakaoCode) {
    axios.get(`${SERVER_URL}/auth/kakaocode?code=${kakaoCode}&state=${"signin,teacher"}`).then((response) => {
      console.log("called");
      setTeacherLogin({
        token: response.data.token.refresh_token,
        logIn: true,
        qualified: false,
        qualificationPending: false,
      });
      result = true;
      // #TODO: need to set this value as a LoginDO variable?
    });
  }
  return result;
}
