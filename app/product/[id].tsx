import { StyleSheet } from 'react-native';
import { Stack } from 'tamagui';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams } from 'expo-router';

const title = 'Product';

const product = {
  name: 'Product Name',
  price: '£20.00',
  description:
    'This innovative product offers exceptional quality and unparalleled performance, making it a must-have for anyone looking to enhance their experience.',
};

export default function ProductScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ThemedView style={styles.container}>
      <Stack style={styles.titleContainer}>
        <ThemedText type="title">{title}</ThemedText>
      </Stack>
      <Stack style={styles.sectionContainer}>
        <ThemedText type="subtitle">{product.name}</ThemedText>
        <ThemedText>
          Id: <ThemedText type="defaultSemiBold">{id}</ThemedText>
        </ThemedText>
        <ThemedText>
          Price: <ThemedText type="defaultSemiBold">{product.price}</ThemedText>
        </ThemedText>
        <ThemedText>{product.description}</ThemedText>
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
