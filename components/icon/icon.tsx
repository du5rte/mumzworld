import React from 'react';
import Feather from '@expo/vector-icons/Feather';

export type FeatherIconNames = keyof typeof Feather.glyphMap;

export interface IconProps {
  name: FeatherIconNames;
  size?: number;
  color?: string;
}

export function Icon(props: IconProps) {
  const { name, size, color } = props;

  return <Feather name={name} size={size} color={color} />;
}

export default Icon;
