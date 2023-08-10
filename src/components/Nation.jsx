import { useSelector } from 'react-redux';
import MyHeader from './Header';

import NationItem from './NationItem';

export default function Nation() {
  const { uniqueCountries, amount } = useSelector(((store) => store.nobel));

  return (
    <div className="nation">

      <MyHeader stats="Stats by country" title="World Nobel Winners" country="THE WORLD" amount={amount} />

      <div className="nation-grid-container">
        {
        uniqueCountries.map(({ id, country, cities }, index) => (
          <NationItem
            key={id}
            index={index}
            country={country}
            count={cities.length}
          />
        ))
        }
      </div>
    </div>
  );
}
