import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

import useTheme from '_/hooks/useTheme';

type Props = {
  activeKey: string;
};

const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

const NoToyMessage: React.FC<Props> = ({ activeKey }) => {
  const { colors } = useTheme();

  let message =
    activeKey === 'all'
      ? "You've not added any plush toy yet."
      : `There are no plush ${activeKey} added yet. 😢`;
  message += "\nGo ahead and press that green + button and let's get started";

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.textSecondary }]}>
        No plush toys found in this vault
      </Text>
      <Image source={require('_/assets/secure.png')} style={styles.icon} />
      <Text style={[styles.message, { color: colors.textSecondary }]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: SCREEN_HEIGHT * 0.325,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
  },
  icon: {
    width: 84,
    height: 84,
    opacity: 0.25,
    marginBottom: 16,
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 32,
  },
});

export default NoToyMessage;
