import { useState, useEffect } from 'react';
import './App.css';



const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("You have change counter to " + counter)
  }, [counter]);
  
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCounter) => prevCounter + 5)}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCounter) => prevCounter - 5)}>-</button>
      
    </div>
  );
}

export default App;
