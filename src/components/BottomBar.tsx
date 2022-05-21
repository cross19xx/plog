import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AddIcon from '_/components/svg/add-icon';
import HomeIcon from '_/components/svg/home-icon';
import InfoCircleIcon from '_/components/svg/info-circle-icon';
import PersonIcon from '_/components/svg/person-icon';
import TimeIcon from '_/components/svg/time-icon';

import useTheme from '_/hooks/useTheme';
import { RootParamName } from '_/navigation';
import { MiscColors } from '_/utils/colors';

type Props = BottomTabBarProps & {
  onPlusPressed: () => any;
};

type IconComponent = Record<RootParamName, React.ComponentType<{ size?: number; color?: string }>>;

const ICON_COMPONENTS: IconComponent = {
  Account: PersonIcon,
  History: TimeIcon,
  Home: HomeIcon,
  Info: InfoCircleIcon,
};

const BottomBar: React.FC<Props> = ({ onPlusPressed, navigation, state }) => {
  const { colors } = useTheme();
  const { bottom: INSET_BOTTOM } = useSafeAreaInsets();
  const stateArray = new Array(5).fill(null);

  const handlePress = (routeKey: string, routeName: string, isFocused: boolean) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: routeKey,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate({ name: routeName, key: routeKey, merge: true });
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.backgroundSecondary,
          borderTopColor: colors.border,
          paddingBottom: INSET_BOTTOM,
        },
      ]}>
      {stateArray.map((_, index) => {
        if (index === 2) {
          return (
            <View key="plus-icon" style={styles.tabColumn}>
              <TouchableOpacity
                activeOpacity={0.825}
                accessibilityRole="button"
                onPress={onPlusPressed}>
                <View style={[styles.plusIcon, { shadowColor: colors.textPrimary }]}>
                  <AddIcon size={28} color={MiscColors.white500} />
                </View>
              </TouchableOpacity>
            </View>
          );
        }

        const currentIndex = index > 2 ? index - 1 : index; // Account for the plus Icon
        const route = state.routes[currentIndex];
        const isFocused = state.index === currentIndex;

        const Icon = ICON_COMPONENTS[state.routes[currentIndex].name as RootParamName] || HomeIcon;

        const color = isFocused ? colors.textPrimary : colors.textSecondary;
        const fontWeight = isFocused ? 'bold' : 'normal';

        return (
          <View key={route.key} style={styles.tabColumn}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              activeOpacity={0.75}
              onPress={() => handlePress(route.key, route.name, isFocused)}
              style={styles.tabColumnInner}>
              <Icon size={24} color={color} />
              <Text style={[styles.tabText, { color, fontWeight }]}>{route.name}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 56,
    flexDirection: 'row',
    borderTopWidth: 1,
  },
  tabColumn: {
    flex: 1,
    paddingVertical: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabColumnInner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    height: 48,
    width: 48,
    borderRadius: 48,
    backgroundColor: MiscColors.green500,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  tabText: {
    fontSize: 10.5,
    marginTop: 2,
  },
});

export default BottomBar;
