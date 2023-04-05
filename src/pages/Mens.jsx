import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import ItemGridLink from "../components/ItemGridLink";
import "../style/font.css";
import "../style/main.css";

// Image
// Mens Ao Dai
import image10 from "../images/mens-ao-dai/10.jpg";
import image11 from "../images/mens-ao-dai/11.jpg";
import image12 from "../images/mens-ao-dai/12.jpg";
import image13 from "../images/mens-ao-dai/13.jpg";

// Mens Suit
import suit3 from "../images/mens-suit/3.jpg";
import suit6 from "../images/mens-suit/6.jpg";
import suit9 from "../images/mens-suit/9.jpg";
import suit11 from "../images/mens-suit/11.jpg";

const Mens = () => {
  // Images

  const menSuit = [
    { image: suit3, id: 1, text: "Waistcoat, Black", price: 20 },
    { image: suit6, id: 2, text: "Vest, Black, Striped", price: 40 },
    { image: suit9, id: 3, text: "Vest, Navy Blue", price: 40 },
    { image: suit11, id: 4, text: "Waistcoat, Beige", price: 20 },
  ];

  const mensAoDai = [[image10], [image11], [image12], [image13]];

  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Mens Fashion</h2>

      {/* Mens Suits */}
      <ItemGridLink title="Men's Suits" list={menSuit} section="mens" />

      <ItemGrid title="Men's Ao Dai" list={mensAoDai} />
    </div>
  );
};

export default Mens;
