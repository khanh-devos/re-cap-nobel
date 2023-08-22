import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Nation from '../components/Nation';
import store from '../redux/store';

it('should match the snapshot Nation', async () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Nation />
      </MemoryRouter>
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});
