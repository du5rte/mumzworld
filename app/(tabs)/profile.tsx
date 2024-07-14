import { StyleSheet, Switch, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { useRecoilState } from 'recoil';
import { bottomTabBarShown } from '@/context/bottom-tab-bar-shown';
import Text from '@/components/text';
import Button from '@/components/button';
import Box from '@/components/box';

export default function ProfileTab() {
  const [state, setState] = useRecoilState(bottomTabBarShown);

  return (
    <ScrollView style={styles.container}>
      <Box flex={1} paddingVertical="m" paddingHorizontal="xl" gap="m">
        <Text variant="title">Hi</Text>

        <Box flexDirection="row" justifyContent="space-between">
          <Text>
            Show <Text variant="semiBold">BottomTabBar</Text>
          </Text>
          <Switch value={state} onValueChange={setState} />
        </Box>
        <Button title="Return" onPress={router.back} />
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
