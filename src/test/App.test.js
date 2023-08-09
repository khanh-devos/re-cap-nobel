import { render, screen, act } from '@testing-library/react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { API_NOBEL } from '../redux/nationSlice/NationSlice';
import store from '../redux/store';
import App from '../App';
import Allroutes from '../routes/Allroutes';
import CityRoute from '../routes/CityRoute';
import NationRoute from '../routes/NationRoute';
import Winner from '../components/Winner';
import { useAppNavigate, useAppSelector } from './mock';
import Nation from '../components/Nation';
import NationItem from '../components/NationItem';
import { MemoryRouter, Route, Router, Routes } from 'react-router-dom';

jest.mock('axios');

describe('Test all the App:', () => {
  const data = {
  laureates: [
    {
      id: '1',
      fullName: {
        en: 'A. Michael Spence',
        se: 'A. Michael Spence',
      },
      gender: 'male',
      birth: {
        date: '1943-00-00',
        place: {
          cityNow: {
            en: 'city1',
          },
          countryNow: {
            en: 'c1',
          },
        },
      },
      nobelPrizes: [
        {
          awardYear: '2001',
          categoryFullName: {
            en: 'The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel',
          },
          prizeAmount: 10000000,
        },
      ],
    },
    {
      id: '2',
      fullName: {
        en: 'Khanh Dom',
      },
      gender: 'male',
      birth: {
        date: '1980-00-00',
        place: {
          cityNow: {
            en: 'city2',
          },
          countryNow: {
            en: 'c2',
          },
        },
      },
      nobelPrizes: [
        {
          awardYear: '2001',
          categoryFullName: {
            en: 'The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel',
          },
          prizeAmount: 10000000,
        },
      ],
    },

    ]
  }

  beforeEach(() => {
    axios.get.mockImplementation((url) => {
      switch (url) {
        case API_NOBEL:
          return Promise.resolve({ data });
        default:
          return Promise.reject(new Error('not found'));
      }
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot APP', async () => {
    await act(async () => {
      const { container } = render(
        <Provider store={store}>
          <App />
        </Provider>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  it('should match the snapshot Allroutes', async () => {
    await act(async () => {
      const { container } = render(
        <Provider store={store}>
          <Allroutes />
        </Provider>,
      );

      expect(container).toMatchSnapshot();
    });
  });

  it('should match the snapshot CityRoute', async () => {
    await act(async () => {
      const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/c2"]}>
          <Routes>
            <Route path="c2" element={<CityRoute country={'c2'} city={'city2'}/>} />
          </Routes>
        </MemoryRouter>
      </Provider>,
      );
      expect(container).toMatchSnapshot();
    });
    
  });

  it('should match the snapshot NationRoute', async () => {
    await act(async () => {
      const { container } = render(
        <Provider store={store}>
          <NationRoute country={'c2'}/>
        </Provider>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  it('should match the snapshot Nation', async () => {
    await act(async () => {
      const { container } = render(
        <Provider store={store}>
          <Nation />
        </Provider>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  it('should match the snapshot NationItem', async () => {
    await act(async () => {
      const { container } = render(
        <Provider store={store}>
          <NationItem country={'c1'} count={2} />
        </Provider>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  it('should match the snapshot Winner', async () => {
    await act(async () => {
      const { container } = render(
        <Provider store={store}>
          <Winner id={'1'} />
        </Provider>,
      );
      expect(container).toMatchSnapshot();
    });
  });

});
