import { View, StyleSheet, Switch } from 'react-native';
import { Button } from 'tamagui';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { bottomTabBarShown } from '@/context/bottom-tab-bar-shown';
import { useRecoilState } from 'recoil';

export default function ProfileTab() {
  const [state, setState] = useRecoilState(bottomTabBarShown);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 12,
          paddingHorizontal: 24,
          justifyContent: 'space-between',
        }}>
        <ThemedText>
          Show <ThemedText type="defaultSemiBold">BottomTabBar</ThemedText>
        </ThemedText>
        <Switch value={state} onValueChange={setState} />
      </View>

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
    backgroundColor: '#fff',
  },
});
