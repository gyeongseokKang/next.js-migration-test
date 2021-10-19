import React from "react";
import { TextPresets } from "./text.presets";

export interface TextProps {
  /**
   * Children components.
   */
  children?: React.ReactNode;

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: string;

  /**
   * One of the different types of text presets.
   */
  preset: TextPresets;

  /**
   * Color
   */
  color?: string;
}
