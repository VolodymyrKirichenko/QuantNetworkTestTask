import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import { Item } from '../app/components/ListItems/Item/Item';
import { Main } from '../app/components/Main/Main';

const Stack = createStackNavigator();

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Main"
          component={ Main }
        />

        <Stack.Screen
          name="Item"
          component={ Item }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
