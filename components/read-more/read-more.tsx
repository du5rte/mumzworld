import React, { useState } from 'react';

import Box from '../box';
import Icon from '../icon';
import Text from '../text';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

export interface ReadMoreProps {
  content?: string;
  numberOfLines?: number;
}

export function ReadMore(props: ReadMoreProps) {
  const { t } = useTranslation('translation', { keyPrefix: 'actions' });

  const [show, setShow] = useState(false);

  const { content, numberOfLines = 2 } = props;

  const handleToggle = () => {
    setShow((value) => !value);
  };

  return (
    <TouchableOpacity disabled={show} onPress={handleToggle}>
      <Box>
        <Text variant="description" ellipsizeMode="tail" {...(!show && { numberOfLines })}>
          {content}
        </Text>

        <TouchableOpacity onPress={handleToggle}>
          <Box flexDirection="row" justifyContent="center" alignItems="center" padding="s" gap="xs">
            <Text variant="info">{t(show ? 'hide' : 'showMore')}</Text>
            <Icon size={24} name={show ? 'chevron-up' : 'chevron-down'} />
          </Box>
        </TouchableOpacity>
      </Box>
    </TouchableOpacity>
  );
}

export default ReadMore;
