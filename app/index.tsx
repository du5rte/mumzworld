import { FlatList, Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';
import { router } from 'expo-router';
import Animated from 'react-native-reanimated';

import DATA from '@/data/colors.json';

export default function ProductListScreen() {
  const { width } = useWindowDimensions();

  const gap = 8;
  const numColumns = 3;
  const itemSize = (width - (numColumns - 1) * gap) / numColumns;

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              router.navigate({
                pathname: '/product/[id]',
                params: {
                  id: item.id,
                },
              });
            }}>
            <Animated.View style={styles.wrapper} sharedTransitionTag={item.id + 'parent'}>
              <Animated.View
                style={{
                  height: itemSize,
                  width: itemSize,
                  backgroundColor: item.color,
                }}
                sharedTransitionTag={item.id + 'child'}
              />
            </Animated.View>
          </Pressable>
        )}
        numColumns={numColumns}
        contentContainerStyle={{ gap }}
        columnWrapperStyle={{ gap }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: 'white',
  },
});
