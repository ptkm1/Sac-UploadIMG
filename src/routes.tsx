import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Screens
import Index from './screens/index';
import submitFiles from './screens/submitFiles';



const Stack = createStackNavigator();

function Route(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index}  options={{ headerShown: false }} />
        <Stack.Screen name="submitFiles" component={submitFiles}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route;