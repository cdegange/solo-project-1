import React from 'react';
import '../src/App.scss';


const AirportComponent = ({ setInputValue }) => {

  return (
    <form className="identify-airport">
    <input className="airport-input"type='text' 
      onChange={e => setInputValue(e.target.value)}
      placeholder="Enter Airport Identifier HERE"
    />
     <button className="submitButton">Submit</button>
  </form>
  )
}

export default AirportComponent