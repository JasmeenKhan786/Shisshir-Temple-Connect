import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import Loading from '../screens/Loading';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Profile from '../screens/Profile';
import ResetPassword from '../screens/ResetPassword';
import PoojaRequests from '../screens/PoojaRequests';
import AddPoojaRequest from '../screens/AddPoojaRequest';
import { FontAwesome5 } from '@expo/vector-icons';

const Stack1 = createStackNavigator();

const PoojaStack = () => {
  return (
    <Stack1.Navigator screenOptions={{ headerShown: false }}>
      <Stack1.Screen name="PoojaRequests" component={PoojaRequests} />
      <Stack1.Screen name="AddPoojaRequest" component={AddPoojaRequest} />
    </Stack1.Navigator>
  );
};



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const DrawerContent = () => {
  return (
    <Drawer.Navigator
    screenOptions={{headerShown:false}}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          unmountOnBlur: true,
          drawerIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  height: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Ionicons
                  name={focused ? 'home' : 'home-outline'}
                  color={color}
                  size={25}
                />
              </View>
            );
          },
        }}
      />
      <Drawer.Screen
        name="PoojaRequest"
        component={PoojaStack}
        options={{
          unmountOnBlur: true,
          drawerIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  height: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <FontAwesome5 name="praying-hands" size={24} color="gray" />
              </View>
            );
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          unmountOnBlur: true,
          drawerIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  height: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Ionicons
                  name={focused ? 'person' : 'person-outline'}
                  color={color}
                  size={25}
                />
              </View>
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={DrawerContent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
