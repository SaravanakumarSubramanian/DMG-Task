// /**
//  * @format
//  */
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import {render, RenderAPI} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {MockedStore} from 'src/shared/MockData';
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

describe('<App>', () => {
  let instance: RenderAPI;

  describe('when App only', () => {
    beforeEach(() => {
      const component = (
        <Provider store={MockedStore}>
          <App />
        </Provider>
      );
      instance = render(component);
    });

    afterEach(() => {
      jest.clearAllMocks();
      instance.unmount();
    });
    it('renders correctly', () => {
      renderer.create(<App />);
    });
    it('Should render App', () => {
      expect(instance).toBeDefined();
    });
  });
});
