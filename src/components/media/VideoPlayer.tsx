import React from "react";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import { CustomPalette, CustomColor } from "@src/theme";

const useStyles = makeStyles((theme) => ({
  videoLayout: {
    width: "90%",
    margin: "auto",
  },
  videoPlayer: {
    "& > video": {
      borderRadius: "15px",
    },
  },
}));

interface VideoPlayerProp {
  url: string;
  controls?: boolean;
  autoPlay?: boolean;
  width?: string;
}

const VideoPlayer = ({ url, controls = true, autoPlay = false, width = "100%" }: VideoPlayerProp) => {
  const classes = useStyles();
  return (
    <div className={classes.videoLayout}>
      <ReactPlayer
        url={url}
        className={classes.videoPlayer}
        controls={controls}
        playing={autoPlay}
        width={width}
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
