import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import "../style/font.css";
import "../style/main.css";

import { tea, hair, blanket, house, faceMask } from "../services/Products";

const Products = () => {
  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Products</h2>

      {/* Green Oil & Tea Products */}

      <ItemGrid title="Green Oil and Tea Products" list={tea} />

      {/* Hair Products */}

      <ItemGrid title="Shampoo and Hair Dye Products" list={hair} />

      {/* Bed Products */}
      <ItemGrid title="Blankets & Pillows" list={blanket} />

      <ItemGrid title="Household Products" list={house} />

      <ItemGrid title="Face Mask" list={faceMask} />
    </div>
  );
};

export default Products;
