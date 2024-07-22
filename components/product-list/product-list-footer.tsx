import Box from '@/components/box';
import { Circle } from '@/components/circle';
import Icon from '@/components/icon';
import Text from '@/components//text';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';

interface ProductListFooterProps {
  list: any[];
  onPress: () => void;
}

export function ProductListFooter(props: ProductListFooterProps) {
  const { list, onPress } = props;

  const { t } = useTranslation();

  if (!list || list.length < 50) {
    return null;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        flex={1}
        height={300}
        justifyContent="center"
        alignItems="center"
        gap="m"
        paddingHorizontal="2xl">
        <Circle size={82} borderWidth={3} borderColor="primary">
          <Text color="primary" lineHeight={36}>
            <Icon name="arrow-up" size={36} />
          </Text>
        </Circle>
        <Text color="primary" textAlign="center" numberOfLines={2}>
          {t('home.toTopDescription')}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}

export default ProductListFooter;
