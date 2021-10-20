/**
- owner: @강경석
- contributor: @강경석
- function: Teacher가 등록하는 페이지
- screen: [P_02]Pro-Auth
- comment: 로그인 후 등록되지 않은 Teacher면 여기로 안내
**/

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Page, Text } from "src/components";
import Button from "@material-ui/core/Button";

import { FieldErrors, useForm, UseFormHandleSubmit, UseFormRegister, UseFormWatch } from "react-hook-form";
import ImgUploadRectangleButton from "src/components/button/ImgUploadRectangleButton";
import ImgUploadRoundButton from "src/components/button/ImgUploadRoundButton";
import VideoUploadButton from "src/components/button/VideoUploadButton";
import SectionCard from "src/components/card/SectionCard";
import InputForm from "src/components/form/InputForm";
import SelectInputForm from "src/components/form/SelectInputForm";
import SubmitForm from "src/components/form/SubmitForm";
import TextareaForm from "src/components/form/TextareaForm";
import { CustomPalette } from "src/theme";
import { useRouter } from "next/router";

interface TeacherRegisterForm {
  name: string;
  phoneNumber: string;
  introductionShort: string;
  introductionDetail: string;
  recommendation: string;
  highlightVideo: string | undefined;
  sns: {
    type: "youtube" | "instagram";
    url: string;
  };
}

const TeacherProfileRegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TeacherRegisterForm>();

  const [profileImg, setProfileImg] = useState<File | undefined>();
  const [profilebgImg, setProfilebgImg] = useState<File | undefined>();
  const [highlightSwingVideo, sethighlightSwingVideo] = useState<File | undefined>();
  let router = useRouter();

  const submitRegisterForm = (data: TeacherRegisterForm) => {
    if ("proHistory-1" in data) {
      // proHistory 여러개일 경우 모아서 처리하는 추가 로직 필요
      console.log("ddddd");
    }
    console.log("submitRegisterForm", data);
    // 서버로 form 데이터 전달하는 로직 추가

    //

    router.push("/teacher/register/finish");
  };

  const TeacherProfileRegisterPageVAProp: TeacherProfileRegisterPageVAProp = {
    profileImg: profileImg,
    profilebgImg: profilebgImg,
    highlightSwingVideo: highlightSwingVideo,
    register: register,
    errors: errors,
    watch: watch,
    handleSubmit: handleSubmit,
    submitRegisterForm: submitRegisterForm,
    uploadHighlightVideo: (video: File | undefined) => sethighlightSwingVideo(video),
    uploadProfileImg: (image: File | undefined) => setProfileImg(image),
    uploadProfilebgImg: (image: File | undefined) => setProfilebgImg(image),
  };

  return <TeacherProfileRegisterPageVAPropView {...TeacherProfileRegisterPageVAProp} />;
};

interface TeacherProfileRegisterPageVAProp {
  profileImg: File | undefined;
  profilebgImg: File | undefined;
  highlightSwingVideo: File | undefined;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  watch: UseFormWatch<any>;
  handleSubmit: UseFormHandleSubmit<any>;
  submitRegisterForm: (data: TeacherRegisterForm) => void;
  uploadHighlightVideo: (video: File | undefined) => void;
  uploadProfileImg: (image: File | undefined) => void;
  uploadProfilebgImg: (image: File | undefined) => void;
}

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  formLayout: {
    display: "flex",
    width: "95%",
    flexDirection: "column",
    "& > h4": {
      marginBlock: "5px",
    },
    marginBlockEnd: "0.25rem",
  },
  careerAddButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  careerAddButton: {
    width: "100px",
    height: "3rem",
    border: "0px",
    maxWidth: "300px",
    marginBlockStart: "0.5rem",
    marginBlockEnd: "1rem",
    background: CustomPalette.grey0,
    color: CustomPalette.grey8,
    borderRadius: "0.75rem",
  },
}));

