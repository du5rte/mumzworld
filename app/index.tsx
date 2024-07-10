import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'tamagui';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';

const title = 'Products List';

export default function ProductListScreen() {
  const { t } = useTranslation();

  return (
    <ThemedView style={styles.container}>
      <Stack style={styles.titleContainer}>
        <ThemedText type="title">{title}</ThemedText>
      </Stack>
      <Stack>
        <Link
          href={{
            pathname: '/product/[id]',
            params: {
              id: 1234,
            },
          }}>
          {t('actions.press')}
        </Link>
      </Stack>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    gap: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
