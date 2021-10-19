import { makeStyles } from "@material-ui/core";
import { CustomColor } from "src/theme";

/**
 * All text will start off looking like this.
 */
const base = {
  fontFamily: "Noto Sans CJK KR",
  color: CustomColor.text,
  fontStyle: "normal",
  fontWeight: "400",
  marginBlockStart: 0,
  marginBlockEnd: 0,
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  default: {},

  caption_300: {
    ...base,
    fontSize: 12,
    fontWeight: "300",
  },
  caption_400: {
    ...base,
    fontSize: 12,
    fontWeight: "400",
  },
  caption_500: {
    ...base,
    fontSize: 12,
    fontWeight: "600",
  },
  small_300: { ...base, fontSize: 14, fontWeight: "300" },
  small_400: { ...base, fontSize: 14 },
  small_500: { ...base, fontSize: 14, fontWeight: "500" },
  body_300: { ...base, fontSize: 16, fontWeight: "300" },
  body_400: {
    ...base,
    fontSize: 16,
    fontWeight: "400",
  },
  body_500: {
    ...base,
    fontSize: 16,
    fontWeight: "500",
  },
  header4_300: {
    ...base,
    fontSize: 20,
    fontWeight: "300",
  },
  header4_400: {
    ...base,
    fontSize: 20,
    fontWeight: "400",
  },
  header4_500: {
    ...base,
    fontSize: 20,
    fontWeight: "500",
  },
  header3_400: {
    ...base,
    fontSize: 24,
    fontWeight: "400",
  },
  header3_500: {
    ...base,
    fontSize: 24,
    fontWeight: "500",
  },
  header2: {
    ...base,
    fontSize: 40,
    fontWeight: "400",
  },
  header1: {
    ...base,
    fontSize: 64,
    fontWeight: "400",
  },
};

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets;
