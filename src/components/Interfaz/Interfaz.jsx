import React from 'react';
import "./Interfaz.css";
const Interfaz = () => {
  return (
    <div id="div-form">
      <p id="div-title"><img src="title.png"></img></p>
      <p id="div-expired"><img src="icon.png"></img>This email has expired</p>
      <p id="div-text">Since this email was not confirmed in the timespan of one week, your data has been deleted. You can create another organization. </p>
    </div>
  );
}

export default Interfaz;
