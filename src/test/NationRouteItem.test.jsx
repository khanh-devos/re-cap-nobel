import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/store';
import NationRouteItem from '../routes/NationRouteItem';

it('should match the snapshot NationRouteItem', async () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/city1']}>
        <NationRouteItem city="city1" count={1} />
      </MemoryRouter>
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});
