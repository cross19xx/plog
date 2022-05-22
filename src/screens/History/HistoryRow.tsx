import formatDate from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ClockIcon from '_/components/svg/clock-icon';
import RightCaretIcon from '_/components/svg/right-caret-icon';
import useTheme from '_/hooks/useTheme';

import { History, PlushToy } from '_/types';

type Props = {
  onHistoryPressed: (history: History) => void;
  history: History;
  toy?: PlushToy;
};

const getHistoryText = (history: History, toy?: PlushToy) => {
  let message = 'You ';

  const toyName = toy?.name ? '"' + toy?.name?.trim() + '"' : 'a plush toy';

  switch (history.activity) {
    case 'plushToyAdded':
      message += `added ${toyName} to your collection.`;
      break;
    case 'plushToyRemoved':
      message += 'deleted a plush toy from your collection';
      break;
    case 'plushToyModified':
      message += `modified ${toyName} in your collection`;
      break;
  }

  return message;
};

const HistoryRow: React.FC<Props> = ({ history, onHistoryPressed, toy }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity activeOpacity={0.75} onPress={() => onHistoryPressed(history)}>
      <View
        style={[
          styles.container,
          { backgroundColor: colors.backgroundSecondary, borderColor: colors.border },
        ]}>
        <ClockIcon size={28} color={colors.textSecondary} />
        <View style={styles.textContainer}>
          <Text style={[styles.text, { color: colors.textPrimary }]}>
            {getHistoryText(history, toy)}
          </Text>

          <Text style={[styles.date, { color: colors.textSecondary }]}>
            {formatDate(history.dateCreated, 'EEEE, LLLL dd, hh:mm:ss a')} (
            {formatDistanceToNow(history.dateCreated || Date.now())} ago)
          </Text>
        </View>
        {toy && <RightCaretIcon size={24} color={colors.textSecondary} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '300',
  },
});

export default HistoryRow;
