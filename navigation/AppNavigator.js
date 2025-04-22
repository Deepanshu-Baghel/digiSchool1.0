// navigation/AppNavigator.js


import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RoleSelectionScreen from '../screens/RoleSelectionScreen';
import LoginScreen from '../screens/LoginScreen';
import AdminHomeScreen from '../screens/AdminHomeScreen';
import StudentHomeScreen from '../screens/StudentHomeScreen';
import TeacherHomeScreen from '../screens/TeacherHomeScreen';

// Student Features Screens
import TimeTableScreen from '../FunctionsScreen/TimeTableScreen';
import AttendanceScreen from '../FunctionsScreen/AttendanceScreen';
import NotificationsScreen from '../FunctionsScreen/NotificationsScreen';
import HomeworkScreen from '../FunctionsScreen/HomeworkScreen';
import FeesScreen from '../FunctionsScreen/FeesScreen';
import ProgressScreen from '../FunctionsScreen/ProgressScreen';
import QuizScreen from '../FunctionsScreen/QuizScreen';
import TeachersScreen from '../FunctionsScreen/TeachersScreen';



import RegisterStudent from '../AdminScreen/RegisterStudent';
import ClassStudentList from '../AdminScreen/ClassStudentList';
import AssignHomework from '../AdminScreen/AssignHomework';
import SendNotification from '../AdminScreen/SendNotification';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="RoleSelection">
      {/* Common Screens */}
      <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

      {/* Role-Based Home Screens */}
      <Stack.Screen name="StudentHome" component={StudentHomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TeacherHome" component={TeacherHomeScreen} />
      <Stack.Screen name="AdminHome" component={AdminHomeScreen} />

      {/* Student Functionality Screens */}
      <Stack.Screen name="TimeTable" component={TimeTableScreen} />
      <Stack.Screen name="Attendance" component={AttendanceScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Homework" component={HomeworkScreen} />
      <Stack.Screen name="Fees" component={FeesScreen} />
      <Stack.Screen name="Progress" component={ProgressScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="Teachers" component={TeachersScreen} />


      <Stack.Screen name="RegisterStudent" component={RegisterStudent} />
      <Stack.Screen name="ClassStudentList" component={ClassStudentList} />
      <Stack.Screen name="AssignHomework" component={AssignHomework} />
      <Stack.Screen name="SendNotification" component={SendNotification} />

    </Stack.Navigator>
  );
}
