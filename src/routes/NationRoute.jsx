import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import MyHeader from '../components/Header';
import NationRouteItem from './NationRouteItem';

export default function NationRoute({ country }) {
  const { uniqueCountries } = useSelector((store) => store.nobel);
  const { cities } = uniqueCountries.find((item) => item.country === country);
  const uniqueCity = {};
  cities.forEach((item) => {
    if (!uniqueCity[item]) uniqueCity[item] = 1;
    else uniqueCity[item] += 1;
  });

  return (
    <div className="nation-route">
      <MyHeader stats="City breakdown" title="country nobel winners" country={country} amount={cities.length} />

      <div className="nation-route-flex">
        {
        Object.keys(uniqueCity).map((city) => (
          <NationRouteItem key={uuidv4()} city={city} count={uniqueCity[city]} />
        ))
      }
      </div>
    </div>
  );
}

NationRoute.propTypes = {
  country: PropTypes.string.isRequired,
};
