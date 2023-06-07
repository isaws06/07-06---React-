import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function IndexScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Index</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}

function SobreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sobre</Text>
    </View>
  );
}

function CadastroScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cadastro</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Index" component={IndexScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
        <Tab.Screen name="Cadastro" component={CadastroScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
