import {Dimensions} from 'react-native';


export const APP_NAME = 'Liftme Up';

export const AUTH_EMAIL_REGEX =
  /^[a-zA-Z0-9._%+-]+@(?:coats\.com|mailinator\.com)$/;
export const NO_SPECIAL_REGEX = /^[a-zA-Z0-9\s]*$/;
export const TOKEN = 'ACCESS_TOKEN';
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const BOTTOM_NAV_HEIGHT = 70;
export const HEADER_HEIGHT = 70;
export const THEME = 'THEME';
export const MENUS = 'MENUS';
export const SCROLL_HEIGHT =
  WINDOW_HEIGHT - (BOTTOM_NAV_HEIGHT + HEADER_HEIGHT - 10);
export const REDUX_STATE = 'REDUX_STATE';
export const DEFAULT_PAGINATION = 15;

export const MENU_OPTIONS = [
  {
    menuName: 'Home',
    iconName: 'home-sharp',
    iconFamily: 'IonIcon',
    routeName: 'LandingScreen',
  },

  {
    menuName: 'Chat',
    iconName: 'message',
    iconFamily: 'AntDesign',
    routeName: 'ChatScreen',
  },

  {
    menuName: 'Settings',
    iconName: 'settings',
    iconFamily: 'IonIcon',
    routeName: 'Settings',
  },
  {
    menuName: 'Logout',
    iconName: 'logout',
    iconFamily: 'AntDesign',
  },
];
