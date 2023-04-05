import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import "../style/font.css";
import "../style/main.css";
import { kidsAoDai, kidsBlanket } from "../services/Kids";

const Kids = () => {
  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Kids</h2>

      {/* Ao Dai */}
      <ItemGrid title="Ao Dai" list={kidsAoDai} />
      <ItemGrid title="Kids Blankets" list={kidsBlanket} />
    </div>
  );
};

export default Kids;
