import './App.css';
import React from 'react';
import { useState } from "react";

const InpBtn = stats =>
{
  const {index, x, y} = stats;
  const [bVal, setVal] = useState(0);
  const [isHovered, setHover] = useState(0);

  const handleMouseEnter = () => {
    inputField.filter(e => e.index == 6).forEach(e => {e.style = btnStyleHoverNear})
    setHover(true);
  };
 const handleMouseLeave = () => {
    setHover(false);
  };

  const btnStyle1 = {
    width: "58px",
    height: "58px",
    backgroundColor: "rgb(187, 236, 255)",
    textAlign: "center",
    fontSize: "20px", 
    margin: "1px 1px 1px 1px",
    border:"none"

  }
  const btnStyle2 = {
    width: "58px",
    height: "58px",
    backgroundColor: "rgb(255, 145, 209)",
    textAlign: "center",
    fontSize: "20px", 
    margin: "1px 1px 1px 1px",
    border:"none"

  }
  const btnStyleHover = {
    width: "58px",
    height: "58px",
    backgroundColor: "rgb(152, 255, 67)",
    textAlign: "center",
    fontSize: "20px", 
    margin: "1px 1px 1px 1px",
    border:"none",
    borderRadius: "15px"

  }
  const btnStyleHoverNear = {
    width: "58px",
    height: "58px",
    backgroundColor: "rgb(67, 255, 195)",
    textAlign: "center",
    fontSize: "20px", 
    margin: "1px 1px 1px 1px",
    border:"none"

  }

  const changeVal = () =>
  {
    setVal(prev => prev >= 9? 0:prev + 1);
  };

  const getStyle = () =>
  {
    switch(index %2 === 0)
    {
      case true: return isHovered? btnStyleHover : btnStyle1;
      case false: return isHovered? btnStyleHover : btnStyle2;
      default: return btnStyle1; 
    }
  }

  return (
    <button 
    className={index}
    onClick={changeVal}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={getStyle()}
    >{bVal === 0? '' : bVal}
    </button>
  );
}

const inputField = [];

const colorNearby = (arr) =>
  {
    arr.forEach(element => {
      
    });
  }

function createNewTable()
{
  for(var i = 1; i <= 9; i++)
  {
    for(var j = 1; j <= 9; j++)
    {
      inputField.push({x: i, y: j})
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
            inputField.map((elm, i) => 
              <InpBtn x = {elm.x} y = {elm.y} key = {i} index = {i + 1}></InpBtn>
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
