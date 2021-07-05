import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Bloco from './src/components/Bloco';

import { PrimeiraTela, SegundaTela, TerceiraTela, QuartaTela, QuintaTela } from './rotas'

const Tab = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        drawerContentOptions={{ activeTintColor: 'red', showLabel: false }}>
        <Tab.Screen
          name="COLLECTIVE"
          component={PrimeiraTela}
        />
        <Tab.Screen
          name="Dashboard"
          component={PrimeiraTela}
        />
        <Tab.Screen
          name="Default Cards"
          component={SegundaTela}
        />
        <Tab.Screen
          name="Princing Tables"
          component={TerceiraTela}
        />
        <Tab.Screen
          name="Content Blocks"
          component={QuartaTela}
        />
        <Tab.Screen
          name="Forms"
          component={QuintaTela}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
