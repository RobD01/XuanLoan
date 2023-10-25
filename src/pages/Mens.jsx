import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import ItemGridLink from "../components/ItemGridLink";
import "../style/font.css";
import "../style/main.css";

import { menSuit, mensAoDai } from "../services/Mens";

const Mens = () => {
  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Mens Fashion</h2>

      {/* Mens Suits */}
      <ItemGrid title="Men's Suits" list={menSuit} section="mens" />

      <ItemGrid title="Men's Ao Dai" list={mensAoDai} />
    </div>
  );
};

export default Mens;
