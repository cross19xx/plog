import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { ComponentType } from 'react';
import { PlushToy } from '_/types';

export type RootParamList = {
  Dashboard: undefined;
  Details: {
    toy: PlushToy;
  };
};

export type TabParamList = {
  Home: undefined;
  History: undefined;
  Account: undefined;
  Info: undefined;
};

export type RootParamName = keyof RootParamList;

export type TabParamName = keyof TabParamList;

export type RootNavigationProp<T extends RootParamName> = NativeStackNavigationProp<
  RootParamList,
  T
>;

export type TabNavigationProp<T extends TabParamName> = BottomTabNavigationProp<TabParamList, T>;

export type RootRouteProp<T extends RootParamName> = RouteProp<RootParamList, T>;

/** Passed as the type definition for `useRoute` hook */
export type TabNavigationRouteProp<T extends TabParamName> = RouteProp<TabParamList, T>;

export type RootScreen = {
  name: RootParamName;
  component: ComponentType<any>;
  title: string;
};

export type TabScreen = {
  name: TabParamName;
  component: ComponentType<any>;
  title: string;
};
