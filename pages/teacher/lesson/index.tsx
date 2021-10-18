/**
- owner: @강경석
- contributor: @강경석
- function: Teacher의 레슨 리스트를 보는 페이지
- screen: [P_01]Pro-LessonList
- comment: 로그인 후 등록된 Teacher면 여기로!!
**/

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SectionCard from "src/components/card/SectionCard";
import LandingPage from "src/components/landingPage/LandingPage";
import Page from "src/components/page/Page";
import { Lesson, getLessonList } from "src/service/teacher/getLessonList";
import { useRouter } from "next/router";
import LessonStatusCard from "src/widget/LessonStatusCard";

const TeacherLessonPage = () => {
  const [lessonList, setLessonList] = useState<Lesson[]>();

  useEffect(() => {
    const loadLessonList = async () => {
      const response = await getLessonList();
      if (response) setLessonList(response);
    };
    loadLessonList();
  }, []);

  const TeacherLessonPageVAProp: TeacherLessonPageVAProp = {
    lessonList: lessonList,
  };
  return <TeacherLessonPageView {...TeacherLessonPageVAProp} />;
};

interface TeacherLessonPageVAProp {
  lessonList: Lesson[] | undefined;
}

const useStyles = makeStyles((theme) => ({
  lessonCountLayout: {
    width: "90%",
    "& > span": {
      color: "#25D15C",
    },
  },

  lessonListLayout: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F5F6F8",
    overflowY: "scroll",
  },
}));

const TeacherLessonPageView = ({ lessonList }: TeacherLessonPageVAProp) => {
  const classes = useStyles();
  const router = useRouter();
  console.log("TeacherLessonPageView render");

  return (
    <Page>
      <h3>레슨 목록</h3>
      <SectionCard width={"95%"}>
        <div className={classes.lessonCountLayout}>
          총 <span>{lessonList ? lessonList.length : "-"}</span>개
        </div>
      </SectionCard>
      <SectionCard width={"95%"}>
        {lessonList ? (
          lessonList.map((item) => {
            return (
              <LessonStatusCard
                key={`${item.userName}`}
                latestFeedbackDate={item.latestFeedbackDate}
                connectName={item.userName}
                latestFeedbackContent={item.latestFeedbackContent}
                lessonTypeText={item.lessonType}
                responseStatusText={item.responseStatus}
                onCardClick={() => {
                  router.push(`chat/${item.userName}`);
                }}
              />
            );
          })
        ) : (
          <LandingPage landingTitle={"레슨 목록을 가져오는 중입니다..."} />
        )}
      </SectionCard>
    </Page>
  );
};

export default TeacherLessonPage;
