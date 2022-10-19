import { render, RenderAPI} from '@testing-library/react-native';
import React, { useState,useEffect } from 'react';
import {Dashboard} from '../Dashboard';


jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
    useEffect: jest.fn(),
  }));
describe('<Header/>', () => {
  let instance: RenderAPI;
  const setToggleList = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  beforeEach(() => {
    
    (useStateSpy).mockImplementation(() => [false,setToggleList,]);
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
    expect(useStateSpy).toHaveBeenCalledWith(false);
    expect(instance).toBeDefined();
  });
  it('should render Dashboard flatlist component', () => {
    const toggleBtn = instance.findByTestId('flatlist');
    expect(toggleBtn).toBeTruthy();
  });

});
