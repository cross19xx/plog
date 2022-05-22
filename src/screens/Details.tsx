import { useNavigation, useRoute } from '@react-navigation/native';
import formatDate from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import React from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '_/components/Button';
import Header from '_/components/Header';
import ClockIcon from '_/components/svg/clock-icon';
import { useTypedDispatch, useTypedSelector } from '_/hooks/useRedux';

import useTheme from '_/hooks/useTheme';
import { RootNavigationProp, RootRouteProp } from '_/navigation';
import { addHistory, removePlushToy } from '_/redux/actions';
import { History } from '_/types';
import { MiscColors } from '_/utils/colors';
import { SPECIES_CATEGORIES } from '_/utils/constants';

const getHistoryText = (history: History) => {
  let message = 'You ';
  switch (history.activity) {
    case 'plushToyAdded':
      message += 'added this plush toy';
      break;
    case 'plushToyModified':
      message += 'made modifications to this plush toy';
      break;
    default:
      message += 'did something to this plush toy';
      break;
  }

  return message;
};

const Details: React.FC = () => {
  const dispatch = useTypedDispatch();
  const navigation = useNavigation<RootNavigationProp<'Details'>>();

  const { toy } = useRoute<RootRouteProp<'Details'>>().params;
  const toySpecie =
    SPECIES_CATEGORIES.find((specie) => specie.id.toLowerCase() === toy.specie) ||
    SPECIES_CATEGORIES[0];

  const { toyHistory } = useTypedSelector((state) => ({
    toyHistory: state.history.filter((elem) => elem.plushToyId === toy.id),
  }));

  const { colors } = useTheme();

  const handleDeletePressed = () => {
    Alert.alert(
      'Delete plush toy',
      `Are you sure you want to delete ${toy.name}? You won't be able to undo this action.`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: proceedToDelete },
      ],
      { cancelable: true },
    );
  };

  const handleEditPressed = () => {
    navigation.push('Edit', { toy });
  };

  const proceedToDelete = () => {
    dispatch(removePlushToy(toy.id));
    dispatch(
      addHistory({ activity: 'plushToyRemoved', plushToyId: toy.id, dateCreated: Date.now() }),
    );

    navigation.goBack();
  };

  return (
    <ScrollView
      bounces={false}
      contentContainerStyle={[styles.container, { backgroundColor: colors.backgroundPrimary }]}>
      <SafeAreaView style={styles.safeAreaView}>
        <Header title="Details" navigation={navigation} />

        <View style={[styles.avatarContainer, { borderColor: colors.border }]}>
          <Image source={toySpecie.icon} style={styles.avatar} />
        </View>

        <Text style={[styles.title, { color: colors.textPrimary }]}>{toy.name}</Text>
        <Text style={[styles.specie, { color: colors.textSecondary }]}>
          {toySpecie.name} Plush toy
        </Text>

        <Text style={[styles.cardTitle, { color: colors.textSecondary }]}>Plush toy Details</Text>
        <View
          style={[
            styles.card,
            { backgroundColor: colors.backgroundSecondary, borderColor: colors.border },
          ]}>
          <Text style={[styles.cardSubtitle, { color: colors.textSecondary }]}>Plush toy name</Text>
          <Text style={styles.cardValue}>{toy.name}</Text>

          <Text style={[styles.cardSubtitle, { color: colors.textSecondary }]}>
            Plush toy species
          </Text>
          <Text style={styles.cardValue}>{toySpecie.name}</Text>

          <Text style={[styles.cardSubtitle, { color: colors.textSecondary }]}>Description</Text>
          <Text style={styles.cardValue}>{toy.description}</Text>

          <View style={styles.cardButtonContainer}>
            <Button onPress={handleEditPressed} text="Edit" style={styles.cardButton} />
            <Button
              onPress={handleDeletePressed}
              text="Delete"
              style={styles.cardButton}
              innerStyle={styles.cardButtonDelete}
              textStyle={{ color: MiscColors.red500 }}
            />
          </View>
        </View>

        <Text style={[styles.cardTitle, { color: colors.textSecondary }]}>Activity</Text>
        {toyHistory.map((history) => {
          const key = `${history.activity}${history.dateCreated}`;

          return (
            <View key={key} style={styles.historyRow}>
              <ClockIcon size={24} color={colors.textSecondary} />
              <View style={styles.historyTextColumn}>
                <Text style={[styles.historyTitle, { color: colors.textSecondary }]}>
                  {getHistoryText(history)}
                </Text>
                <Text style={[styles.historyDate, { color: colors.textSecondary }]}>
                  {formatDate(history.dateCreated, 'EEE, LLLL dd, hh:mm:ss a')} (
                  {formatDistanceToNow(history.dateCreated || Date.now())} ago)
                </Text>
              </View>
            </View>
          );
        })}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  safeAreaView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingBottom: 32,
  },

  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MiscColors.primary,
    width: 128,
    height: 128,
    borderRadius: 128,
    borderWidth: 4,
    shadowColor: MiscColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
  },

  title: {
    fontSize: 20,

    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    lineHeight: 28,
  },
  specie: {
    marginBottom: 32,
    fontSize: 16,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    width: '100%',
  },
  card: {
    width: '100%',
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    marginBottom: 32,
  },
  cardSubtitle: {
    fontSize: 12,
    lineHeight: 16,
  },
  cardValue: {
    color: MiscColors.primary,
    lineHeight: 20.8,
    fontSize: 16,
    marginBottom: 16,
  },
  cardButtonContainer: {
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: -8,
  },
  cardButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  cardButtonDelete: { backgroundColor: MiscColors.transparent },

  historyRow: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 8,
  },
  historyTextColumn: {
    flex: 1,
    paddingStart: 8,
  },
  historyTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  historyDate: {
    fontSize: 12,
  },
});

export default Details;
