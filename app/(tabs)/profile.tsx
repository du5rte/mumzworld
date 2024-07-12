import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'tamagui';
import { router } from 'expo-router';

export default function ProfileTab() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button
        onPress={() => {
          router.back();
        }}>
        Return
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
