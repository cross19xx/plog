import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import DashboardNavigation from './DashboardNavigation';

import { RootParamList, RootScreen } from '_/navigation/index.d';
import Details from '_/screens/Details';
import Edit from '_/screens/Edit';

const { Navigator, Screen } = createNativeStackNavigator<RootParamList>();

const ROOT_SCREENS: RootScreen[] = [
  { name: 'Dashboard', component: DashboardNavigation, title: 'Dashboard' },
  { name: 'Details', component: Details, title: 'Plush toy details' },
  { name: 'Edit', component: Edit, title: 'Edit plush toy' },
];

const RootNavigation: React.FC = () => (
  <Navigator initialRouteName="Dashboard">
    {ROOT_SCREENS.map(({ name, component, title }) => (
      <Screen
        key={name}
        name={name}
        component={component}
        options={{ title, headerShown: false }}
      />
    ))}
  </Navigator>
);

export default RootNavigation;
