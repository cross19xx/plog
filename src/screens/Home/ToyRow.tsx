import { useNavigation } from '@react-navigation/native';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RightCaretIcon from '_/components/svg/right-caret-icon';

import useTheme from '_/hooks/useTheme';
import { RootNavigationProp } from '_/navigation';
import { PlushToy } from '_/types';
import { SPECIES_CATEGORIES } from '_/utils/constants';

type Props = {
  toy: PlushToy;
};

const ToyRow: React.FC<Props> = ({ toy }) => {
  const navigation = useNavigation<RootNavigationProp<'Dashboard'>>();
  const { colors } = useTheme();

  const handleRowPressed = () => {
    navigation.push('Details', { toy });
  };

  const specie =
    SPECIES_CATEGORIES.find((specie) => specie.id == toy.specie) || SPECIES_CATEGORIES[0];

  return (
    <TouchableOpacity activeOpacity={0.75} onPress={handleRowPressed}>
      <View
        style={[
          styles.container,
          { backgroundColor: colors.backgroundSecondary, borderColor: colors.border },
        ]}>
        <Image source={specie.icon} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: colors.textPrimary }]}>{toy.name}</Text>
          <Text style={[styles.specieName, { color: colors.textSecondary }]}>{specie.name}</Text>
          <Text style={[styles.date, { color: colors.textSecondary }]}>
            Added {formatDistanceToNow(toy.dateCreated || Date.now())} ago
          </Text>
        </View>

        <RightCaretIcon size={16} color={colors.textSecondary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },

  image: {
    width: 60,
    height: 60,
    marginEnd: 16,
  },
  textContainer: { flex: 1 },
  title: {
    fontSize: 18,
    fontWeight: '300',
    lineHeight: 20.8,
  },
  specieName: { lineHeight: 18 },
  date: { lineHeight: 18 },
});

export default ToyRow;
