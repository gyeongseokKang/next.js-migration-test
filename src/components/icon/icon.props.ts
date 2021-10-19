import { IconTypes } from ".";

export interface IconProps {
  /**
   * Style overrides for the icon image
   */
  style?: React.CSSProperties;

  /**
   * Style overrides for the icon container
   */

  containerStyle?: React.CSSProperties;

  /**
   * The name of the icon
   */

  icon: IconTypes;

  /**
   * The size of the icon
   */
  size?: number;
}
