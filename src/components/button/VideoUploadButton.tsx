import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  VideoUploadButton: {
    width: "7rem",
    height: "7rem",
    display: "flex",
  },
  video: {
    width: "6rem",
    height: "6rem",
    margin: "0.5rem",
    borderRadius: "10px",
    border: "1px solid",
  },
  addImgBtn: {
    backgroundColor: "#E9ECEF",
    padding: "1.5rem",
    margin: "0.5rem",
    fontSize: "3rem",
    color: "#ADB5BD",
    borderRadius: "10px",
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
          <label htmlFor={`videoInput-${swingType}`}>
            <AddIcon className={classes.addImgBtn} />
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
