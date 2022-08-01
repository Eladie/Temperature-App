import './App.css';
import React, {useState} from 'react';


function App() {

  let newTemp = 15;
  const [tempValue, setTempValue] = useState(newTemp)
  const [tempColor, setTempColor] = useState("cold")
  

  const handleClick = (e) => {
    e.target.textContent ==="+" ? newTemp = tempValue + 1 : newTemp = tempValue - 1;
    newTemp >= 20 ? setTempColor("hot") : setTempColor("cold")
    if(newTemp > 30 || newTemp < 0) {
      return
    }
    setTempValue(newTemp) 
  }


  return (
    <div className="app-container">
      <div className='temperature-display-container'>
        <div className={`temperature-display ${tempColor}`}>{tempValue}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClick}>-</button>
      </div>
    </div>
  );
}

export default App;
