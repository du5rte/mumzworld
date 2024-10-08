import React from 'react';

import Box, { BoxProps } from '../box';

export interface CircleProps extends BoxProps {
  size: BoxProps['width'];
}

export function Circle(props: CircleProps) {
  const { size, ...rest } = props;

  return (
    <Box
      width={size}
      height={size}
      justifyContent="center"
      alignItems="center"
      borderRadius="round"
      {...rest}
    />
  );
}

export default Circle;
