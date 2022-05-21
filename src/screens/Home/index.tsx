import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Categories from './Categories';
import NoToyMessage from './NoToyMessage';
import ToyRow from './ToyRow';

import useTheme from '_/hooks/useTheme';
import { useTypedSelector } from '_/hooks/useRedux';

const Home: React.FC = () => {
  const { colors } = useTheme();

  const { toys } = useTypedSelector((state) => ({ toys: state.plushToy }));

  const [activeTab, setActiveTab] = useState('all');
  const [toysByCategory, setToysByCategory] = useState(toys);

  const handleActiveSelected = (key: string) => {
    setActiveTab(key);
  };

  useEffect(() => {
    if (activeTab === 'all') {
      setToysByCategory(toys);
      return;
    }

    setToysByCategory(toys.filter((toy) => toy.specie === activeTab));
  }, [activeTab, toys]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}>
      <ScrollView nestedScrollEnabled>
        <View style={styles.containerInner}>
          <Text style={[styles.welcomeMessage, { color: colors.textPrimary }]}>
            Welcome Back, Johnny 👋🏾
          </Text>
          <Text style={[styles.subMessage, { color: colors.textSecondary }]}>
            Check out some of your amazing plush toys.
          </Text>

          <Categories activeCategory={activeTab} onActiveSelect={handleActiveSelected} />

          {toysByCategory.length === 0 && <NoToyMessage activeKey={activeTab} />}

          {toysByCategory.length > 0 && (
            <>
              <Text style={[styles.subTitle, { color: colors.textPrimary }]}>My Plush Toys</Text>
              {toysByCategory.map((toy) => (
                <ToyRow key={toy.id} toy={toy} />
              ))}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  containerInner: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    flexDirection: 'column',
    flex: 1,
  },

  welcomeMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  subMessage: {
    marginBottom: 32,
  },

  subTitle: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default Home;
