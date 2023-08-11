import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/store';
import CityRoute from '../routes/CityRoute';

it('should match the snapshot Cityroute', async () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/c2']}>
        <CityRoute country="c2" city="city2" />
      </MemoryRouter>
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});
