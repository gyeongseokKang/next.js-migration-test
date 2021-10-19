/**
- owner: @강경석
- contributor: @강경석
- function: Teacher의 레슨 리스트를 보는 페이지
- screen: [P_01]Pro-LessonList
- comment: 로그인 후 등록된 Teacher면 여기로!!
**/

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LandingPage from "src/components/landingPage/LandingPage";
import { Lesson, getLessonList } from "src/service/teacher/getLessonList";
import { useRouter } from "next/router";
import LessonStatusCard from "src/widget/LessonStatusCard";
import { CustomPalette } from "src/theme";
import { Page, Text, Icon } from "src/components";

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
    lessonSummaryList: lessonList,
  };
  return <TeacherLessonPageView {...TeacherLessonPageVAProp} />;
};

interface TeacherLessonPageVAProp {
  lessonSummaryList: Lesson[] | undefined;
}

const useStyles = makeStyles((theme) => ({
  LessonListPage: {
    display: "flex",
    flexDirection: "column",
  },
  lessonCountLayout: {
    width: "100%",
    marginTop: "0.75rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLayout: {
    backgroundColor: CustomPalette.white,
    display: "flex",
    flexDirection: "column",
  },
  lessonListLayout: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "scroll",
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#2E2E2E",
      outline: "1px solid #E6E6FF",
      borderRadius: "20px",
    },
  },
}));

const TeacherLessonPageView = ({ lessonSummaryList }: TeacherLessonPageVAProp) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Page className={classes.LessonListPage}>
      <div className={classes.headerLayout}>
        <Text preset="header4_400" color={CustomPalette.grey9}>
          내 지난 레슨목록
        </Text>
      </div>
      <div className={classes.lessonCountLayout}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Text preset="body_300" color={CustomPalette.grey6}>
            총
          </Text>
          <Text preset="body_500" color={CustomPalette.primary5}>
            {` ${lessonSummaryList ? lessonSummaryList.length : 0}`}
          </Text>
          <Text preset="body_300" color={CustomPalette.grey6}>
            개
          </Text>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Text preset="body_300" color={CustomPalette.grey6}>
            모든 레슨
          </Text>
          <Icon icon="expand" size={18} />
          {/* #TODO: filter 로직 적용 */}
        </div>
      </div>
      <div className={classes.lessonListLayout}>
        {lessonSummaryList ? (
          lessonSummaryList.map((item) => {
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
      </div>
    </Page>
  );
};
export default TeacherLessonPage;
