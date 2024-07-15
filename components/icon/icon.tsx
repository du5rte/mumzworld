import React from 'react';
import Feather from '@expo/vector-icons/Feather';

export type FeatherIconNames = keyof typeof Feather.glyphMap;

export interface IconProps {
  name: FeatherIconNames;
  size?: number;
  color?: string;
  testID?: string;
}

export function Icon(props: IconProps) {
  const { name, size, color, testID } = props;

  return <Feather Iconame={name} size={size} color={color} testID={testID} />;
}

export default Icon;
