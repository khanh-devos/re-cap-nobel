import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Allroutes from '../routes/Allroutes';

it('should match the snapshot Allroutes', async () => {
  const { container } = render(
    <Provider store={store}>
      <Allroutes />
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});
