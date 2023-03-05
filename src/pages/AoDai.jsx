import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import "../style/font.css";
import "../style/main.css";

const AoDai = () => {
  // Images
  const aoDai = [
    [
      "https://images.pexels.com/photos/899757/pexels-photo-899757.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Áo dài may sẵn. Quần tay may sẵn. Tắt cả âu phục Nam và Nữ",
    ],
    [
      "https://images.pexels.com/photos/3218724/pexels-photo-3218724.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Đầy đũ vãi may quần áo Đàn Ba và Đàn Ông. Vãi may áo dài",
    ],
    [
      "https://images.pexels.com/photos/11441492/pexels-photo-11441492.png?auto=compress&cs=tinysrgb&w=600",
      "Vãi may đồ Vest. Vãi may quần tay",
    ],
  ];

  const sunglasses = [
    [
      "https://images.pexels.com/photos/4223655/pexels-photo-4223655.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Áo dài may sẵn. Quần tay may sẵn. Tắt cả âu phục Nam và Nữ",
    ],
    [
      "https://images.pexels.com/photos/249210/pexels-photo-249210.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Đầy đũ vãi may quần áo Đàn Ba và Đàn Ông. Vãi may áo dài",
    ],
    [
      "https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Vãi may đồ Vest. Vãi may quần tay",
    ],
  ];

  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Fashion</h2>

      {/* Ao Dai */}
      <ItemGrid title="Ao Dai" list={aoDai} />

      {/* Sunglasses */}
      <ItemGrid title="Sunglasses" list={sunglasses} />
    </div>
  );
};

export default AoDai;
