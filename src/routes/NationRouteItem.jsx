import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ArrowCircleRightIcon } from '../imgs/container';

export default function NationRouteItem({ city, count }) {
  const navigate = useNavigate();
  const handleCity = () => {
    navigate(`${city}`);
  };

  return (
    <button type="button" onClick={handleCity} className="nation-route-item">
      <h3>{city}</h3>
      <div className="nation-route-item-part2">
        <h3>
          {count}
          {' '}
          nobelists
        </h3>
        <ArrowCircleRightIcon />
      </div>
    </button>
  );
}

NationRouteItem.propTypes = {
  city: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
