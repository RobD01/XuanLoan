import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import "../style/font.css";
import "../style/main.css";

// images : Fabrics
import image4 from "../images/fabrics/4.jpg";
import image19 from "../images/fabrics/19.jpg";
import image23 from "../images/fabrics/23.jpg";
import image24 from "../images/fabrics/24.jpg";
import image25 from "../images/fabrics/25.jpg";
import image32 from "../images/fabrics/32.jpg";
import image33 from "../images/fabrics/33.jpg";
import image34 from "../images/fabrics/34.jpg";

// images : Fabrics Ao Dai

import image5 from "../images/fabrics-ao-dai/5.jpg";
import image6 from "../images/fabrics-ao-dai/6.jpg";
import image7 from "../images/fabrics-ao-dai/7.jpg";
import image8 from "../images/fabrics-ao-dai/8.jpg";
import image9 from "../images/fabrics-ao-dai/9.jpg";

const Fabrics = () => {
  // Images
  const fabrics = [
    [image4],
    [image19],
    [image23],
    [image23],
    [image24],
    [image25],
    [image32],
    [image33],
    [image34],
  ];

  const fabricsAoDai = [[image5], [image6], [image7], [image8], [image9]];

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
