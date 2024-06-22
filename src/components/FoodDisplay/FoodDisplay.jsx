import React, { useContext } from "react";

import "./FoodDisplay.css";

// importing context
import { StoreContext } from "../../Context/StoreContext";
import FoodItemCard from "../FoodItemCard/FoodItemCard";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes near you</h2>
      <dic className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItemCard
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </dic>
    </div>
  );
};

export default FoodDisplay;
