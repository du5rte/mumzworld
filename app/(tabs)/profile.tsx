import { StyleSheet, Switch, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { useRecoilState } from 'recoil';
import { bottomTabBarShown } from '@/context/bottom-tab-bar-shown';
import Text from '@/components/text';
import Button from '@/components/button';
import Box from '@/components/box';
import { useTranslation } from 'react-i18next';

export default function ProfileTab() {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'devmenu' });
  const [state, setState] = useRecoilState(bottomTabBarShown);

  const handleSwitchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  return (
    <ScrollView style={styles.container}>
      <Box flex={1} paddingVertical="m" paddingHorizontal="xl" gap="m">
        <Text variant="title">{t('hi')}</Text>

        <Box flexDirection="row" justifyContent="space-between">
          <Text>{t('showBottomTabBar')}</Text>
          <Switch value={state} onValueChange={setState} />
        </Box>

        <Box flexDirection="row" justifyContent="space-between">
          <Text>{t('switchLanguage')}</Text>
          <Box flexDirection="row">
            <Button
              title={t(i18n.language === 'en' ? 'english' : 'arabic')}
              icon="globe"
              size="s"
              variant="secondary"
              onPress={handleSwitchLanguage}
            />
          </Box>
        </Box>

        <Button
          title={t('return')}
          size="l"
          onPress={() => {
            router.back();
          }}
        />
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
