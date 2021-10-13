import { useCallback, useEffect, useState } from 'react';
import './App.css';

const worker = new Worker('worker.js');

function App() {

  const [number, setNumber] = useState(0);

  const update = useCallback(() => {
    worker.postMessage(number);
  }, [number]);

  useEffect(() => {
    worker.addEventListener("message", event => {
      setNumber(event.data);
    })
  }, []);

  return (
    <div className="App">
      <button onClick={update}>test</button>
      <div>{number}</div>
    </div>
  );
}

export default App;
