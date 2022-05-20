import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import useTheme from '_/hooks/useTheme';

const Home: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}>
      <Text style={[styles.title, { color: colors.textPrimary }]}>🐯 Welcome to PLush LOG. 🐵</Text>
      <Text style={{ color: colors.textSecondary }}>🚀🚀🚀🚀🚀 Let&apos;s begin 🚀🚀🚀🚀🚀</Text>
    </View>
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

export default Home;
