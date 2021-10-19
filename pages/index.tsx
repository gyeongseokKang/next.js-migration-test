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
import { Page, Text } from "src/components";
import { Button } from "@material-ui/core";
import { loginKakao } from "src/service/login/loginKakao";
import { teacherLoginState } from "src/stores";
import { useRouter } from "next/router";
import { CustomPalette } from "src/theme";

const useStyles = makeStyles((theme) => ({
  teacherLoginPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  contentContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonContainer: {
    display: "flex",
  },
  loginButton: {
    marginTop: "1rem",
    marginBottom: "2rem",
    width: "100%",
    height: "3.5rem",
    background: CustomPalette.primary5,
    cursor: "pointer",
    fontSize: "1rem",
    color: CustomPalette.white,
    border: "none",
    borderRadius: "0.75rem",
    "&:hover": {
      backgroundColor: CustomPalette.primary5,
    },
  },
}));

const TeacherLoginPage = () => {
  const classes = useStyles();
  const [teacherLogin, setTeacherLogin] = useRecoilState(teacherLoginState);
  const [loging, setloging] = useState(false);
  const router = useRouter();

  const loginRoundin = async () => {
    await loginKakao().then(() => {
      console.log(teacherLogin);
      teacherLogin.qualified
        ? router.push("/teacher/lesson") // 가입 & 심사 완료
        : teacherLogin.qualificationPending
        ? router.push("/teacher/profile/wait") // 가입 & 심사 대기
        : router.push("/teacher/profile/register"); // 가입 & 심사 요청 전
    });
  };

  return (
    <Page className={classes.teacherLoginPage}>
      <div className={classes.contentContainer}>
        <Text preset="header4_300" color={CustomPalette.grey8}>
          라운드인 프로 전용 페이지입니다. {`\n`}
        </Text>
        <Text preset="header4_300" color={CustomPalette.grey8}>
          {`\n`}
        </Text>
        <Text preset="header4_300" color={CustomPalette.grey8}>
          라운드인과 함께, 쉽고 편하게
        </Text>
        <Text preset="header4_300" color={CustomPalette.grey8}>
          골퍼들의 고민을 해결해주세요 🙂
        </Text>
      </div>
      <div className={classes.loginButtonContainer}>
        {/* <Button href={KAKAO_AUTH_URL} className={classes.loginButton}>
          로그인하기
        </Button> */}
        <Button onClick={loginRoundin} className={classes.loginButton}>
          로그인하기
        </Button>
        {/* <Link to="/oauth/kakao">링크</Link> */}
      </div>
    </Page>
  );
};

export default TeacherLoginPage;
