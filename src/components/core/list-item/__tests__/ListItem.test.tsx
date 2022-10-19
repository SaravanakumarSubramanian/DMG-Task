import {render, RenderAPI} from '@testing-library/react-native';
import React from 'react';
import {ListItem} from '../ListItem';
describe('<ListItem/>', () => {
  let instance: RenderAPI;
  const title = 'title';
  const date = 'title';
  const snippet = 'title';
  const imageUrl = 'title';

  beforeEach(() => {
    const component = (
      <ListItem title={title} date={date} snippet={snippet} imageUrl={imageUrl} />
    );
    instance = render(component);
  });
  afterEach(() => {
    jest.clearAllMocks();
    instance.unmount();
  });
  it('should render ListItem component', () => {
    expect(instance).toBeDefined();
  });
  it('should render ListItem Image component', () => {
    const imageEle = instance.findAllByTestId('thumbnailImg');
    expect(imageEle).toBeDefined();
  });
  it('should render ListItem title component', () => {
    const titleTxt = instance.findAllByTestId('titleTxt');
    expect(titleTxt).toBeDefined();
  });
  it('should render ListItem snippet component', () => {
    const snippetTxt = instance.findAllByTestId('snippetTxt');
    expect(snippetTxt).toBeDefined();
  });
  it('should render ListItem date component', () => {
    const dateTxt = instance.findAllByTestId('dateTxt');
    expect(dateTxt).toBeDefined();
  });
});
