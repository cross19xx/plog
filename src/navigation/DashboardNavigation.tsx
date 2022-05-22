import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SheetManager } from 'react-native-actions-sheet';

import BottomBar from '_/components/BottomBar';
import { TabParamList, TabScreen } from '_/navigation/index.d';

import Account from '_/screens/Account';
import History from '_/screens/History';
import Home from '_/screens/Home';
import Info from '_/screens/Info';

const { Navigator, Screen } = createBottomTabNavigator<TabParamList>();

const TAB_SCREENS: TabScreen[] = [
  { name: 'Home', title: 'Home', component: Home },
  { name: 'History', title: 'History', component: History },
  { name: 'Info', title: 'Info', component: Info },
  { name: 'Account', title: 'Account', component: Account },
];

const DashboardNavigation: React.FC = () => {
  const handlePlusPressed = () => {
    console.debug('Add a new plush toy', new Date());
    SheetManager.show('add-plush-toy-sheet');
  };

  return (
    <Navigator
      initialRouteName="Home"
      tabBar={(props) => <BottomBar {...props} onPlusPressed={handlePlusPressed} />}>
      {TAB_SCREENS.map(({ component, name, title }) => (
        <Screen
          key={name}
          name={name}
          component={component}
          options={{ title, headerShown: false }}
        />
      ))}
    </Navigator>
  );
};

export default DashboardNavigation;
