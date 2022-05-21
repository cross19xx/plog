import React, { useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import useTheme from '_/hooks/useTheme';
import { MiscColors } from '_/utils/colors';

export type InputProps = {
  onChangeText: (text: string) => any;
  value: string;

  autoCapitalize?: TextInputProps['autoCapitalize'];
  blurOnSubmit?: boolean;
  containerStyle?: ViewStyle;
  defaultValue?: string;
  disabled?: boolean;
  error?: string;
  icon?: React.FC<{ size: number; color: string; style?: any }>;
  inputStyle?: TextInputProps['style'];
  label?: string;
  lines?: number;
  maxLength?: number;
  onBlur?: (e: any) => any;
  onFocus?: () => any;
  onIconPress?: () => any;
  onSubmitEditing?: TextInputProps['onSubmitEditing'];
  placeholder?: string;
  placeholderTextColor?: string;
  returnKeyType?: TextInputProps['returnKeyType'];
  secureEntry?: TextInputProps['secureTextEntry'];
  selectTextOnFocus?: boolean;
  showLabel?: boolean;
  style?: ViewStyle;
  textAlignVertical?: TextInputProps['textAlignVertical'];
  type?: TextInputProps['keyboardType'];
};

const Input = React.forwardRef<TextInput, InputProps>((props, ref) => {
  const [isFocused, setFocused] = useState(false);

  const { colors } = useTheme();

  const handleChangeText = (text: string) => !props.disabled && props.onChangeText(text);

  const handleFocus = (state: boolean) => {
    state === true && props.onFocus && props.onFocus();
    state === false && props.onBlur && props.onBlur(props.value);

    setFocused(state);
  };

  const containerStyles: StyleProp<ViewStyle> = [styles.container];
  containerStyles.push({
    borderColor: isFocused
      ? MiscColors.primary
      : props.error
      ? MiscColors.red500
      : colors.textSecondary,
    backgroundColor: isFocused ? colors.backgroundPrimary : colors.backgroundSecondary,
  });
  containerStyles.push(props.containerStyle);

  const inputStyles: StyleProp<any> = [
    styles.input,
    { backgroundColor: colors.backgroundPrimary, color: colors.textPrimary },
    props.inputStyle,
  ];

  return (
    <View style={props.style}>
      {props.label && (
        <Text style={[styles.label, { color: colors.textSecondary }]}>{props.label}</Text>
      )}

      <View style={containerStyles}>
        <TextInput
          autoCapitalize={props.autoCapitalize}
          blurOnSubmit={props.blurOnSubmit}
          defaultValue={props.defaultValue}
          keyboardType={props.type}
          maxLength={props.maxLength}
          multiline={!!props.lines}
          numberOfLines={props.lines || 1}
          onBlur={() => handleFocus(false)}
          onChangeText={handleChangeText}
          onFocus={() => handleFocus(true)}
          onSubmitEditing={props.onSubmitEditing}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          ref={ref}
          returnKeyType={props.returnKeyType}
          selectTextOnFocus={props.selectTextOnFocus}
          style={inputStyles}
          textAlignVertical={props.textAlignVertical}
          value={props.value}
        />
      </View>

      <Text style={styles.error}>{props.error}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  label: {
    marginBottom: 4,
    fontSize: 14,
  },
  container: {
    borderWidth: 1,
    borderRadius: 8,
    position: 'relative',
  },
  input: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
    minHeight: 48,
  },
  error: {
    minHeight: 16,
    marginBottom: 4,
    paddingVertical: 1,
    flexDirection: 'column',
    alignItems: 'center',
    color: MiscColors.red500,
    fontSize: 12,
    justifyContent: 'center',
  },
});

export default Input;
