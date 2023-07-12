import React from 'react';


const AirportComponent = ({ setInputValue, onClick }) => {

  return (
    <form onSubmit={onClick} className="identify-airport">
    <input id="airport-input"type='text' 
      onChange={e => setInputValue(e.target.value)}>
       Enter Airport Identifier HERE
    </input>
     <button className="button">Submit</button>
  </form>
  )
}

export default AirportComponent