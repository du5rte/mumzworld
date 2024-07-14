import React from 'react';

import Box, { BoxProps } from '../box';

export interface CircleProps extends BoxProps {
  size: BoxProps['width'];
}

export function Circle(props: CircleProps) {
  const { size } = props;

  return (
    <Box
      width={size}
      height={size}
      justifyContent="center"
      alignItems="center"
      borderRadius="circle"
      {...props}
    />
  );
}

export default Circle;
