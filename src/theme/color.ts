import { CustomPalette } from "./palette";

export const CustomColor = {
  transparent: "rgba(0, 0, 0, 0)",
  background: CustomPalette.white,
  primary: CustomPalette.primary5,
  text: CustomPalette.black,
  storybookDarkBg: CustomPalette.black,
  input: {
    label: CustomPalette.grey8,
    border: CustomPalette.grey6,
    borderFocus: CustomPalette.primary5,
  },
  button: {
    text: CustomPalette.white,
    background: CustomPalette.primary6,
    grey: CustomPalette.grey5,
    lightgrey: CustomPalette.grey3,
  },
  menuItem: {
    text: CustomPalette.black,
    icon: CustomPalette.primary6,
  },
  error: {
    text: CustomPalette.red,
  },
  section: {
    backgroundLight: CustomPalette.grey0,
  },
  chat: {
    me: CustomPalette.chat1,
    you: CustomPalette.chat2,
    time: CustomPalette.grey5,
  },
};
