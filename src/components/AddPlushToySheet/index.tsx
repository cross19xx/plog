import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RNActionSheet, { ActionSheetProps, SheetManager } from 'react-native-actions-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AddPlushForm from './AddPlushForm';

import useTheme from '_/hooks/useTheme';

const ActionSheet: React.FC<ActionSheetProps & { children: React.ReactNode }> =
  RNActionSheet as any;

ActionSheet.defaultProps = {
  ...RNActionSheet.defaultProps,
  keyboardDismissMode: 'none',
};

const AddPlushToySheet: React.FC = () => {
  const { bottom: SAFE_AREA_BOTTOM } = useSafeAreaInsets();
  const { colors } = useTheme();

  const closeModal = () => SheetManager.hide('add-plush-toy-sheet');

  return (
    <ActionSheet
      id="add-plush-toy-sheet"
      defaultOverlayOpacity={0.85}
      containerStyle={{ backgroundColor: colors.backgroundPrimary }}>
      <View
        style={[
          styles.container,
          { backgroundColor: colors.backgroundPrimary, paddingBottom: SAFE_AREA_BOTTOM + 48 },
        ]}>
        <View style={styles.headerRow}>
          <Text style={[styles.title, { color: colors.textSecondary }]}>Add a new plush toy</Text>

          <TouchableOpacity onPress={closeModal}>
            <Text style={[styles.closeText, { color: colors.textPrimary }]}>&times;</Text>
          </TouchableOpacity>
        </View>

        <AddPlushForm onPlushToyAdded={closeModal} />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  // Header
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 16,
    paddingEnd: -8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  closeText: {
    fontSize: 24,
    padding: 8,
    paddingVertical: 4,
  },
});

export default AddPlushToySheet;
