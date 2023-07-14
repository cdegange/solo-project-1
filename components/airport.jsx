// import React from 'react';
import React, { useState } from "react";
import '../src/App.scss';


const AirportComponent = ({ updateMetar }) => {

  const [tempValue, setTempValue] = useState("");

  function handleEvent(e) {
    let value = e.target.value;
    setTempValue(value);
  }

  function handleSubmit(e) {
    console.log(e.target.value)
    e.preventDefault();
    updateMetar(tempValue);
  }

  return (
    <form className="identify-airport" onSubmit={handleSubmit}>
      <input
        className="airport-input"
        type="text"
        onChange={handleEvent}
        placeholder="Enter Airport Identifier HERE"
      />
      <button id="submitButton" className="submitButton" type="submit">
        Submit
      </button>
    </form>
  )
}

export default AirportComponent