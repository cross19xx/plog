import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import useTheme from '_/hooks/useTheme';
import { persistor, store } from '_/redux';

const Plog: React.FC = () => {
  const { colors } = useTheme();

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}>
          <StatusBar style="auto" backgroundColor={colors.backgroundSecondary} />
          <Text style={[styles.title, { color: colors.textPrimary }]}>
            🐯 Welcome to PLush LOG. 🐵
          </Text>
          <Text style={{ color: colors.textSecondary }}>
            🚀🚀🚀🚀🚀 Let&apos;s begin 🚀🚀🚀🚀🚀
          </Text>
        </View>
      </PersistGate>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default Plog;
