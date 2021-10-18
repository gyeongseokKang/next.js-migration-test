/**
- owner: @강경석
- contributor: @강경석
- function: Teacher 로그인 홈
- screen: P_02(심사중 상태)
- comment: 등록이 끝나고 심사를 대기하는 상태
**/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "src/components/page/Page";

const useStyles = makeStyles((theme) => ({
  teacherProfileWaitPage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

const TeacherProfileWaitPage = () => {
  const classes = useStyles();

  return (
    <Page className={classes.teacherProfileWaitPage}>
      <div>신청서 접수 완료!</div>
      <br />
      <div>심사가 완료되면 문자로 </div>
      <div>심사 결과를 알려드리겠습니다.</div>
    </Page>
  );
};

export default TeacherProfileWaitPage;
