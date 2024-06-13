import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserDetails from '../screens/other/UserDetails';
import Emotions from '../screens/other/Emotions';
import Secondary from '../screens/other/Secondary';
import LandingScreen from '../screens/other/LandingScreen';
import ChatScreen from '../screens/other/ChatScreen';
import Header from './Header';
import SplashScreen from '../screens/auth/SplashScreen';
import Settings from '../screens/other/Settings';
import Login from '../screens/other/Login';
import Signup from '../screens/other/Signup';


const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  const appRoutes = [
    {
      routeName: 'Splash',
      headerShown: false,
      Component: SplashScreen,
    },
    {
      routeName: 'Login',
      headerShown: false,
      Component: Login,
    },
    {
      routeName: 'Signup',
      headerShown: false,
      Component: Signup,
    },
    {
      routeName: 'UserDetails',
      headerShown: false,
      Component: UserDetails,
    },
    {
      routeName: 'Emotions',
      headerShown: false,
      tabBarVisible: false,
      Component: Emotions,
    },
    {
      routeName: 'Secondary',
      headerShown: false,
      tabBarVisible: false,
      Component: Secondary,
    },
    {
      routeName: 'LandingScreen',
      headerShown: false,
      Component: LandingScreen,
    },
    {
      routeName: 'ChatScreen',
      headerShown: false,
      Component: ChatScreen,
    },
    {
      routeName: 'Settings',
      headerShown: false,
      Component: Settings,
    },
  ];

  return (
    <Stack.Navigator initialRouteName="Splash">
      {/* Splash Screen */}
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />

      {/* UserDetails Screen */}
      <Stack.Screen
        name="UserDetails"
        component={UserDetails}
        options={{
          headerShown: false, 
        }}
      />
      <Stack.Screen
        name="Emotions"
        component={Emotions}
        options={({ route }) => ({
          headerShown: false,
          tabBarVisible: false, // Hide bottom navigation bar for UserDetails screen
        })}
      />
      <Stack.Screen
        name="Secondary"
        component={Secondary}
        options={({ route }) => ({
          headerShown: false,
          tabBarVisible: false, // Hide bottom navigation bar for UserDetails screen
        })}
      />

      {/* Other screens */}
      {appRoutes.slice(6).map((route, i) => (
        <Stack.Screen
          key={i}
          name={route.routeName}
          component={route.Component}
          options={{
            headerShown: route.headerShown,
            headerTitle: '',
            header: () => <Header />,
          }}
        />
      ))}
    </Stack.Navigator>

  );
};

export default AppNavigation;
