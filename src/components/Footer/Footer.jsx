import React from "react";

// importing css
import "./Footer.css";
import { assets } from "../../assets/asset";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            ratione! At architecto odio itaque, sit autem asperiores tenetur
            quisquam accusantium unde culpa ex dolore reiciendis omnis porro
            saepe veniam ullam enim, aspernatur non, sunt blanditiis. Eligendi
            nemo ea perferendis maiores, est tenetur eos id cumque ratione.
            Quasi vero dolor aliquid.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook} alt="facebook" />
            <img src={assets.twitter} alt="twitter" />
            <img src={assets.linkedin} alt="linkedin" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-222-444-5555</li>
            <li>mail@fooddelivery.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024</p>
    </div>
  );
};

export default Footer;
