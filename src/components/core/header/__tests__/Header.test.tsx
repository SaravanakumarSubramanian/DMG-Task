import {fireEvent, render, RenderAPI} from '@testing-library/react-native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {Header} from '../Header';
describe('<Header/>', () => {
  let instance: RenderAPI;
  const title = 'title';

  beforeEach(() => {
    const component = (
      <Header title={title} children={<View/>} />
    );
    instance = render(component);
  });
  afterEach(() => {
    jest.clearAllMocks();
    instance.unmount();
  });
  it('should render Header component', () => {
    expect(instance).toBeDefined();
  });
  it('should render Header TouchableOpacity component', () => {
    const toggleBtn = instance.container.findAllByType(TouchableOpacity)[0];
    fireEvent(toggleBtn, 'onPress', {});
    expect(toggleBtn).toBeTruthy();
  });

});
