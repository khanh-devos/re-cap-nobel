import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './App.css';
import { fetchNobel } from './redux/nationSlice/NationSlice';
import Allroutes from './routes/Allroutes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNobel());
  }, [dispatch]);

  return (
    <div className="App">
      <Allroutes />
    </div>
  );
}

export default App;
