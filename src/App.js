import './App.css';
import React from 'react';
import { useState } from "react";

const InpBtn = stats =>
{
  const {name, index} = stats;
  const [bVal, setVal] = useState(0);

  const changeVal = () =>
  {
    setVal(prev => prev >= 9? 0:prev + 1);
  };

  const getName = () => {
    return name;
  }

  return (
    <button 
    className={index}
    onClick={changeVal}
    >{bVal === 0? "" : bVal}
    </button>
  )
}

const inputField = [];

function createNewTable()
{
  for(var i = 1; i <= 9; i++)
  {
    for(var j = 1; j <= 9; j++)
    {
      inputField.push("b-" + i + "-" + j)
    }
  }
}
createNewTable();


function App() {
  return (
    <div className="App">
      <header className="App-Header">
        Sudoku Solver
      </header>
      <div className="InputField">
        <div className="InputGrid">
          {
            inputField.map((x, y) => 
              <InpBtn name = {x} key = {y} index ={y%2 === 0? "inputButtons-1": "inputButtons-2"}></InpBtn>
            )
          }
        </div>
      </div>
      <div className="OutputField">
        <InpBtn name = "test" index = "inputButtons-1"></InpBtn>
      </div>
    </div>
  );
}

export default App;
