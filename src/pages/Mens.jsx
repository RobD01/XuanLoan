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

const Mens = () => {
  // Images

  const menSuit = [
    [
      "https://images.pexels.com/photos/5520327/pexels-photo-5520327.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    [
      "https://images.pexels.com/photos/5520289/pexels-photo-5520289.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    [
      "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  ];

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
