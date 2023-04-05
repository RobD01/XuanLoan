import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import "../style/font.css";
import "../style/main.css";
import { fabrics } from "../services/Fabrics";
import { fabricsAoDai } from "../services/Fabrics";

const Fabrics = () => {
  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Fabrics</h2>

      {/* Fabrics Ao Dai*/}
      <ItemGrid title="Fabrics For Ao Dai" list={fabricsAoDai} />

      {/* Fabrics */}
      <ItemGrid title="Fabrics by the Yard" list={fabrics} />
    </div>
  );
};

export default Fabrics;