const TeacherProfileRegisterPageVAPropView = ({
  profileImg,
  profilebgImg,
  highlightSwingVideo,
  register,
  errors,
  watch,
  handleSubmit,
  submitRegisterForm,
  uploadProfileImg,
  uploadProfilebgImg,
  uploadHighlightVideo,
}: TeacherProfileRegisterPageVAProp) => {
  const classes = useStyles();
  const [historyFormGroup, setHistoryFormGroup] = useState<any[]>([
    <SelectInputForm
      key={"proHistory-1"}
      register={register}
      registerKey={"proHistory-1"}
      errors={errors}
      option={["자격증", "경력", "기타"]}
    />,
  ]);

  const addHistoryForm = () => {
    const index = historyFormGroup.length + 1;
    setHistoryFormGroup([
      ...historyFormGroup,
      <SelectInputForm
        key={`proHistory-${index}`}
        register={register}
        registerKey={`proHistory-${index}`}
        errors={errors}
        option={["자격증", "경력", "기타"]}
      />,
    ]);
  };
  return (
    <Page>
      <Text preset="header4_400" color={CustomPalette.grey9}>
        라운드인 프로 등록 신청
      </Text>
      <SectionCard width={"100%"}>
        <div style={{ marginBottom: "0.5rem" }}>
          <Text preset="body_500" color={CustomPalette.grey8}>
            프로필 사진
          </Text>
        </div>
        <ImgUploadRoundButton image={profileImg} uploadimage={uploadProfileImg} />
      </SectionCard>
      <SectionCard width={"100%"}>
        <div style={{ marginBottom: "0.5rem" }}>
          <Text preset="body_500" color={CustomPalette.grey8}>
            배경 사진
          </Text>
        </div>
        <ImgUploadRectangleButton image={profilebgImg} uploadimage={uploadProfilebgImg} />
      </SectionCard>
      <form className={classes.form} onSubmit={handleSubmit(submitRegisterForm)}>
        <SectionCard width={"100%"}>
          <div style={{ marginBottom: "0.5rem" }}>
            <Text preset="body_500" color={CustomPalette.grey8}>
              기본 정보
            </Text>
          </div>
          <InputForm
            required={true}
            register={register}
            registerKey={"teacheName"}
            errors={errors}
            labelText={"이름"}
            placeholder={"홍길동"}
            errorText={"이름을 제대로 입력해주세요."}
            pattern={/^[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣]+$/i}
            style={{ marginBottom: "1rem" }}
          />
          <InputForm
            required={true}
            register={register}
            registerKey={"phoneNumber"}
            errors={errors}
            labelText={"핸드폰 번호"}
            placeholder={"010-1234-5678"}
            errorText={"핸드폰 번호를 제대로 입력해주세요."}
            pattern={/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/}
            style={{ marginBottom: "1rem" }}
          />
          <InputForm
            required={true}
            register={register}
            registerKey={"lessonHistory"}
            errors={errors}
            labelText={"레슨 경력"}
            placeholder={"3년"}
            style={{ marginBottom: "1rem" }}
          />
        </SectionCard>
        <SectionCard width={"100%"}>
          <div style={{ marginBottom: "0.5rem" }}>
            <Text preset="body_500" color={CustomPalette.grey8}>
              골프 관련 이력
            </Text>
          </div>
          {historyFormGroup}
          <div className={classes.careerAddButtonContainer}>
            <Button
              variant="outlined"
              onClick={() => {
                addHistoryForm();
              }}
              className={classes.careerAddButton}
            >
              이력 추가
            </Button>
          </div>
        </SectionCard>
        <SectionCard width={"100%"}>
          <div style={{ marginBottom: "0.5rem" }}>
            <Text preset="body_500" color={CustomPalette.grey8}>
              프로님을 소개해주세요
            </Text>
          </div>
          <TextareaForm
            labelText={"한 줄 소개"}
            register={register}
            registerKey={"introductionShort"}
            errors={errors}
            watch={watch}
            limit={20}
            placeholder={"저는 OOOO한 골퍼입니다. 잘 가르칩니다 ㅎㅎ"}
          />
          <TextareaForm
            labelText={"상세 소개"}
            register={register}
            registerKey={"introductionDetail"}
            errors={errors}
            watch={watch}
            limit={150}
            placeholder={"저는 OOOO한 골퍼입니다. 잘 가르칩니다 ㅎㅎ 자신있는 것은 !~!~!~입니다"}
          />
        </SectionCard>
        <SectionCard width={"100%"}>
          <div style={{ marginBottom: "0.5rem" }}>
            <Text preset="body_500" color={CustomPalette.grey8}>
              레슨 요청사항
            </Text>
          </div>
          <TextareaForm
            register={register}
            registerKey={"recommendation"}
            errors={errors}
            watch={watch}
            limit={150}
            placeholder={"키와 몸무게, 왼손잡이 or 오른손잡이, 성별등을 알려주셔야 개인별 맞춤 답변이 가능합니다."}
          />
        </SectionCard>
        <SectionCard width={"100%"}>
          <div style={{ marginBottom: "0.5rem" }}>
            <Text preset="body_500" color={CustomPalette.grey8}>
              스윙 하이라이트 영상 등록
            </Text>
          </div>
          <VideoUploadButton swingType={"highlight"} video={highlightSwingVideo} uploadVideo={uploadHighlightVideo} />
        </SectionCard>
        <SectionCard width={"100%"}>
          <div style={{ marginBottom: "0.5rem" }}>
            <Text preset="body_500" color={CustomPalette.grey8}>
              SNS
            </Text>
          </div>
          <InputForm
            register={register}
            registerKey={"youtube"}
            defaultValue={"youtube.com/channel/"}
            errors={errors}
            labelText={"유튜브"}
          />
          <InputForm
            register={register}
            registerKey={"instagram"}
            defaultValue={"instagram.com/"}
            errors={errors}
            labelText={"인스타그램"}
          />
        </SectionCard>
        <SubmitForm text={"프로 등록 신청"} />
      </form>
    </Page>
  );
};

export default TeacherProfileRegisterPage;
