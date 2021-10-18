import React from "react";
import { Switch, RouteComponentProps, Route, Redirect } from "react-router-dom";
import TeacherLoginPage from "@src/screens/TeacherLoginPage";
import { teacherLoginState } from "@src/stores/TeacherStore";
import { useRecoilValue } from "recoil";

const TeacherPageRouter: React.FC<RouteComponentProps> = (props) => {
  const teacherLogin = useRecoilValue(teacherLoginState);
  const TeacherProfileRegisterPage = React.lazy(() => import("@src/screens/TeacherProfileRegisterPage"));
  const TeacherProfileWaitPage = React.lazy(() => import("@src/screens/TeacherProfileWaitPage"));
  const TeacherProfileModifyPage = React.lazy(() => import("@src/screens/TeacherProfileModifyPage"));
  const TeacherLessonPage = React.lazy(() => import("@src/screens/TeacherLessonPage"));
  const TeacherLessonReplyPage = React.lazy(() => import("@src/screens/TeacherLessonReplyPage"));
  const TeacherChatRoomPage = React.lazy(() => import("@src/screens/TeacherChatRoomPage"));

  return (
    <Switch>
      <Route path="/teacher" exact component={TeacherLoginPage} />
      <Route path={"/teacher/login"} component={TeacherLoginPage} />
      <Route path={"/teacher/profile/register"} component={TeacherProfileRegisterPage} />
      <Route path={"/teacher/profile/wait"} component={TeacherProfileWaitPage} />
      <Route path={"/teacher/profile/modify"} component={TeacherProfileModifyPage} />
      <Route path={"/teacher/lesson/:lessonId"} component={TeacherLessonReplyPage} />
      <Route path={"/teacher/lesson"} exact component={TeacherLessonPage} />
      <Route path={"/teacher/chat/:studentId"} component={TeacherChatRoomPage} />
      {teacherLogin.loginIn ? (
        <Route path={"/teacher/lesson"} component={TeacherLessonPage} />
      ) : (
        <Redirect to={{ pathname: "/teacher/login", state: { from: props.location } }} />
      )}
    </Switch>
  );
};

export default TeacherPageRouter;
