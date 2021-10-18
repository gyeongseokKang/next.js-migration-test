import axios from "axios";
import { SERVER_URL, serviceOnOff, sleep } from "../serviceSetting";

export interface AuthTokeon {
  token: string;
}
var config = {
  method: "post",
  url: "13.124.222.71:11809/auth",
  headers: {},
};

export async function loginKakao(): Promise<AuthTokeon | false> {
  let result: AuthTokeon = { token: "" };

  if (serviceOnOff === false) {
    result = { token: "test_token" };
    await sleep(5000);
    return result;
  }

  // let responseRoundinServer = await axios({
  //   baseURL: SERVER_URL,
  //   method: "post",
  //   url: `/auth`,
  // });

  // if (responseRoundinServer.data.status !== "ok") return false;

  // console.log("responseRoundinServer", "1차 스탭");
  // let responseKakaoServer = await axios({
  //   baseURL: SERVER_URL,
  //   method: "get",
  //   url: `${responseRoundinServer.data.url}`,
  // });
  // console.log("responseKakaoServer", responseKakaoServer);

  // if (responseKakaoServer.status.toString() === "ok") {
  //   result = responseKakaoServer.data.result;
  // }

  return result;
}
