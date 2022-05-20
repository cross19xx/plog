import { NavigationContainer, Theme, useTheme as useNativeTheme } from '@react-navigation/native';
import React from 'react';

import useTheme from '_/hooks/useTheme';
import RootNavigation from '_/navigation/RootNavigation';
import { MiscColors } from '_/utils/colors';

export * from '_/navigation/index.d';

type Props = {
  children: React.ReactNode;
};

const Navigation: React.FC<Props> = ({ children }) => {
  const { colors } = useTheme();
  const { dark, colors: nativeColors } = useNativeTheme();

  const theme: Theme = {
    dark,
    colors: {
      ...nativeColors,
      background: colors.backgroundPrimary,
      text: colors.textPrimary,
      card: colors.backgroundSecondary,
      primary: MiscColors.primary,
    },
  };

  return (
    <NavigationContainer theme={theme}>
      {children}
      <RootNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
