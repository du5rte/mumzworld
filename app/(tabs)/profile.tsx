import { Switch } from 'react-native';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import Text from '@/components/text';
import Button from '@/components/button';
import Box, { BoxProps } from '@/components/box';
import { persistLanguageChange } from '@/locales/i18next';
import HelloWave from '@/components/hello-wave';
import useColorScheme from '@/hooks/useColorScheme';
import useBottomTabBarShown from '@/hooks/useBottomTabBarShownAtom';
import { BounceInDown, FadeOut } from 'react-native-reanimated';

function MenuItem(props: BoxProps) {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      borderRadius="circle"
      backgroundColor="surface"
      paddingLeft="l"
      alignItems="center"
      padding="s"
      {...props}
    />
  );
}

export default function ProfileTab() {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'devmenu' });
  const [bottomTabBarShown, setBottomTabBarShown] = useBottomTabBarShown();
  const [colorScheme, setColorScheme] = useColorScheme();

  const handleSwitchLanguage = () => {
    persistLanguageChange(i18n.language === 'en' ? 'ar' : 'en');
  };

  const toggleDarkMode = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Box flex={1} paddingVertical="m" paddingHorizontal="xl" gap="m">
      <Box flexDirection="row" gap="s">
        <Text variant="title">{t('hi')}</Text>
        <HelloWave />
      </Box>

      <Text>{t('description')}</Text>

      <Box height={12} />

      <MenuItem gap="s">
        <Text>{t('languageLabel')}</Text>
        <Box flex={1} />
        <Button
          shape="circle"
          variant="secondary"
          size="s"
          title={i18n.language === 'en' ? '🇺🇸' : '🇦🇪'}
          onPress={handleSwitchLanguage}
        />
      </MenuItem>

      <MenuItem>
        <Text>{t('darkModeLabel')}</Text>
        <Button
          shape="circle"
          variant="secondary"
          size="s"
          title={colorScheme === 'dark' ? '☀️' : '🌙'}
          onPress={toggleDarkMode}
        />
      </MenuItem>

      <Text>{t('bottomTabBarDescription')}</Text>

      <MenuItem>
        <Text>{t('bottomTabBarLabel')}</Text>
        <Switch value={bottomTabBarShown} onValueChange={setBottomTabBarShown} />
      </MenuItem>

      {bottomTabBarShown && (
        <>
          <Text>{t('returnDescription')}</Text>

          <Box height={12} />

          <Button
            title={t('return')}
            size="l"
            onPress={() => {
              router.back();
            }}
            entering={BounceInDown}
            exiting={FadeOut.duration(500)}
          />
        </>
      )}
    </Box>
  );
}
