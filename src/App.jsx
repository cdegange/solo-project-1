import React, { useState, useEffect } from 'react';
import './App.scss';



// import other componenents
import AirportComponent from '../components/airport';


const App = () => {

// add state here

  const [ metarValue, setMetarValue ] = useState("")
  const [ inputValue, setInputValue ] = useState("")

// set input value state to be entered value of text box

  const onClick = (e) => {
    e.preventDefault()
    setInputValue(e.target.value);
  }

// when new input value, fetch METAR from API and setMetarValue

  useEffect(() => {
    fetch('/noaa', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      body: JSON.stringify({ inputValue })
      }
    })
      .then((data) => data.json())
      .then((data) => setMetarValue(data))
  }, [inputValue])


// return rendered content below here

  return (
    <>
      <h1 className="header">Sky High Weather</h1>
       <AirportComponent />
      <div>
        <ul className="active-metar">{metarValue}</ul>
      </div>
    </>
  ) 
};

export default App;