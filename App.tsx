import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {DARK_THEME, LIGHT_THEME} from './src/utils/appThemes';



import {Provider} from 'react-redux';
import store, {persister} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import AppNavigation from './src/navigation/AppNavigation';
import {navigationRef} from './src/navigation/RootNav';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Header from './src/navigation/Header';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const noBottom = ['UserDetails', 'Splash','Emotions','Secondary','Login','Signup'];
  const [showBottomNav, setShowBottomNav] = useState<boolean>(false);
  const [curRoute, setCurRoute] = useState<string>('');

  const backgroundStyle = {
    backgroundColor: !isDarkMode ? DARK_THEME?.BG_COLOR : LIGHT_THEME.PRIMARY,
    color: !isDarkMode ? DARK_THEME?.TEXT_COLOR : LIGHT_THEME.TEXT_COLOR,
    flex: 1,
  };
  const handleStateChange = React.useCallback(
    (state: any) => {
      const currentRouteName = state.routes[state.routes.length - 1].name;
      currentRouteName &&
        typeof currentRouteName == 'string' &&
        setCurRoute(currentRouteName);
      setShowBottomNav(
        currentRouteName && noBottom.includes(currentRouteName) ? false : true,
      );
    },
    [navigationRef],
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle?.backgroundColor}
        />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persister}>
            <NavigationContainer
              ref={navigationRef}
              onStateChange={handleStateChange}>
              {showBottomNav && <Header />}
              <AppNavigation />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
