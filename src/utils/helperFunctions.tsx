import AsyncStorage from '@react-native-async-storage/async-storage';
import {replace} from '../navigation/RootNav';
import Snackbar from 'react-native-snackbar';
import {Buffer} from 'buffer';
import store from '../redux/store';
import {resetUsers} from '../redux/reducers/userReducer';
import {resetSettings} from '../redux/reducers/settingsReducer';

export const checkEmpty = (input: any) => {
  return input === undefined || input === null
    ? true
    : String(input).trim().length === 0;
};

export function getFormattedDate(
  daysAfter?: number,
  customDate?: any,
  format: string = 'DD-MM-YYYY',
) {
  // Get tomorrow's date
  const givenDate = customDate || new Date();
  daysAfter &&
    typeof daysAfter == 'number' &&
    givenDate.setDate(givenDate.getDate() + daysAfter);

  // Get the day, month, and year
  const day = givenDate.getDate();
  const month = givenDate.getMonth() + 1; // Months are 0-indexed
  const year = givenDate.getFullYear();

  // Pad single digit day and month with leading zero if necessary
  const formattedDay = day < 10 ? '0' + day : day;
  const formattedMonth = month < 10 ? '0' + month : month;

  // Format the date as DD-MM-YYYY
  let formattedDate = formattedDay + '-' + formattedMonth + '-' + year;
  if (format && format == 'YYYY-MM-DD') {
    formattedDate = year + '-' + formattedMonth + '-' + formattedDay;
  }

  return formattedDate;
}

export const handleLogout = async () => {
  try {
    // persister.purge();
    Snackbar.show({
      text: 'Logged out successfully!',
    });

    const keys = await AsyncStorage.getAllKeys();
    keys.forEach(async (key, i) => {
      await AsyncStorage.removeItem(key);
    });
    store.dispatch(resetUsers());
    store.dispatch(resetSettings());
    replace('Login');
  } catch (error) {
    Snackbar.show({
      text: 'Logged out successfully!',
    });
    replace('Login');
  }
};
