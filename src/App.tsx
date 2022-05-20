import { StatusBar } from 'expo-status-bar';
import React from 'react';
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
        <Navigation>
          <StatusBar style="auto" backgroundColor={colors.backgroundSecondary} />
        </Navigation>
      </PersistGate>
    </ReduxProvider>
  );
};

export default Plog;
