import React from "react";

import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <h1 id="city">Tokyo</h1>
      <h3 id="hour-date"> </h3>
      <h3 id="temperature">20°</h3>
      <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" id="icon" />
      <br />
      <h5 id="description">Rainy</h5>
      <hr />
      <ul className="moreInfo">
        <li id="real-feel">Real Feel: 18°c</li>
        <li id="humidity">Humidity: 15%</li>
        <li id="wind-speed">Wind: 16 km/h</li>
      </ul>
    </div>
  );
}
