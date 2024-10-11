import './App.css';

import { useDispatch } from 'react-redux';
import { increase, decrease } from './actions/counterActions';

import ViewCounter from './ViewCounter';

function App() {
  const dispatch = useDispatch(); // Initierar dispatch

  function handleIncrease() {
    dispatch(increase(5)); // Startar uppdatering av store med att kalla på den action vi vill köra och skicka med vad vi vill spara i vår store
  }

  function handleDecrease() {
    dispatch(decrease(5));
  }

  return (
    <div className="App">
      <ViewCounter />
      <button onClick={ handleIncrease }>Öka</button>
      <button onClick={ handleDecrease }>Minska</button>
    </div>
  )
}

export default App
