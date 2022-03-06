import React from "react";
import location from "../../assets/placeholder.png";
import gmail from "../../assets/gmail.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
const SixthPage = () => {
  return (
    <div className="sixth-page" id="contact">
      <div className="sixth-page-title">
        <h1>Contact Me!</h1>
      </div>
      <div className="sixth-page-text">
        <img src={location} />
        <h3>Lublin/Poland</h3>
      </div>
      <div className="sixth-page-icons">
        <h3>Send me message on:</h3>
        <a>
          <img src={gmail} /> <h2>maciekwawryszuk@gmail.com</h2>
        </a>
        <a href="https://twitter.com/Maciej02191496">
          <img src={twitter} />
        </a>
        <a href="https://www.linkedin.com/in/maciek-wawryszuk-484737225">
          <img src={linkedin} className="linkedin" />
        </a>
      </div>
      <div className="sixth-page-code-logo">
        <img src="https://cdn-icons-png.flaticon.com/512/59/59118.png" />
      </div>
    </div>
  );
};

export default SixthPage;
