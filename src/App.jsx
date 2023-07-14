import React, { useState, useEffect } from 'react';
import './App.scss';


// import other componenents
import AirportComponent from '../components/airport.jsx';


const App = () => {

// add state here

  const [ metarValue, setMetarValue ] = useState("")
  // const [ inputValue, setInputValue ] = useState("KMYF")

// set input value state to be entered value of text box


  const handleClick = async (input) => {
    console.log("input", input);
    try {
      const data = await fetch(`https://api.checkwx.com/metar/${input}?x-api-key=93d4c43c20254a0e9cdfdab6fa`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({string: input})
          })
          let reader = data.body.getReader();
          console.log('data', reader)
         const toJson = await data.json();
         console.log('toJson', toJson)
         setMetarValue(toJson);
          console.log('metar value set: ', data)
  
        } catch (error) {
          console.log("Error processing fetch request: ", error);
        }   
    
    // try {
    // const data = await fetch('/noaa', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({string: input})
    //     })
    //     let reader = data.body.getReader();
    //     console.log('data', reader)
    //    const toJson = await data.json();
    //    console.log('toJson', toJson)
    //    setMetarValue(toJson);
    //     console.log('metar value set: ', data)

    //   } catch (error) {
    //     console.log("Error processing fetch request: ", error);
    //   }       
  }
// return rendered content below here

  return (
    <>
      <h1 className="header">Sky High Weather</h1>
       <AirportComponent updateMetar={handleClick}/>
      <div className="metar-display">
        <h2>AIRPORT INFO</h2>
        <ul className="active-metar">{metarValue}</ul>
      </div>
    </>
  ) 
};

export default App;