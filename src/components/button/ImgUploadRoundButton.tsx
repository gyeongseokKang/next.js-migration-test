import React, { SyntheticEvent, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import { useEffect } from "react";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import logo from "images/logo.png";
import { CustomColor, CustomPalette } from "src/theme";

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
    backgroundColor: CustomPalette.grey1,
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
          <img
            className={classes.image}
            src={uploadedimage}
            onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `${logo}`;
            }}
            alt={`업로드 사진`}
          />
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
