import { useColorScheme } from 'react-native';

import { DarkColors, LightColors } from '_/utils/colors';

export default function useTheme() {
  const colorScheme = useColorScheme();

  return {
    scheme: colorScheme,
    colors: colorScheme === 'dark' ? DarkColors : LightColors,
  };
}
