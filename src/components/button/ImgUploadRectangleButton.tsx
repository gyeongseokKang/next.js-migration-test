import React, { SyntheticEvent, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import logo from "images/logo.png";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import { CustomColor, CustomPalette } from "src/theme";

const useStyles = makeStyles((theme) => ({
  imgUploadRectangleButton: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "9rem",
  },
  image: {
    width: "100%",
    height: "9rem",
    borderRadius: "0.75rem",
  },
  addBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "9rem",
    borderRadius: "0.75rem",
    color: CustomColor.button.grey,
    backgroundColor: CustomPalette.grey1,
  },
  iconLayout: {
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    bottom: "3rem",
    paddingInlineEnd: "0.5rem",
  },
  clearIcon: {
    padding: "0.5rem",
    borderRadius: "100%",
    fontSize: "1.25rem",
    backgroundColor: "#38393A",
    color: "#fff",
    opacity: "70%",
    marginInlineStart: "0.25rem",
  },
}));

interface ImgUploadRectangleButtonProp {
  image: File | undefined;
  uploadimage: (image: File | undefined) => void;
}

const ImgUploadRectangleButton = ({ image, uploadimage }: ImgUploadRectangleButtonProp) => {
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
    <div className={classes.imgUploadRectangleButton}>
      {uploadedimage.length > 0 ? (
        <>
          <img
            className={classes.image}
            src={uploadedimage}
            onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `${logo}`;
            }}
            alt={`업로드 사진`}
          />
        </>
      ) : (
        <>
          <label className={classes.addBtn} htmlFor={`imageInput`}>
            <AddIcon />
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
      {uploadedimage.length > 0 ? (
        <>
          <div className={classes.iconLayout}>
            <ClearIcon
              className={classes.clearIcon}
              onClick={() => {
                clearUploadimage();
              }}
            />
            {/* <ClearIcon
              className={classes.clearIcon}
              onClick={() => {
                clearUploadimage();
              }}
            /> */}
          </div>
        </>
      ) : undefined}
    </div>
  );
};

export default ImgUploadRectangleButton;
