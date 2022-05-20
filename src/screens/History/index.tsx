import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HistoryRow from './HistoryRow';
import NoHistory from './NoHistory';

import { useTypedSelector } from '_/hooks/useRedux';
import useTheme from '_/hooks/useTheme';

const History: React.FC = () => {
  const { colors } = useTheme();
  const { histories } = useTypedSelector((state) => ({ histories: state.history }));

  const handleHistoryPressed = () => {};

  return (
    <SafeAreaView>
      <FlatList
        data={histories}
        keyExtractor={(item) => `${item.dateCreated}${item.activity}${item.plushToyId}`}
        ListEmptyComponent={NoHistory}
        ListHeaderComponent={() => (
          <View>
            <Text style={[styles.header, { color: colors.textPrimary }]}>History</Text>
            <Text style={[styles.subHeader, { color: colors.textSecondary }]}>
              View events that performed on this app
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <HistoryRow history={item} onHistoryPressed={handleHistoryPressed} />
        )}
        style={styles.container}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  subHeader: {
    lineHeight: 24,
    marginBottom: 32,
    fontSize: 16,
  },
});

export default History;
