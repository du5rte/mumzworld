import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export interface StarIcon extends SvgProps {
  size?: number;
  color?: string;
}
export const CustomStarIcon = ({ size = 16, color = '#FEBC30', ...props }: StarIcon) => (
  <Svg width={size} height={size} fill={color} viewBox="0 0 512 512" {...props}>
    <Path d="M256 38.013c-22.458 0-66.472 110.3-84.64 123.502-18.17 13.2-136.674 20.975-143.614 42.334-6.94 21.358 84.362 97.303 91.302 118.662 6.94 21.36-22.286 136.465-4.116 149.665 18.17 13.2 118.61-50.164 141.068-50.164 22.458 0 122.9 63.365 141.068 50.164 18.17-13.2-11.056-128.306-4.116-149.665 6.94-21.36 98.242-97.304 91.302-118.663-6.94-21.36-125.444-29.134-143.613-42.335-18.168-13.2-62.182-123.502-84.64-123.502z" />
  </Svg>
);
export default CustomStarIcon;
