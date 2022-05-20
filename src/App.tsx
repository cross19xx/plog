import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Plog: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Plog;
