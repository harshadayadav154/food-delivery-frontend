import React from "react";

// Importing css
import "./AppDownload.css";
import { assets } from "../../assets/asset";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For better experience download <br /> FoodDelivery  app
      </p>
      <div className="app-download-platforms">
        <img src={assets.playStore} alt="playstore" />
        <img src={assets.appStore} alt="appstore" />
      </div>
    </div>
  );
};

export default AppDownload;
