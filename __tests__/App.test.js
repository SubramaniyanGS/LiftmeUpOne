import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import App from '../App';  // Assuming App.js is the root component of your app

jest.useFakeTimers();  // This allows you to control the timers in your tests

describe('App Start', () => {
  it('shows splash screen and then login page', async () => {
    const { getByTestId, queryByTestId } = render(<App />);

    // Initially, splash screen should be visible
    expect(getByTestId('splash-screen')).toBeTruthy();

    // Advance timers if splash screen is displayed for a fixed time
    jest.advanceTimersByTime(3000);  // Adjust the time as per your splash screen duration

    // Wait for the splash screen to disappear and login page to appear
    await waitFor(() => expect(queryByTestId('splash-screen')).toBeNull());

    // Now, the login page should be visible
    expect(getByTestId('login-page')).toBeTruthy();
  });
});
