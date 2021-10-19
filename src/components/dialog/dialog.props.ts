import React from "react";
import { DialogPresets } from "./dialog.presets";

export interface DialogProps {
  /**
   * To identify the dialog type
   */
  dialogType: "confirm" | "alert" | "select";

  /**
   * MUI Dialog's default props
   */
  open: boolean;
  onClose: () => void;

  /**
   * Title
   */
  textTitle?: string;

  /**
   * Content under the title
   */
  textContent?: string;

  /**
   * Alert message (displayed alone)
   */
  textAlert?: string;

  /**
   * Name of the action button
   */
  nameAction?: string;

  /**
   * On Click "Confirmation"
   */
  onClickConfirm?: () => void;

  /**
   * On Click "Cancel"
   */
  onClickCancel?: () => void;

  /**
   * On Click "Action"
   */
  onClickAction?: () => void;
}
