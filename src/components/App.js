
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[counter,setCounter]=useState(0)

  const increment=()=>{
    setCounter(counter+1);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked <span>{counter}</span> times</p>

        <button onClick={increment}>Click me</button>
    </div>
  )
}

export default App
