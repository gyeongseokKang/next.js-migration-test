import * as React from "react";
import { presets } from "./text.presets";
import { TextProps } from "./text.props";

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
  // grab the props
  const { preset, text, children, style: styleOverride, color, ...rest } = props;

  // figure out which content to use
  const content = text || children;

  const style = presets[preset] || presets.default;

  return (
    <p {...rest} style={{ ...style, color: color }} className={styleOverride}>
      {content}
    </p>
  );
}
