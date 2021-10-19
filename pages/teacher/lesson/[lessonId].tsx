/**
- owner: @강경석
- contributor: @강경석
- function: 레슨에 답변하는 페이지
- screen: [P_03]Pro-NewLesson (문자 레슨)
- comment: lesson type에 따라 나오는 하위 컴포넌트 다름
**/

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FieldErrors, useForm, UseFormHandleSubmit, UseFormRegister, UseFormWatch } from "react-hook-form";
import { Page, Text } from "src/components";
import VideoUploadButton from "src/components/button/VideoUploadButton";
import SectionCard from "src/components/card/SectionCard";
import SubmitForm from "src/components/form/SubmitForm";
import TextareaForm from "src/components/form/TextareaForm";
import VideoPlayer from "src/components/media/VideoPlayer";
import HorizontalSlider from "src/components/slider/HorizontalSlider";
import { getLessonList } from "src/service/teacher/getLessonList";
import { CustomPalette } from "src/theme";

interface LessonReplyForm {
  replyLetter: string;
  replyComment: string;
}

const TeacherLessonReplyPage = () => {
  // let { lessonId } = useParams();
  // console.log(lessonId);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LessonReplyForm>();
  const [highlightSwingVideo, sethighlightSwingVideo] = useState<File | undefined>();

  useEffect(() => {
    const loadLessonList = async () => {
      const response = await getLessonList();
    };
    loadLessonList();
  }, []);

  const submitReplyForm = (data: LessonReplyForm) => {
    if ("proHistory-1" in data) {
      // proHistory 여러개일 경우 모아서 처리하는 추가 로직 필요
      console.log("ddddd");
    }
    console.log("submitReplyForm", data);
    // 서버로 form 데이터 전달하는 로직 추가

    //
  };

  const TeacherLessonReplyPageVAProp: TeacherLessonReplyPageVAProp = {
    studentName: "최경민",
    studentInfo:
      "구력 10년 / 핸디캡 20 / 7번 아이언 비거리 140m / 드라이버 비거리 200m / 구질 슬라이스 / 주 2회 연습 / 월 라운딩 2회 / 허리를 다친적이 있습니다",
    lessonType: "letter",
    question:
      "안녕하세요  프로님. 드라이버가 자꾸 슬라이스가 나는데 왜그럴까요? 이러이러한 조언 부탁드립니다. 안녕하세요 이용희 프로님. 이러이러한 부분이 고민입니다. 이러이러한 조언 부탁드립니다. 안녕하세요 이용희 프로님. 이러이러한 부분이 고민입니다. 이러이러한 조언 부탁드립니다.",
    highlightSwingVideo: highlightSwingVideo,
    uploadHighlightVideo: (video: File | undefined) => sethighlightSwingVideo(video),
    register: register,
    errors: errors,
    watch: watch,
    handleSubmit: handleSubmit,
    submitReplyForm: submitReplyForm,
  };
  return <TeacherLessonReplyPageView {...TeacherLessonReplyPageVAProp} />;
};

interface TeacherLessonReplyPageVAProp {
  studentName: string;
  studentInfo: string;
  lessonType: "video" | "letter";
  question: string;
  highlightSwingVideo: File | undefined;
  uploadHighlightVideo: (video: File | undefined) => void;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  watch: UseFormWatch<any>;
  handleSubmit: UseFormHandleSubmit<any>;
  submitReplyForm: (data: LessonReplyForm) => void;
}

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: CustomPalette.grey0,
  },
}));

const TeacherLessonReplyPageView = ({
  studentName,
  studentInfo,
  lessonType,
  question,
  highlightSwingVideo,
  uploadHighlightVideo,
  register,
  errors,
  watch,
  handleSubmit,
  submitReplyForm,
}: TeacherLessonReplyPageVAProp) => {
  const classes = useStyles();
  console.log("TeacherLessonReplyPageView render");

  return (
    <Page>
      <div style={{ marginTop: "1rem", display: "flex", flexDirection: "row" }}>
        <Text preset="header4_500" color={CustomPalette.grey9}>
          {studentName}
        </Text>
        <Text preset="header4_300" color={CustomPalette.grey9}>
          님의 문자 레슨 요청
        </Text>
      </div>
      <SectionCard width={"100%"}>
        <div style={{ marginBottom: "0.5rem" }}>
          <Text preset="body_500" color={CustomPalette.grey8}>
            스윙 영상과 질문
          </Text>
        </div>
        <HorizontalSlider>
          <VideoPlayer
            url={"https://roundins3.s3.ap-northeast-2.amazonaws.com/tmpimages/694c1ad5-4b1f-4714-8fee-b1aac001a3f2.mp4"}
          />
          <VideoPlayer
            url={"https://roundins3.s3.ap-northeast-2.amazonaws.com/tmpimages/694c1ad5-4b1f-4714-8fee-b1aac001a3f2.mp4"}
          />
        </HorizontalSlider>
        <div style={{ marginTop: "0.5rem" }}>
          <Text preset="small_300" color={CustomPalette.grey8}>
            {question}
          </Text>
        </div>
      </SectionCard>
      <SectionCard width={"100%"}>
        <div style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
          <Text preset="body_500" color={CustomPalette.grey8}>
            {`${studentName}님의 골프 특징`}
          </Text>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <Text preset="small_300" color={CustomPalette.grey8}>
            {studentInfo}
          </Text>
        </div>
      </SectionCard>
      <form className={classes.form} onSubmit={handleSubmit(submitReplyForm)}>
        {lessonType === "letter" && (
          <SectionCard width={"100%"}>
            <div style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
              <Text preset="body_500" color={CustomPalette.grey8}>
                문자 답변
              </Text>
            </div>
            <TextareaForm
              register={register}
              registerKey={"replyLetter"}
              errors={errors}
              watch={watch}
              limit={300}
              placeholder={
                "예시) 문자 레슨은 회원의 스윙에서 보이는 문제와 원인, 해결방법이 포함된 글을 남겨주는 것입니다. 해결방법을 프로님이 기존에 업로드한 적 있는 유튜브, 인스타그램 게시글로 제시하는 것도 효과적인 방법입니다."
              }
            />
          </SectionCard>
        )}
        {lessonType !== "video" && (
          <>
            <SectionCard width={"100%"}>
              <div style={{ marginTop: "2rem", marginBottom: "0.5rem" }}>
                <Text preset="body_500" color={CustomPalette.grey8}>
                  영상 답변
                </Text>
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <VideoUploadButton swingType={"reply"} video={highlightSwingVideo} uploadVideo={uploadHighlightVideo} />
                <VideoUploadButton swingType={"reply"} video={highlightSwingVideo} uploadVideo={uploadHighlightVideo} />
              </div>
            </SectionCard>
            <SectionCard width={"100%"}>
              <div style={{ marginBottom: "0.5rem" }}>
                <Text preset="body_500" color={CustomPalette.grey8}>
                  코멘트
                </Text>
              </div>
              <TextareaForm
                register={register}
                registerKey={"replayComment"}
                errors={errors}
                watch={watch}
                limit={300}
                placeholder={
                  "예시) 영상 레슨은 2분 가량의 맞춤형 영상을 찍어서 제공해주시면 됩니다. 추가로 남겨주실 코멘트가 있다면 함께 적어주세요."
                }
              />
            </SectionCard>
          </>
        )}
        <SubmitForm text={"답변 전송"} />
      </form>
    </Page>
  );
};

export default TeacherLessonReplyPage;
