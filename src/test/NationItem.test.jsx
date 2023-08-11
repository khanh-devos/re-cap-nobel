import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import NationItem from '../components/NationItem';
import store from '../redux/store';

it('should match the snapshot NationItem', async () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/c1', '/c1/city1']}>
        <NationItem index={1} country="c1" count={2} />
      </MemoryRouter>
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});
