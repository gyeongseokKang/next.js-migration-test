import React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import { StatusLessonTypeChip } from "./LessonStatusCard";

import clsx from "clsx";
import VideoPlayer from "src/components/media/VideoPlayer";
import { CustomColor } from "src/theme";

const StyledChatItem = styled("div")({
  width: "100%",

  alignItems: "center",
});

const useStyles = makeStyles((theme) => ({
  dateLayout: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    width: "100%",
    margin: "1rem 0.25rem 0.5rem 0.25rem",
    fontSize: "0.875rem",
    "& > div": {
      marginInlineStart: "0.25rem",
    },
  },
  videoLayout: {
    display: "flex",
    flexDirection: "column",
    "& > div": {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  textLayout: {
    display: "flex",
  },
  time: {
    display: "flex",
    fontSize: "0.75rem",
    textAlign: "end",
    alignItems: "end",
    margin: "0.25rem 0.25rem 0.5rem 0.25rem",
    color: CustomColor.chat.time,
  },
  chatContent: {
    backgroundColor: CustomColor.chat.me,
    borderRadius: "8px",
    padding: "0.5rem",
    margin: "0.5rem",
    fontSize: "0.875rem",
  },
  you: {
    flexDirection: "row-reverse",
  },
  youVideo: {
    "& > div": {
      display: "flex",
      justifyContent: "flex-start",
    },
  },
  youContent: {
    backgroundColor: CustomColor.chat.you,
  },
}));

interface ChatItemProp {
  className?: string;
  chatType: "me" | "you";
  lessonType: "letter" | "video";
  videoList?: string[];
}

const ChatItem = ({ className, lessonType, chatType, videoList }: ChatItemProp) => {
  const classes = useStyles();

  return (
    <StyledChatItem className={className}>
      <div className={classes.dateLayout}>
        2021.09.24 (수)
        <div>{<StatusLessonTypeChip lessonType={lessonType} icon={false} />}</div>
      </div>
      <div className={clsx(classes.videoLayout, { [classes.youVideo]: chatType === "you" })}>
        {videoList &&
          videoList.map((video) => {
            return <VideoPlayer url={video} width={"80%"} />;
          })}
      </div>
      <div className={clsx(classes.textLayout, { [classes.you]: chatType === "you" })}>
        <p className={classes.time}>
          9.15(수)
          <br />
          15:34
        </p>
        <p className={clsx(classes.chatContent, { [classes.youContent]: chatType === "you" })}>
          리버스 피봇팅 관련 피드백을 받고 연습을 계속 했는데, 여전히 공이 잘 안맞아요. 어떻게 해야 하나요?
        </p>
      </div>
    </StyledChatItem>
  );
};

export default ChatItem;
