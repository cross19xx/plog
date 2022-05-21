import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AddPlushToySheet from '_/components/AddPlushToySheet';
import useTheme from '_/hooks/useTheme';
import Navigation from '_/navigation';
import { persistor, store } from '_/redux';

// FIXME: Type annotations have broken persist gate. Fix once a solution presents itself
const PesistedGate: React.FC<any> = PersistGate as any as React.FC<any>;

const Plog: React.FC = () => {
  const { colors } = useTheme();

  return (
    <ReduxProvider store={store}>
      <PesistedGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Navigation>
            <StatusBar style="auto" backgroundColor={colors.backgroundSecondary} />
            <AddPlushToySheet />
          </Navigation>
        </SafeAreaProvider>
      </PesistedGate>
    </ReduxProvider>
  );
};

export default Plog;
