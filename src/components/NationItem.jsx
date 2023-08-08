import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function NationItem({ country, count }) {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    navigate(`${event.target.id}`);
  };

  return (
    <button type="button" id={`${country}`} onClick={handleClick}>
      {country}
      {' '}
      :
      {' '}
      {count}
    </button>
  );
}

NationItem.propTypes = {
  country: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
