import React from 'react';

import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<any>();

export const navigation = () => {
  navigationRef?.current;
};
export const replace = (name?: any, params?: any) => {
  navigationRef?.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name, params}],
    }),
  );
};
export const navigate = (name?: any, params?: any) => {
  navigationRef?.current?.navigate(name, params);
};

export const navigateDispatch = (root: any) => {
  navigationRef?.current?.dispatch(root);
};
