import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [p1, setP1] = useState(1000);
  const [p2, setP2] = useState(2000);
  const [p3, setP3] = useState(3000);

  const mutialize = useCallback(() => {
    console.log('mutualizing');
    document.querySelector('p#p2').innerHTML = 'mutualized ouside react';
  }, [])

  useEffect(() => {
    setTimeout(() => mutialize, 2000)
  }, [mutialize])

  console.log('rendering');
  return (
    <div className="App">
      <header className="App-header">
        <p id='p1'>{p1}</p>
        <p id='p2'>{p2}</p>
        <p id='p3'>{p3}</p>
        <button onClick={() => setP1(p1+1)}>Count 1</button>
        <button onClick={() => setP2(p2+1)}>Count 2</button>
        <button onClick={() => setP3(p3+1)}>Count 3</button>
        <button onClick={mutialize}>Trigger mutualize outside React</button>
      </header>
    </div>
  );
}

export default App;
