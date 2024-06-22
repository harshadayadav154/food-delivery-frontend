import React from "react";

//importing css
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favorite food here</h2>
        <p>
          Explore a variety of delicious cuisines and choose from our diverse
          menu, featuring options like pizza, sushi, salads, and more. Track
          your order in real-time with our easy-to-use food delivery map,
          ensuring your meal arrives hot and fresh, right to your doorstep.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
