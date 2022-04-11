
import './App.css';
import { useState } from 'react';

function App() {
  const [walk, setWalk] = useState(true);
  const handleClick = () =>{
    setWalk(!walk)
    alert(walk ? "Stop to next" : "walk to next")
  }
   return (
    <>
    <button onClick={handleClick}>
      Change to {walk ? 'Stop' : 'walk'}
    </button>
    <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}

export default App;
