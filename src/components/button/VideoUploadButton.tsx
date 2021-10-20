import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import { useEffect } from "react";
import { CustomColor, CustomPalette } from "src/theme";

const useStyles = makeStyles((theme) => ({
  VideoUploadButton: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "9rem",
  },
  VideoUploadButtonSmall: {
    marginRight: "0.75rem",
    width: "7rem",
    height: "7rem",
  },
  video: {
    width: "100%",
    height: "100%",
    borderRadius: "0.75rem",
  },
  addBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: "0.75rem",
    color: CustomColor.button.grey,
    backgroundColor: CustomPalette.grey1,
  },
  clearVideoIcon: {
    float: "right",
    position: "relative",
    left: "-20px",
    backgroundColor: "white",
    border: "1px solid",
    borderRadius: "100%",
    fontSize: "1.25rem",
    margin: "0px 1rem 1rem 0px",
  },
}));

interface VideoUploadButtonProp {
  swingType: "Front" | "Side" | "highlight" | "reply";
  video: File | undefined;
  uploadVideo: (video: File | undefined) => void;
}

const VideoUploadButton = ({ swingType, video, uploadVideo }: VideoUploadButtonProp) => {
  const classes = useStyles();
  const [uploadedVideo, setUploadedVideo] = useState<string>("");

  useEffect(() => {
    if (video === undefined) return setUploadedVideo("");
    const videoURL = URL.createObjectURL(video);
    if (videoURL) setUploadedVideo(videoURL);
  }, [video]);

  const clearUploadVideo = () => {
    uploadVideo(undefined);
  };

  if (swingType === "highlight")
    return (
      <div className={classes.VideoUploadButton}>
        {uploadedVideo.length > 0 ? (
          <>
            <video className={classes.video}>
              <source src={uploadedVideo} />
            </video>
            <ClearIcon
              className={classes.clearVideoIcon}
              onClick={() => {
                clearUploadVideo();
              }}
            />
          </>
        ) : (
          <>
            <label className={classes.addBtn} htmlFor={`videoInput-${swingType}`}>
              <AddIcon />
            </label>
            <input
              id={`videoInput-${swingType}`}
              type="file"
              style={{ display: "none" }}
              onChange={(e) => {
                if (e.target.files) {
                  uploadVideo(e.target.files[0]);
                }
              }}
            />
          </>
        )}
      </div>
    );
  else
    return (
      <div className={classes.VideoUploadButtonSmall}>
        {uploadedVideo.length > 0 ? (
          <>
            <video className={classes.video}>
              <source src={uploadedVideo} />
            </video>
            <ClearIcon
              className={classes.clearVideoIcon}
              onClick={() => {
                clearUploadVideo();
              }}
            />
          </>
        ) : (
          <>
            <label className={classes.addBtn} htmlFor={`videoInput-${swingType}`}>
              <AddIcon />
            </label>
            <input
              id={`videoInput-${swingType}`}
              type="file"
              style={{ display: "none" }}
              onChange={(e) => {
                if (e.target.files) {
                  uploadVideo(e.target.files[0]);
                }
              }}
            />
          </>
        )}
      </div>
    );
};

export default VideoUploadButton;
