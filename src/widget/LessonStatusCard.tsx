import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import { Text, Icon } from "src/components";
import ImgWithSupportError from "src/components/image/ImgWithSupportError";
import { CustomPalette } from "src/theme";

const useStyles = makeStyles((theme) => ({
  LessonStatusCard: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    borderBottom: "1px solid",
    borderBottomColor: CustomPalette.grey2,
  },
  teacherImg: {
    alignSelf: "flex-start",
    marginRight: "0.75rem",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "100%",
  },
  headerLayout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  contentContainer: {
    width: "100%",
  },
  feedbackContent: {
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
      <div className={classes.contentContainer}>
        <div className={classes.headerLayout}>
          <div style={{ marginRight: "0.25rem" }}>
            <Text preset="body_500" color={CustomPalette.grey8}>{`${connectName} 프로 `}</Text>
          </div>
          <Text preset="caption_300" color={CustomPalette.grey6}>
            {latestFeedbackDate}
          </Text>
        </div>
        <div className={classes.feedbackContent}>
          <Text preset="small_300" color={CustomPalette.grey6}>
            {latestFeedbackContent}
          </Text>
        </div>
        <div className={classes.statusLayout}>
          <Stack direction="row" spacing={1}>
            <StatusResponseChip responseStatus={responseStatusText} />
            <StatusLessonTypeChip lessonType={lessonTypeText} />
          </Stack>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div
  //     className={classes.LessonStatusCard}
  //     onClick={() => {
  //       onCardClick && onCardClick();
  //     }}
  //   >
  //     <ImgWithSupportError className={classes.teacherImg} imgSrc={""} />
  //     <div className={classes.contentLayout}>
  //       <div className={classes.headerLayout}>
  //         {connectName}
  //         <span>{latestFeedbackDate}</span>
  //       </div>
  //       <div className={classes.feedbackContent}>{latestFeedbackContent}</div>
  //       <div className={classes.statusLayout}>
  //         <Stack direction="row" spacing={1}>
  //           <StatusResponseChip responseStatus={responseStatusText} />
  //           <StatusLessonTypeChip lessonType={lessonTypeText} />
  //         </Stack>
  //       </div>
  //     </div>
  //   </div>
  // );
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
          height: "1.5rem",
          display: "flex",
          alignItems: "center",
          backgroundColor: CustomPalette.TealLight,
          borderRadius: "0.25rem",
          paddingInline: "0.25rem",
        }}
      >
        <Text preset="caption_400" color={CustomPalette.TealDarken}>
          문자레슨
        </Text>
      </div>
    );
  } else {
    return (
      <div
        style={{
          height: "1.5rem",
          display: "flex",
          alignItems: "center",
          backgroundColor: CustomPalette.BlueLight,
          borderRadius: "0.25rem",
          paddingInline: "0.25rem",
        }}
      >
        <Text preset="caption_400" color={CustomPalette.BlueDarken}>
          영상레슨
        </Text>
      </div>
    );
  }
};

export const StatusResponseChip = ({ responseStatus }: { responseStatus: string }) => {
  if (responseStatus === "complete") {
    return (
      <div
        style={{
          height: "1.5rem",
          display: "flex",
          alignItems: "center",
          backgroundColor: CustomPalette.primary5,
          borderRadius: "0.25rem",
          paddingInline: "0.25rem",
        }}
      >
        <DoneIcon style={{ width: "1rem", height: "1rem", color: CustomPalette.white }} />
        <Text preset="caption_400" color={CustomPalette.white}>
          답변완료
        </Text>
      </div>
    );
  } else {
    return (
      <div
        style={{
          height: "1.5rem",
          display: "flex",
          alignItems: "center",
          backgroundColor: CustomPalette.grey1,
          borderRadius: "0.25rem",
          paddingInline: "0.25rem",
        }}
      >
        <Icon icon="more" size={12} />
        <Text preset="caption_400" color={CustomPalette.grey6}>
          답변대기
        </Text>
      </div>
    );
  }
};

export default LessonStatusCard;
