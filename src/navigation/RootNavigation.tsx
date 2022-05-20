import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import BottomBar from '_/components/BottomBar';
import { RootParamList, RootScreen } from '_/navigation/index.d';

import Account from '_/screens/Account';
import History from '_/screens/History';
import Home from '_/screens/Home';
import Info from '_/screens/Info';

const { Navigator, Screen } = createBottomTabNavigator<RootParamList>();

const ROOT_SCREENS: RootScreen[] = [
  { name: 'Home', title: 'Home', component: Home },
  { name: 'History', title: 'History', component: History },
  { name: 'Account', title: 'Account', component: Account },
  { name: 'Info', title: 'Info', component: Info },
];

const RootNavigation: React.FC = () => {
  const handlePlusPressed = () => {
    console.debug('Add a new plush toy', new Date());
  };

  return (
    <Navigator
      initialRouteName="Home"
      tabBar={(props) => <BottomBar {...props} onPlusPressed={handlePlusPressed} />}>
      {ROOT_SCREENS.map(({ component, name, title }) => (
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

export default RootNavigation;
