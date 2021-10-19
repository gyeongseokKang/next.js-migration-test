/**
- owner: @강경석
- contributor: @강경석
- function: student와 컨텍할수 있는 페이지 
- screen: [P_07]User-LessonDetail
- comment: 레슨 리스트를 클릭하여 이동
**/

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Page, PageItem, Text } from "src/components";
import { useRouter } from "next/router";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Button } from "@material-ui/core";
import SectionCard from "src/components/card/SectionCard";
import { CustomPalette } from "src/theme";
import ChatItem from "src/widget/ChatItem";

const TeacherChatRoomPage = () => {
  const router = useRouter();
  const { studentId } = router.query;

  const goLessonListPage = () => {
    router.push(`/teacher/lesson`);
  };
  const goReplyPage = () => {
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
  feedbackButton: {
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

const TeacherChatRoomPageView = ({ goLessonListPage, goReplyPage }: TeacherChatRoomPageVAProp) => {
  const classes = useStyles();

  console.log("TeacherChatRoomPageView render");

  return (
    <Page>
      <PageItem>
        <ArrowBackIcon
          style={{ marginRight: "0.5rem", cursor: "pointer" }}
          onClick={() => {
            goLessonListPage();
          }}
        />
        <Text preset="header4_400" color={CustomPalette.grey9}>
          최경민
        </Text>
        {/* studentName */}
      </PageItem>
      <SectionCard>
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
        <Button onClick={goReplyPage} className={classes.feedbackButton}>
          피드백 하기
        </Button>
      </SectionCard>
    </Page>
  );
};

export default TeacherChatRoomPage;
