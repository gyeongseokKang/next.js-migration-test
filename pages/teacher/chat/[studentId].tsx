/**
- owner: @강경석
- contributor: @강경석
- function: student와 컨텍할수 있는 페이지 
- screen: [P_07]User-LessonDetail
- comment: 레슨 리스트를 클릭하여 이동
**/

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import WavyTextButton from "src/components/button/WavyTextButton";
import SectionCard from "src/components/card/SectionCard";
import Page from "src/components/page/Page";
import PageItem from "src/components/page/PageItem";
import ChatItem from "src/widget/ChatItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

const TeacherChatRoomPage = () => {
  const router = useRouter();

  const goLessonListPage = () => {
    router.push(`/teacher/lesson`);
  };
  const goReplyPage = () => {
    const { studentId } = router.query;
    router.push(`/teacher/lesson/${studentId}`);
  };

  const TeacherChatRoomPageVAProp: TeacherChatRoomPageVAProp = {
    goLessonListPage: goLessonListPage,
    goReplyPage: goReplyPage,
  };

  return <TeacherChatRoomPageView {...TeacherChatRoomPageVAProp} />;
};

interface TeacherChatRoomPageVAProp {
  goLessonListPage: () => void;
  goReplyPage: () => void;
}

const useStyles = makeStyles((theme) => ({
  btnLayout: {
    display: "flex",
    justifyContent: "center",
    minHeight: "4rem",
    "& > button": {
      height: "2.5rem",
    },
  },
}));

const TeacherChatRoomPageView = ({ goLessonListPage, goReplyPage }: TeacherChatRoomPageVAProp) => {
  const classes = useStyles();

  console.log("TeacherChatRoomPageView render");

  return (
    <Page>
      <PageItem>
        <ArrowBackIcon
          style={{ margin: "0.5rem" }}
          onClick={() => {
            goLessonListPage();
          }}
        />
        <h3>최경민</h3>
      </PageItem>
      <SectionCard width={"95%"}>
        <ChatItem
          lessonType={"video"}
          chatType={"you"}
          videoList={[
            "https://roundins3.s3.ap-northeast-2.amazonaws.com/tmpimages/694c1ad5-4b1f-4714-8fee-b1aac001a3f2.mp4",
            "https://roundins3.s3.ap-northeast-2.amazonaws.com/tmpimages/694c1ad5-4b1f-4714-8fee-b1aac001a3f2.mp4",
          ]}
        />
        <ChatItem lessonType={"letter"} chatType={"me"} />
        <ChatItem lessonType={"letter"} chatType={"you"} />
      </SectionCard>
      <SectionCard>
        <div className={classes.btnLayout}>
          <WavyTextButton text={"피드백 하기"} onClick={goReplyPage} />
        </div>
      </SectionCard>
    </Page>
  );
};

export default TeacherChatRoomPage;
