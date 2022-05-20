import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { ComponentType } from 'react';

export type RootParamList = {
  Home: undefined;
  History: undefined;
  Account: undefined;
  Info: undefined;
};

export type RootParamName = keyof RootParamList;

export type RootNavigationProp<T extends RootParamName> = BottomTabNavigationProp<RootParamList, T>;

/** Passed as the type definition for `useRoute` hook */
export type RootNavigationRouteProp<T extends RootParamName> = RouteProp<RootParamList, T>;

export type RootScreen = {
  name: RootParamName;
  component: ComponentType<any>;
  title: string;
};
