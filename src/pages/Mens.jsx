import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import "../style/font.css";
import "../style/main.css";

// Image
// Mens Ao Dai
import image10 from "../images/mens-ao-dai/10.jpg";
import image11 from "../images/mens-ao-dai/11.jpg";
import image12 from "../images/mens-ao-dai/12.jpg";
import image13 from "../images/mens-ao-dai/13.jpg";

// Mens Suit
import suit1 from "../images/mens-suit/1.jpg";
import suit2 from "../images/mens-suit/2.jpg";
import suit3 from "../images/mens-suit/3.jpg";
import suit4 from "../images/mens-suit/4.jpg";
import suit5 from "../images/mens-suit/5.jpg";
import suit6 from "../images/mens-suit/6.jpg";
import suit7 from "../images/mens-suit/7.jpg";
import suit8 from "../images/mens-suit/8.jpg";
import suit9 from "../images/mens-suit/9.jpg";
import suit10 from "../images/mens-suit/10.jpg";
import suit11 from "../images/mens-suit/11.jpg";

const Mens = () => {
  // Images

  const menSuit = [[suit3], [suit6], [suit9], [suit11]];

  const mensAoDai = [[image10], [image11], [image12], [image13]];

  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Mens Fashion</h2>

      {/* Mens Suits */}
      <ItemGrid title="Men's Suits" list={menSuit} />

      <ItemGrid title="Men's Ao Dai" list={mensAoDai} />
    </div>
  );
};

export default Mens;
