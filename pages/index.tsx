/**
- owner: @강경석
- contributor: @강경석
- function: Teacher 로그인 홈
- screen: P_00
- comment: Teacher 로그인 진입점 및 redirect 위치
**/

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRecoilState } from "recoil";
import WavyTextButton from "src/components/button/WavyTextButton";
import ImgWithSupportError from "src/components/image/ImgWithSupportError";
import Page from "src/components/page/Page";
import { loginKakao } from "src/service/login/loginKakao";
import { teacherLoginState } from "src/stores/TeacherStore";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  teacherLoginPage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  brandLogo: {
    width: "50vw",
    maxWidth: "350px",
    position: "relative",
    bottom: "50px",
  },
  loginBtnLayout: {
    position: "absolute",
    bottom: "1rem",
  },
}));

const TeacherLoginPage = () => {
  const classes = useStyles();
  const [teacherLogin, setTeacherLogin] = useRecoilState(teacherLoginState);
  const [loging, setloging] = useState(false);
  const router = useRouter();

  const loginRoundin = async () => {
    setloging(true);
    const response = await loginKakao();
    console.log("teacherLogin - token : ", response);
    if (response) {
      setTeacherLogin({
        token: response.token,
        loginIn: true,
      });
      // 이미 등록된 선생님
      //history.push("/teacher/lesson");

      // 새로운 선생님
      router.push("/teacher/profile/register");
    }
    setloging(false);
  };

  return (
    <Page className={classes.teacherLoginPage}>
      <ImgWithSupportError className={classes.brandLogo} imgSrc={""} />
      <div>라운드인 프로 전용 페이지입니다.</div>
      <div>라운드인과 함께,</div>
      <div>쉽고 편하게 골퍼들의</div>
      <div>문제를 해결해주세요 🙂</div>
      <div className={classes.loginBtnLayout}>
        <WavyTextButton onClick={loginRoundin} text={"로그인 하기"} wavyOn={loging} />
      </div>
    </Page>
  );
};

export default TeacherLoginPage;
