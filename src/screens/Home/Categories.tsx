import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import useTheme from '_/hooks/useTheme';
import { SPECIES_CATEGORIES } from '_/utils/constants';

type Props = {
  activeCategory: string;
  onActiveSelect: (key: string) => void;
};

const CATEGORIES = [{ name: 'All Toys', id: 'all', icon: require('_/assets/fox.png') }].concat(
  SPECIES_CATEGORIES,
);

const Categories: React.FC<Props> = ({ activeCategory, onActiveSelect }) => {
  const { colors } = useTheme();

  return (
    <>
      <Text style={[styles.header, { color: colors.textSecondary }]}>My Plush Toy Species</Text>
      <FlatList
        horizontal
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item: category }) => {
          const isActive = category.id === activeCategory;

          const backgroundColor = isActive ? colors.backgroundInverse : colors.backgroundSecondary;

          return (
            <TouchableOpacity activeOpacity={0.9} onPress={() => onActiveSelect(category.id)}>
              <View
                style={[
                  styles.item,
                  {
                    backgroundColor,
                    shadowColor: colors.textSecondary,
                    borderColor: colors.border,
                  },
                ]}>
                <Image source={category.icon} style={styles.itemIcon} />
                <Text
                  style={[
                    styles.itemText,
                    { color: isActive ? colors.textInverse : colors.textSecondary },
                  ]}>
                  {category.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    lineHeight: 20.8,
    marginBottom: 8,
  },

  container: {
    paddingEnd: 16,
    marginStart: -8,
    marginBottom: 32,
  },

  item: {
    padding: 16,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    marginHorizontal: 4,
    borderWidth: 1,
    borderRadius: 8,
  },
  itemIcon: {
    width: 48,
    height: 48,
    marginBottom: 12,
  },
  itemText: {
    width: '100%',
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default Categories;
