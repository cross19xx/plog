import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import useTheme from '_/hooks/useTheme';
import Navigation from '_/navigation';
import { persistor, store } from '_/redux';

const Plog: React.FC = () => {
  const { colors } = useTheme();

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Navigation>
            <StatusBar style="auto" backgroundColor={colors.backgroundSecondary} />
          </Navigation>
        </SafeAreaProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default Plog;
