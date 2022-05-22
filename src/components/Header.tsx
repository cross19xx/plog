import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import LeftCaretIcon from '_/components/svg/left-caret-icon';
import useTheme from '_/hooks/useTheme';
import { RootNavigationProp } from '_/navigation';

type Props = {
  navigation: RootNavigationProp<any>;
  title?: string;
};

const Header: React.FC<Props> = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.75} onPress={navigation.goBack}>
        <View style={styles.backContainer}>
          <LeftCaretIcon size={24} color={colors.textSecondary} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 16,
    paddingBottom: 8,
  },

  backContainer: {
    width: 32,
    height: 32,
    marginStart: -8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
