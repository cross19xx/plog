import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Picker, PickerInstance, PickerProps } from 'react-native-woodpicker';

import useTheme from '_/hooks/useTheme';
import { MiscColors } from '_/utils/colors';

type Props = PickerProps & {
  label: string;
  rootStyle?: StyleProp<ViewStyle>;
  error?: string;
};

const CustomPicker = React.forwardRef<PickerInstance, Props>((props, ref) => {
  const { error, rootStyle } = props;
  const { colors } = useTheme();

  const textColor = props.item ? colors.textPrimary : colors.textSecondary;

  return (
    <View style={rootStyle}>
      <Text style={styles.label}>{props.label}</Text>

      <View
        style={[
          styles.picker,
          { borderColor: colors.textSecondary, backgroundColor: colors.backgroundPrimary },
        ]}>
        <Picker
          {...props}
          ref={ref}
          textInputStyle={{ ...styles.textInput, color: textColor }}
          containerStyle={styles.containerInner}
        />
      </View>

      <Text style={styles.error}>{error}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  label: {
    marginBottom: 4,
    fontSize: 14,
  },
  picker: {
    height: 48,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
  containerInner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textInput: {
    padding: 0,
    fontSize: 14,
  },
  error: {
    minHeight: 16,
    marginBottom: 4,
    paddingVertical: 1,
    flexDirection: 'column',
    alignItems: 'center',
    color: MiscColors.red500,
    justifyContent: 'center',
    textAlign: 'right',
    fontSize: 14,
  },
});

export default CustomPicker;
