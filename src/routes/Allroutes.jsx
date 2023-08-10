import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Nation from '../components/Nation';
import CityRoute from './CityRoute';
import NationRoute from './NationRoute';

export default function Allroutes() {
  const { uniqueCountries } = useSelector((store) => store.nobel);

  return (
    <BrowserRouter basename="re-cap-nobel">
      <Routes>
        <Route path="/" element={<Nation />} />
        {
            uniqueCountries.map(({ id, country, cities }) => {
              const r1 = [
                <Route
                  key={uuidv4()}
                  path={`/${country}`}
                  element={<NationRoute country={country} />}
                />,
              ];

              cities.forEach((city) => (
                r1.push(<Route
                  key={uuidv4()}
                  path={`/${country}/${city}`}
                  element={<CityRoute city={city} country={country} />}
                />)));

              return r1;
            })
        }
      </Routes>
    </BrowserRouter>
  );
}
