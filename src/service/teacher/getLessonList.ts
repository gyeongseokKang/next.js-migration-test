import axios from "axios";
import { SERVER_URL, serviceOnOff, sleep } from "../serviceSetting";

export interface Lesson {
  userName: string;
  userImg: string;
  responseStatus: "request" | "progress" | "complete";
  lessonType: "letter" | "video";
  latestFeedbackDate: string;
  latestFeedbackContent: string;
}

interface LessonDO {
  lesson_id: string;
  lesson_type: "text" | "video";
  student: {
    student_id: string;
    student_name: string;
  };
  teacher: {
    teacher_id: string;
    teacher_name: string;
  };
  last_question: {
    question_id: string;
    timestamp: string;
    thumbnail_url: string;
    message: string;
    is_answered: boolean;
    answer_id: string;
  };
}

interface LessonListDO {
  status: string;
  num_unanswered: number;
  lesson_list: LessonDO[];
}

export async function getLessonList(): Promise<Lesson[] | undefined> {
  let result: Lesson[] | undefined = undefined;

  if (serviceOnOff === false) {
    result = changeDOtoProp(test);
    await sleep(2000);
    return result;
  }

  let lessonListDO: LessonListDO | undefined = undefined;
  let response = await axios({
    method: "get",
    url: `${SERVER_URL}/lessons`,
    headers: {
      Authorization: "userAuthorizationKey",
    },
  });

  if (response.status.toString() === "ok") {
    lessonListDO = response.data.result;
    if (lessonListDO) {
      result = changeDOtoProp(lessonListDO.lesson_list);
    }
  }

  return result;
}

const changeDOtoProp = (DO: LessonDO[]) => {
  let prop: Lesson[] = [];
  DO.forEach((item: LessonDO) => {
    prop.push({
      userName: item.lesson_id,
      userImg: item.student.student_name,
      responseStatus: item.last_question.is_answered ? "complete" : "progress",
      lessonType: item.lesson_type === "text" ? "letter" : "video",
      latestFeedbackDate: item.last_question.timestamp,
      latestFeedbackContent: item.last_question.message,
    });
  });

  return prop;
};

const testLessonList = {
  status: "ok",
  num_unanswered: 1,
  lesson_list: [
    {
      lesson_id: "1",
      lesson_type: "text",
      student: {
        student_id: "4",
        student_name: "jaemoon_sim",
      },
      teacher: {
        teacher_id: "5",
        teacher_name: "심재문",
      },
      last_question: {
        question_id: "1",
        timestamp: "2021-09-25T00:00:00Z",
        thumbnail_url: "undefined",
        message: "이걸 알려줘라 ㅁㄴㅇㄹㅁㄴㅇㄹ",
        is_answered: true,
        answer_id: "2",
      },
    },
    {
      lesson_id: "2",
      lesson_type: "video",
      student: {
        student_id: "0",
        student_name: "",
      },
      teacher: {
        teacher_id: "6",
        teacher_name: "유원상",
      },
      last_question: {
        question_id: "3",
        timestamp: "2021-09-25T00:02:00Z",
        thumbnail_url: "undefined",
        message: "너도 나한테 알려줘라",
        is_answered: false,
        answer_id: "0",
      },
    },
  ],
};

const test: LessonDO[] = [
  {
    lesson_id: "1",
    lesson_type: "text",
    student: {
      student_id: "4",
      student_name: "jaemoon_sim",
    },
    teacher: {
      teacher_id: "5",
      teacher_name: "심재문",
    },
    last_question: {
      question_id: "1",
      timestamp: "2021-09-25T00:00:00Z",
      thumbnail_url: "undefined",
      message: "이걸 알려줘라 ㅁㄴㅇㄹㅁㄴㅇㄹ",
      is_answered: true,
      answer_id: "2",
    },
  },
  {
    lesson_id: "2",
    lesson_type: "video",
    student: {
      student_id: "0",
      student_name: "",
    },
    teacher: {
      teacher_id: "6",
      teacher_name: "유원상",
    },
    last_question: {
      question_id: "3",
      timestamp: "2021-09-25T00:02:00Z",
      thumbnail_url: "undefined",
      message: "너도 나한테 알려줘라",
      is_answered: false,
      answer_id: "0",
    },
  },
  {
    lesson_id: "2",
    lesson_type: "video",
    student: {
      student_id: "0",
      student_name: "",
    },
    teacher: {
      teacher_id: "6",
      teacher_name: "유원상",
    },
    last_question: {
      question_id: "3",
      timestamp: "2021-09-25T00:02:00Z",
      thumbnail_url: "undefined",
      message: "너도 나한테 알려줘라",
      is_answered: false,
      answer_id: "0",
    },
  },
  {
    lesson_id: "2",
    lesson_type: "video",
    student: {
      student_id: "0",
      student_name: "",
    },
    teacher: {
      teacher_id: "6",
      teacher_name: "유원상",
    },
    last_question: {
      question_id: "3",
      timestamp: "2021-09-25T00:02:00Z",
      thumbnail_url: "undefined",
      message: "너도 나한테 알려줘라",
      is_answered: false,
      answer_id: "0",
    },
  },
];
