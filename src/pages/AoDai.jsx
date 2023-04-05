import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import "../style/font.css";
import "../style/main.css";
import { aoDai } from "../services/AoDai";

const AoDai = () => {
  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Women's Fashion</h2>

      {/* Ao Dai */}
      <ItemGrid title="Ao Dai" list={aoDai} />
    </div>
  );
};

export default AoDai;
