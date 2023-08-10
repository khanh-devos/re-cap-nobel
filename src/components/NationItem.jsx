import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import IMAGES, { ArrowCircleRightIcon } from '../imgs/container';

export default function NationItem({ country, count, index }) {
  const navigate = useNavigate();
  const handleClick = (country) => {
    navigate(`${country}`);
  };

  const arr = [0, 3, 4, 7, 8, 11, 12, 15, 16, 19, 20, 23];
  const style = arr.includes(index)
    ? { background: '#ec4c8b' }
    : { };

  return (
    <button
      style={style}
      className="nation-item"
      type="button"
      id={`${country}`}
      onClick={() => handleClick(country)}
    >

      <div className="nation-item-circle-right-arrow-icon">
        <ArrowCircleRightIcon />
      </div>
      <img src={IMAGES[country.toLowerCase().replace(' ', '')]} alt="nation map" className="nation-item-img" />
      <div className="nation-item-text">
        <h3>{country.toUpperCase()}</h3>
        <p>{count}</p>
      </div>
    </button>
  );
}

NationItem.propTypes = {
  country: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
