import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function NationRoute({ country }) {
  const { uniqueCountries } = useSelector((store) => store.nobel);
  const { cities } = uniqueCountries.find((item) => item.country === country);
  const uniqueCity = {};
  cities.forEach((item) => {
    if (!uniqueCity[item]) uniqueCity[item] = 1;
    else uniqueCity[item] += 1;
  });

  const navigate = useNavigate();
  const handleBack = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleCity = (event) => {
    event.preventDefault();
    navigate(event.target.id);
  };

  return (
    <div>
      <button type="button" onClick={handleBack}>
        {'_<_'}
      </button>

      <h2>{country}</h2>
      {
        Object.keys(uniqueCity).map((city) => (
          <button key={uuidv4()} type="button" id={city} onClick={handleCity}>
            {city}
            {' : '}
            {uniqueCity[city]}
          </button>
        ))
      }

    </div>
  );
}

NationRoute.propTypes = {
  country: PropTypes.string.isRequired,
};
