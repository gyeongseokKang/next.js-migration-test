import axios from "axios";
import { serviceOnOff, sleep, SERVER_URL } from "../serviceSetting";

export interface TeacherProfile {
  teacherId: string;
  teacherPhoneNumber: string;
  teacherName: string;
  teacherImg: string;
  teacherbgImg: string;
  careerNumber: string;
  introductionShort: string;
  introductionDetail: string;
  certificateList: string[];
  swingVideo: string;
  requestLessonInfo: string;
  snsList: { type: string; url: string }[];
}

export interface TeacherProfileDO {
  status: string;
  result: {
    id: string;
    name: string;
    profile_image: string;
    short_description: string;
    long_description: string;
    sns_list: { service: string; title: string; link: string }[];
    certificate_list: { title: string }[];
    lesson_career_list: {
      start: string;
      end: string;
      title: string;
    }[];
    golfer_career_list: {
      start: string;
      end: string;
      title: string;
    }[];
    etc_career_list: [];
    swing_highlight_list: {
      link: string;
    }[];
    recommendation_list: {
      recommender_name: string;
      recommender_image: string;
      text: string;
    }[];
    review_list: { student_name: string; text: string }[];
    availability_text: boolean;
    availability_video: boolean;
  };
}

export async function getTeacherProfile(
  teacherId: string,
): Promise<TeacherProfile | undefined> {
  let result: TeacherProfile | undefined = undefined;

  if (serviceOnOff === false) {
    result = changeDOtoProp(test);
    console.log(result);
    await sleep(2000);
    return result;
  }

  let techerProfileDO: TeacherProfileDO | undefined = undefined;
  let response = await axios({
    method: "get",
    url: `${SERVER_URL}/teachers/${teacherId}`,
    headers: {
      Authorization: "userAuthorizationKey",
    },
  });

  if (response.status.toString() === "ok") {
    techerProfileDO = response.data.result;
    if (techerProfileDO) {
      result = changeDOtoProp(techerProfileDO);
    }
  }

  return result;
}

const changeDOtoProp = (DO: TeacherProfileDO) => {
  const profileDO = DO.result;
  let prop: TeacherProfile = {
    teacherId: profileDO.id,
    teacherPhoneNumber: "010-0000-0000",
    teacherName: profileDO.name,
    teacherImg: profileDO.profile_image,
    teacherbgImg: "https://picsum.photos/200/100",
    careerNumber: "3(test)",
    introductionShort: profileDO.short_description,
    introductionDetail: profileDO.long_description,
    certificateList: profileDO.certificate_list.map((item) => item.title),
    swingVideo: profileDO.swing_highlight_list.map((item) => item.link)[0],
    requestLessonInfo: "?????? ?????????, ????????? ??????????????? (test)",
    snsList: profileDO.sns_list.map((item) => {
      return { type: item.service, url: item.link };
    }),
  };

  return prop;
};
const test: TeacherProfileDO = {
  status: "ok",
  result: {
    id: "5",
    name: "?????????",
    profile_image: "https://picsum.photos/200/100",
    short_description: "?????????. ?????? ??????.",
    long_description: "?????????. ?????? ??????.",
    sns_list: [
      {
        service: "instagram",
        title: "????????????",
        link: "https://www.instagram.com/jennierubyjane/",
      },
      {
        service: "youtube",
        title: "????????????",
        link: "https://www.youtube.com/watch?v=erYPvNbc_mc",
      },
    ],
    certificate_list: [
      {
        title: "??????????????????",
      },
    ],
    lesson_career_list: [
      {
        start: "2018-09-21T00:00:00+09:00",
        end: "2019-09-21T00:00:00+09:00",
        title: "??????????????????",
      },
    ],
    golfer_career_list: [
      {
        start: "2021-09-21T00:00:00+09:00",
        end: "2021-09-21T00:00:00+09:00",
        title: "????????????",
      },
    ],
    etc_career_list: [],
    swing_highlight_list: [
      {
        link: "https://youtu.be/5Peo-ivmupE",
      },
    ],
    recommendation_list: [
      {
        recommender_name: "?????????????????????1",
        recommender_image: "https://picsum.photos/200/100",
        text: "???????????????.",
      },
    ],
    review_list: [
      {
        student_name: "jaemoon_sim",
        text: "??????????????????.",
      },
    ],
    availability_text: true,
    availability_video: true,
  },
};
