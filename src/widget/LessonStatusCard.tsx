import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import VideocamIcon from "@mui/icons-material/Videocam";
import SubjectIcon from "@mui/icons-material/Subject";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import ImgWithSupportError from "src/components/image/ImgWithSupportError";
import { CustomPalette } from "src/theme";

const useStyles = makeStyles((theme) => ({
  LessonStatusCard: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: CustomPalette.white,
    borderRadius: "15px",
    border: "1px solid",
    borderColor: CustomPalette.grey2,
    padding: "0.25rem",
    margin: "0.25rem",
  },
  teacherImg: {
    borderRadius: "100%",
    margin: "0.5rem",
    width: "50px",
    height: "50px",
  },
  headerLayout: {
    display: "flex",
    alignItems: "flex-end",
    "& > span": {
      paddingInlineStart: "0.2rem",
      fontSize: "0.8rem",
      color: CustomPalette.grey5,
    },
  },
  contentLayout: {
    width: "100%",
    padding: "0.5rem",
  },
  feedbackContent: {
    fontSize: "0.8rem",
    color: CustomPalette.grey6,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    paddingBlockStart: "0.25rem",
  },
  statusLayout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBlockStart: "0.5rem",
  },
  statusChip: {
    fontSize: "0.75rem",
    display: "flex",
    alignItems: "center",
  },
}));

interface LessonStatusCardProp {
  latestFeedbackDate: string;
  connectName: string;
  latestFeedbackContent: string;
  lessonTypeText: string;
  responseStatusText: string;
  onCardClick?: () => void;
}

const LessonStatusCard = ({
  latestFeedbackDate,
  connectName,
  latestFeedbackContent,
  lessonTypeText,
  responseStatusText,
  onCardClick,
}: LessonStatusCardProp) => {
  const classes = useStyles();

  return (
    <div
      className={classes.LessonStatusCard}
      onClick={() => {
        onCardClick && onCardClick();
      }}
    >
      <ImgWithSupportError className={classes.teacherImg} imgSrc={""} />
      <div className={classes.contentLayout}>
        <div className={classes.headerLayout}>
          {connectName}
          <span>{latestFeedbackDate}</span>
        </div>
        <div className={classes.feedbackContent}>{latestFeedbackContent}</div>
        <div className={classes.statusLayout}>
          <Stack direction="row" spacing={1}>
            <StatusResponseChip responseStatus={responseStatusText} />
            <StatusLessonTypeChip lessonType={lessonTypeText} />
          </Stack>
        </div>
      </div>
    </div>
  );
};

interface StatusLessonTypeChipProp {
  lessonType: string;
  icon?: boolean;
}

export const StatusLessonTypeChip = ({ lessonType, icon = true }: StatusLessonTypeChipProp) => {
  if (lessonType === "letter") {
    return (
      <div
        style={{
          fontSize: "0.75rem",
          display: "flex",
          alignItems: "center",
          backgroundColor: CustomPalette.TealLight,
          color: CustomPalette.TealDarken,
          borderRadius: "5px",
          paddingInline: "0.2rem",
        }}
      >
        {icon && <SubjectIcon />}
        문자레슨
      </div>
    );
  } else {
    return (
      <div
        style={{
          fontSize: "0.75rem",
          display: "flex",
          alignItems: "center",
          backgroundColor: CustomPalette.BlueLight,
          color: CustomPalette.BlueDarken,
          borderRadius: "5px",
          paddingInline: "0.2rem",
        }}
      >
        {icon && <VideocamIcon />}
        영상레슨
      </div>
    );
  }
};

export const StatusResponseChip = ({ responseStatus }: { responseStatus: string }) => {
  if (responseStatus === "complete") {
    return (
      <div
        style={{
          fontSize: "0.75rem",
          display: "flex",
          alignItems: "center",
          backgroundColor: CustomPalette.primary5,
          color: CustomPalette.grey0,
          borderRadius: "5px",
          paddingInline: "0.2rem",
        }}
      >
        <DoneIcon />
        답변완료
      </div>
    );
  } else {
    return (
      <div
        style={{
          fontSize: "0.75rem",
          display: "flex",
          alignItems: "center",
          backgroundColor: CustomPalette.primary1,
          color: CustomPalette.grey6,
          borderRadius: "5px",
          paddingInline: "0.2rem",
        }}
      >
        <HourglassEmptyIcon fontSize={"small"} />
        답변대기
      </div>
    );
  }
};

export default LessonStatusCard;
