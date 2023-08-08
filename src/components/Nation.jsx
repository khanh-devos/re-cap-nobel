import { useSelector } from 'react-redux';

import NationItem from './NationItem';

export default function Nation() {
  const { uniqueCountries } = useSelector(((store) => store.nobel));

  return (
    <div>
      {
      uniqueCountries.map(({ id, country, cities }) => (
        <NationItem
          key={id}
          country={country}
          count={cities.length}
        />
      ))
      }
    </div>
  );
}
