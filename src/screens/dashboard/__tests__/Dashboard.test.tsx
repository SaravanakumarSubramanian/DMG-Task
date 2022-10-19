import { render, RenderAPI} from '@testing-library/react-native';
import React, { useState } from 'react';
import {Dashboard} from '../Dashboard';


jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
  }));
describe('<Header/>', () => {
  let instance: RenderAPI;
  const setToggleList = jest.fn();

  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(() => [
        false,
        setToggleList,
      ]);
    const component = (
      <Dashboard />
    );
    instance = render(component);
  });
  afterEach(() => {
    jest.clearAllMocks();
    instance.unmount();
  });
  it('should render Dashboard component', () => {
    expect(instance).toBeDefined();
  });
  it('should render Dashboard flatlist component', () => {
    const toggleBtn = instance.findByTestId('flatlist');
    expect(toggleBtn).toBeTruthy();
  });

});
