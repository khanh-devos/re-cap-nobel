import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import MyHeader from '../components/Header';
import store from '../redux/store';

it('should match the snapshot Header', async () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/c1', '/']}>
        <MyHeader stats="city1" title="city nobel winners" country="c1" amount={1} />
      </MemoryRouter>
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});

it('should find the MyHeader button', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/c1', '/']}>
        <MyHeader stats="city1" title="country nobel" country="c1" amount={1} />
      </MemoryRouter>
    </Provider>,
  );

  await act(async () => {
    const btn = document.querySelector('button');
    expect(btn).toBeTruthy();
    expect(document.body.textContent).toContain('country nobel');
  });
});
