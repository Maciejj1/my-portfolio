import React from "react";
import weatherapp from "../../assets/weatherapp.png";
import vape from "../../assets/vapeshop.png";
import mysaving from "../../assets/mysavings.png";
import four from "../../assets/4.png";
const FifthPage = () => {
  return (
    <div className="fifth-page" id="projects">
      <div className="fifth-page-title">
        <h1>Projects</h1>
      </div>
      <div className="fifth-page-container">
        <div className="fifth-page-text">
          <h3>Online Vapeshop</h3>
          <h3>WeatherApp</h3>
          <h3>MySaving</h3>
        </div>

        <div className="fifth-page-image">
          <a href="https://maciejj1.github.io/mysaving/">
            <img src={mysaving} />
          </a>

          <a href="https://maciejj1.github.io/WeatherApp/">
            <img src={weatherapp} />
          </a>
          <a href="https://maciejj1.github.io/CloudShop/">
            <img src={vape} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FifthPage;
