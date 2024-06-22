import React from "react";

// importing css
import "./ExploreMenu.css";

// importing menu component
import { menu_list } from "../../assets/asset";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore menu</h1>
      <p className="explore-menu-text">
        Discover a tantalizing array of flavors from around the world as you
        browse through our diverse food menu on our convenient food delivery
        app. Whether you're craving spicy Thai cuisine, comforting Italian
        pasta, or savory American burgers, we've got something to satisfy every
        palate.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
