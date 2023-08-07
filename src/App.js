import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Nation from './components/Nation';
import { fetchNobel } from './redux/nationSlice/NationSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNobel());
  }, [dispatch]);

  return (
    <div className="App">
      <Nation />
    </div>
  );
}

export default App;
