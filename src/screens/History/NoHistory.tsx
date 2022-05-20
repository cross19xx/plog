import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import useTheme from '_/hooks/useTheme';

const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

const NoHistory: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Image source={require('_/assets/out-of-time.png')} style={styles.image} />
      <Text style={[styles.text, { color: colors.textSecondary }]}>
        You haven&apos;t done anything on the app yet. Perform activities like adding plush toys,
        and/or making modifications to the toys.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    minHeight: SCREEN_HEIGHT / 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 48,
  },
  image: {
    width: 96,
    height: 96,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default NoHistory;
