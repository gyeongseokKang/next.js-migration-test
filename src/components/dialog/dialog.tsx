import React from "react";
// import { presets } from "./dialog.presets";
import { DialogProps } from "./dialog.props";
import { Dialog, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Text } from "src/components";
import { CustomPalette } from "src/theme";

const useStyles = makeStyles((theme) => ({
  dialogPaperConfirm: {
    width: "20rem",
    minHeight: "18rem",
    paddingTop: "2.5rem",
    justifyContent: "space-between",
    textAlign: "center",
    borderRadius: "0.75rem !important",
  },
  dialogPaperAlert: {
    width: "20rem",
    minHeight: "11rem",
    padding: "1rem",
    paddingTop: 0,
    justifyContent: "space-between",
    textAlign: "center",
    borderRadius: "0.75rem !important",
  },
  dialogPaperSelect: {
    width: "20rem",
    minHeight: "11rem",
    padding: "1rem",
    paddingTop: 0,
    justifyContent: "space-between",
    textAlign: "center",
    borderRadius: "0.75rem !important",
  },
  contentContainer: {
    marginTop: "3.5rem",
  },
  alertContainer: {
    minHeight: "3.5rem",
    marginTop: "2rem",
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: "3.5rem",
    backgroundColor: CustomPalette.primary5,
  },
  selectButtonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
}));

export function RoundinDialog(props: DialogProps) {
  const {
    dialogType,
    open,
    onClose,
    textTitle,
    textContent,
    textAlert,
    nameAction,
    onClickConfirm,
    onClickCancel,
    onClickAction,
  } = props;
  const classes = useStyles();
  // const style = presets[preset] || presets.default;
  // we will not use the presets here

  switch (dialogType) {
    case "confirm":
    default:
      return (
        <Dialog maxWidth="xs" onClose={onClose} open={open} classes={{ paper: classes.dialogPaperConfirm }}>
          <div>
            <Text preset="header3_500" color={CustomPalette.black}>
              {textTitle}
            </Text>
            <div className={classes.contentContainer}>
              <Text preset="body_300" color={CustomPalette.grey6}>
                {textContent}
              </Text>
            </div>
          </div>
          <Button
            disableRipple
            onClick={onClickConfirm}
            style={{
              width: "100%",
              height: "3.5rem",
              backgroundColor: CustomPalette.primary5,
              borderRadius: 0,
            }}
          >
            <Text preset="body_400" color={CustomPalette.white}>
              확인
            </Text>
          </Button>
        </Dialog>
      );

    case "alert":
      return (
        <Dialog maxWidth="xs" onClose={onClose} open={open} classes={{ paper: classes.dialogPaperAlert }}>
          <div className={classes.alertContainer}>
            <Text preset="header4_400" color={CustomPalette.black}>
              {textAlert}
            </Text>
          </div>
          <Button
            disableRipple
            onClick={onClickConfirm}
            style={{
              width: "100%",
              height: "3.5rem",
              backgroundColor: CustomPalette.primary5,
              color: CustomPalette.white,
              borderRadius: "0.75rem",
            }}
          >
            <Text preset="body_400" color={CustomPalette.white}>
              확인
            </Text>
          </Button>
        </Dialog>
      );

    case "select":
      return (
        <Dialog maxWidth="xs" onClose={onClose} open={open} classes={{ paper: classes.dialogPaperSelect }}>
          <div className={classes.alertContainer}>
            <Text preset="header4_400" color={CustomPalette.black}>
              {textAlert}
            </Text>
          </div>
          <div className={classes.selectButtonContainer}>
            <Button
              disableRipple
              onClick={onClickCancel}
              style={{
                width: "100%",
                height: "3.5rem",
                backgroundColor: CustomPalette.grey2,
                borderRadius: "0.75rem",
              }}
            >
              <Text preset="body_400" color={CustomPalette.black}>
                취소
              </Text>
            </Button>
            <Button
              disableRipple
              onClick={onClickAction}
              style={{
                marginLeft: "0.5rem",
                width: "100%",
                height: "3.5rem",
                backgroundColor: CustomPalette.primary5,
                borderRadius: "0.75rem",
              }}
            >
              <Text preset="body_400" color={CustomPalette.white}>
                {nameAction}
              </Text>
            </Button>
          </div>
        </Dialog>
      );
  }
}
