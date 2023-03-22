/**
 * @format
 */

import 'react-native';
import React from 'react';
import HomeScreen from '../src/screens/HomeScreen';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';

const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(true), ms));

jest.mock('../src/hooks/useAuth', () => {
  return {
    ...jest.requireActual('../src/hooks/useAuth'),
    useAuth: jest.fn(() => {
      return {
        user: {
          photoUrl: 'asd',
        },
        profile: {
          name: 'rofl',
        },
      };
    }),
  };
});

it('renders correctly', async () => {
  const app = renderer
    .create(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    )
    .toJSON();
  expect(app).toMatchSnapshot();
  await sleep(10);
});
