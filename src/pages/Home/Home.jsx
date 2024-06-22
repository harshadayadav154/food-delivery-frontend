import React, { useState } from "react";

// importing css
import "./Home.css";

// importing components
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

function Home() {
  // state variable
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />

      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
}

export default Home;
