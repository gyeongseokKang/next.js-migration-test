import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import { useEffect } from "react";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { CustomColor } from "src/theme";
import ErrorSupportImg from "../image/ErrorSupportImg";

const useStyles = makeStyles((theme) => ({
  ImgUploadRoundButton: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "7rem",
  },
  image: {
    width: "6rem",
    height: "6rem",
    margin: "0.5rem",
    border: "1px solid",
    borderRadius: "100%",
  },
  addBtn: {
    padding: "2rem",
    margin: "0.5rem",
    borderRadius: "100%",
    color: CustomColor.button.grey,
    backgroundColor: CustomColor.button.lightgrey,
  },
  clearIcon: {
    position: "absolute",
    left: "60%",
    backgroundColor: "white",
    border: "1px solid",
    borderRadius: "100%",
    fontSize: "1.25rem",
    margin: "0px 1rem 1rem 0px",
  },
}));

interface ImgUploadRoundButtonProp {
  image: File | undefined;
  uploadimage: (image: File | undefined) => void;
}

const ImgUploadRoundButton = ({ image, uploadimage }: ImgUploadRoundButtonProp) => {
  const classes = useStyles();
  const [uploadedimage, setUploadedimage] = useState<string>("");

  useEffect(() => {
    if (image === undefined) return setUploadedimage("");
    const imageURL = URL.createObjectURL(image);
    if (imageURL) setUploadedimage(imageURL);
  }, [image]);

  const clearUploadimage = () => {
    uploadimage(undefined);
  };
  return (
    <div className={classes.ImgUploadRoundButton}>
      {uploadedimage.length > 0 ? (
        <>
          <ErrorSupportImg className={classes.image} imgSrc={uploadedimage} altText={`업로드 사진`} />
          <ClearIcon
            className={classes.clearIcon}
            onClick={() => {
              clearUploadimage();
            }}
          />
        </>
      ) : (
        <>
          <label htmlFor={`imageInput`}>
            <CameraAltOutlinedIcon className={classes.addBtn} />
          </label>
          <input
            id={`imageInput`}
            type="file"
            style={{ display: "none" }}
            onChange={(e) => {
              if (e.target.files) {
                uploadimage(e.target.files[0]);
              }
            }}
          />
        </>
      )}
    </div>
  );
};

export default ImgUploadRoundButton;
