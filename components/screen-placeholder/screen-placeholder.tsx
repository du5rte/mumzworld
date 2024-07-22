import React from 'react';

import { Circle } from '@/components/circle';

import Box, { BoxProps } from '../box';
import Icon, { FeatherIconNames } from '../icon';
import Text from '../text';

export interface ScreenPlaceholderProps extends BoxProps {
  icon: FeatherIconNames;
  description: string;
}

export function ScreenPlaceholder(props: ScreenPlaceholderProps) {
  const { icon, description, ...rest } = props;

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      gap="m"
      paddingHorizontal="2xl"
      {...rest}>
      <Circle size={82} borderWidth={3} borderColor="primary">
        <Text color="primary" lineHeight={36}>
          <Icon name={icon} size={36} />
        </Text>
      </Circle>
      <Text color="primary" textAlign="center" numberOfLines={2}>
        {description}
      </Text>
    </Box>
  );
}

export default ScreenPlaceholder;
