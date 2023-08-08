import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Winner from '../components/Winner';

export default function CityRoute({ city, country }) {
  const { nobels } = useSelector((store) => store.nobel);
  const winners = nobels.filter((item) => item.city === city);
  const navigate = useNavigate();

  const handleBack = (event) => {
    event.preventDefault();
    navigate(`/${country}`);
  };

  return (
    <div>
      <button type="button" id={`${country}`} onClick={handleBack}>Back</button>

      {
    winners.map(({ id }) => <Winner key={id} id={id} />)
    }
    </div>
  );
}

CityRoute.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
