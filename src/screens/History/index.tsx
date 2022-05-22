import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HistoryRow from './HistoryRow';
import NoHistory from './NoHistory';

import { useTypedSelector } from '_/hooks/useRedux';
import useTheme from '_/hooks/useTheme';
import { RootNavigationProp } from '_/navigation';
import { History as HistoryType } from '_/types';

const History: React.FC = () => {
  const { colors } = useTheme();
  const naivgation = useNavigation<RootNavigationProp<'Dashboard'>>();
  const { histories, toys } = useTypedSelector((state) => ({
    histories: state.history,
    toys: state.plushToy,
  }));

  const handleHistoryPressed = (history: HistoryType) => {
    const plushToy = toys.find((toy) => toy.id === history.plushToyId);
    if (!plushToy) {
      // Toy is deleted
      return;
    }

    naivgation.navigate('Details', { toy: plushToy });
  };

  return (
    <SafeAreaView>
      <FlatList
        data={histories.sort((a, b) => b.dateCreated - a.dateCreated)}
        bounces={false}
        keyExtractor={(item) => `${item.dateCreated}${item.activity}${item.plushToyId}`}
        ListEmptyComponent={NoHistory}
        ListFooterComponent={<View style={styles.footer} />}
        ListHeaderComponent={() => (
          <View>
            <Text style={[styles.header, { color: colors.textPrimary }]}>History</Text>
            <Text style={[styles.subHeader, { color: colors.textSecondary }]}>
              View events that performed on this app
            </Text>
          </View>
        )}
        renderItem={({ item }) => {
          const toy = toys.find((toy) => toy.id === item.plushToyId);
          return <HistoryRow history={item} onHistoryPressed={handleHistoryPressed} toy={toy} />;
        }}
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

  footer: { marginBottom: 24 },
});

export default History;
