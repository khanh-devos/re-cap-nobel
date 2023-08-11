import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './App.css';
import { fetchNobel } from './redux/nationSlice/NationSlice';
import Allroutes from './routes/Allroutes';

function App() {
  const { isLoading } = useSelector((store) => store.nobel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNobel());
  }, [dispatch]);

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className="App">
      <Allroutes />
    </div>
  );
}

export default App;
