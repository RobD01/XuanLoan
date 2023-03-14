import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import "../style/font.css";
import "../style/main.css";

// images
// kids blanket
import image29 from "../images/kids-blanket/29.jpg";
import image30 from "../images/kids-blanket/30.jpg";

const Kids = () => {
  // Images

  const aoDai = [
    [
      "https://images.pexels.com/photos/6747293/pexels-photo-6747293.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Áo dài may sẵn. Quần tay may sẵn. Tắt cả âu phục Nam và Nữ",
    ],
    [
      "https://images.pexels.com/photos/6747311/pexels-photo-6747311.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Đầy đũ vãi may quần áo Đàn Ba và Đàn Ông. Vãi may áo dài",
    ],
    [
      "https://images.pexels.com/photos/6747313/pexels-photo-6747313.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Vãi may đồ Vest. Vãi may quần tay",
    ],
  ];

  const kidsBlanket = [[image29], [image30]];

  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Kids</h2>

      {/* Ao Dai */}
      <ItemGrid title="Ao Dai" list={aoDai} />
      <ItemGrid title="Kids Blankets" list={kidsBlanket} />
    </div>
  );
};

export default Kids;
