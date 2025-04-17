// navigation/AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import RoleSelectionScreen from '../screens/RoleSelectionScreen';
import LoginScreen from '../screens/LoginScreen';
import AdminHomeScreen from '../screens/AdminHomeScreen';
import StudentHomeScreen from '../screens/StudentHomeScreen';
import TeacherHomeScreen from '../screens/TeacherHomeScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="StudentHome" component={StudentHomeScreen} /> 
      <Stack.Screen name="TeacherHome" component={TeacherHomeScreen} /> 
      <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
      
    </Stack.Navigator>
  );
}
