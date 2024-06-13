import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {TOKEN} from '../utils/appConstants';
import {BASE_URL} from '@env';

const handleRequest = async (endpoint: any, data?: any) => {
  const accessToken = await AsyncStorage.getItem(TOKEN);

  const baseUrl = BASE_URL || '';

  const token = accessToken || '';

  const headers = {
    authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await fetch(String(baseUrl) + `${endpoint}`, {
      method: !data ? 'GET' : 'POST',
      headers,
      body: JSON.stringify(data),
    });
    const resJson = await response.json();

    if (resJson?.error || resJson?.code) {
      Snackbar.show({
        text: resJson?.error_description || resJson?.code?.details,
        backgroundColor: 'red',
      });

      return {error: resJson?.error};
    } else {
      const token = resJson?.token;

      token && (await AsyncStorage.setItem(TOKEN, token));
      return resJson;
    }
  } catch (error) {
    NetInfo.fetch().then(state => {
      !state?.isConnected
        ? Snackbar.show({
            text: 'Please check your internet connection',
            backgroundColor: 'red',
          })
        : Snackbar.show({
            text: String(error),
            backgroundColor: 'red',
          });
    });
    return {error};
  }
};

export default handleRequest;
