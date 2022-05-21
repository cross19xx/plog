import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native';

import { MiscColors } from '_/utils/colors';

type Props = {
  onPress: () => any;
  text: string;

  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  innerStyle?: ViewStyle;
  textStyle?: TextStyle;
};

const Button = React.forwardRef<TouchableHighlight, Props>((props, ref) => {
  const isDisabled = props.loading || props.disabled;
  const isDisabledOpacity = isDisabled ? 0.625 : 1;

  return (
    <TouchableHighlight
      ref={ref}
      disabled={isDisabled}
      onPress={props.onPress}
      underlayColor={MiscColors.transparent}
      accessibilityLabel="Button"
      accessibilityHint={props.text}
      style={[props.style, { opacity: isDisabledOpacity }]}>
      <View style={[styles.container, props.innerStyle]}>
        {props.loading && (
          <ActivityIndicator style={styles.loader} size="large" color={MiscColors.white500} />
        )}

        <Text style={[styles.text, { opacity: isDisabledOpacity }, props.textStyle]}>
          {props.text}
        </Text>
      </View>
    </TouchableHighlight>
  );
});

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 48,
    position: 'relative',
    width: '100%',
    backgroundColor: MiscColors.primary,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: 16,
    color: MiscColors.white500,
  },
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 2,
  },
});

export default Button;
